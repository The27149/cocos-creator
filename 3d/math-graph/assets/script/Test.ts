import { Vec3, _decorator, v3 } from 'cc';
const { ccclass, property } = _decorator;

/**分辨率模式 */
enum ResolutionMode {
    lenFixed,   //固定单位距离，动态点数量
    numFixed    //固定点数量，动态单位距离
}

/**计算顶点的方式 */
enum FuncMode {
    xyz,    //隐函数模式 
    t       //参数模式
}

@ccclass('test')
export class Test {
    private constructor() { }
    private static _ins: Test = null;
    public static get ins(): Test {
        if (!this._ins) {
            this._ins = new Test();
            this._ins.init();
        }
        return this._ins;
    }

    private curFuncMode: FuncMode = FuncMode.t;

    /**定义： 参数方程 */
    private ft(t: number): Vec3 {
        let p = v3();
        p.x = 2 * Math.cos(t);
        p.y = t / 5;
        p.z = 2 * Math.sin(t);
        return p;
    }
    /**参数t范围 */
    private tRange: number[] = [-20, 20];
    /**参数t变化量 */
    private dt: number = 0.01;


    /**定义: 隐函数 */
    private fxyz(x: number = 0, y: number = 0, z: number = 0): number {
        // return x ** 2 + y ** 2 + z ** 2 - 1;
        // return x ** 3 - y;
        // return (x ** 2 + 9 * y ** 2 / 4 + z ** 2 - 1) ** 3 - x ** 2 * z ** 3 - 9 * y ** 2 * z ** 3 / 80;
        // return (x ** 2 + (9 / 4) * y ** 2 + z ** 2 - 1) ** 3 - (9 / 80) * y ** 2 * z ** 3 - x ** 2 * z ** 3
        // return Math.sin(x) + Math.cos(z) - y;
        // return Math.sin(x) - y;
        // return x + y + z
        // return x ** 2 + z ** 2       //圆柱
        // return x ** 2 + z ** 2 - y;     //漏斗
        // return 0.1 * x ** 2 + 0.1 * y ** 2 - 0.1 * z ** 2; //圆锥1
        return x ** 2 / 2 + z ** 2 / 2 - y ** 2 / 2; //圆锥3
    }
    /**定义: 边界 */
    private border = 10
    private domainX: number[] = [-this.border, this.border];
    private domainY: number[] = [-this.border, this.border];
    private domainZ: number[] = [-this.border, this.border];
    /**定义：分辨率模式 */
    private resolutionMode: ResolutionMode = ResolutionMode.lenFixed;
    /**定义: 变量分辨率（单方向指定范围内有多少个测试点） */
    private resolution: number = 100;
    /**定义：单位距离 (以x方向为标准)*/
    private dx: number = 0.1;
    /**测试比 即测试距离/单位距离 的比例（多少距离判定通过测试）
     * 理论上最高值为0.5 保证每个实际的点只对应分辨率中的点只有唯一一个
     * 也不能太小，不然中有些实际点可能找不到分辨率中的点从而被丢弃
    */
    private testRate: number = 0.5;
    /**单位测试距离 */
    private df: number = 1;



    private validPoints: number[] = [];
    private validIndices: number[] = [];

    private init() {
        this.calcPoints(this.curFuncMode);
    }

    /**计算点 */
    private calcPoints(mode: FuncMode = FuncMode.xyz) {
        this.validIndices.length = 0;
        this.validPoints.length = 0;
        switch (mode) {
            case FuncMode.xyz:
                this.calcPointsByXYZ();
                break;
            case FuncMode.t:
                this.calcPointsByT();
                break;
        }
    }

    /**计算所有有效的点 */
    private calcPointsByXYZ() {
        if (this.resolutionMode === ResolutionMode.numFixed) {
            this.dx = (this.domainX[1] - this.domainX[0]) / this.resolution;
        }
        this.df = this.dx * this.testRate;
        let x0 = this.domainX[0],
            x1 = this.domainX[1],
            y0 = this.domainY[0],
            y1 = this.domainY[1],
            z0 = this.domainZ[0],
            z1 = this.domainZ[1];
        let count = 0;
        console.time(`calc:`)
        for (let i = x0; i < x1; i += this.dx) {
            for (let j = y0; j < y1; j += this.dx) {
                for (let k = z0; k < z1; k += this.dx) {
                    if (Math.abs(this.fxyz(i, j, k)) < this.df) {
                        let start = count * 3;
                        this.validPoints[start] = i;
                        this.validPoints[start + 1] = j;
                        this.validPoints[start + 2] = k;
                        this.validIndices[count] = count;
                        count++;
                    }
                }
            }
        }
        console.timeEnd(`calc:`)
    }

    private calcPointsByT() {
        const min = this.tRange[0],
            max = this.tRange[1],
            dt = this.dt;
        let count = 0;
        for (let t = min; t < max; t += dt) {
            let p = this.ft(t);
            let start = count * 3;
            this.validPoints[start] = p.x;
            this.validPoints[start + 1] = p.y;
            this.validPoints[start + 2] = p.z;
            this.validIndices[count] = count;
            count++;
        }
    }

    public getPoints(): number[] {
        return this.validPoints;
    }

    public getIndices(): number[] {
        console.log(`顶点数量：`, this.validIndices.length)
        return this.validIndices;
    }

    public getPointMax(): Vec3 {
        return v3(this.domainX[1], this.domainY[1], this.domainZ[1]);
    }

    public getPointMin(): Vec3 {
        return v3(this.domainX[0], this.domainY[0], this.domainZ[0]);
    }
}

