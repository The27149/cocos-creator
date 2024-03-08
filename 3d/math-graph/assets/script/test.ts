import { Vec3, _decorator, v3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('test')
export class test {

    /**定义: 等式左边 */
    private f1(p: Vec3): number {
        const { x, y, z } = p;
        return x ** 2;
    }

    /**定义: 等式右边 */
    private f2(p: Vec3): number {
        const { x, y, z } = p;
        return y;
    }

    /**定义: 变量范围 */
    private domainX: number[] = [0, 100];
    private domainY: number[] = [0, 100];
    private domainZ: number[] = [0, 100];
    /**定义: 变量分辨率（单方向指定范围内有多少个测试点） */
    private resolution: number = 1000;
    /**定义: 测试比 即测试距离/单位距离 的比例（多少距离判定通过测试）*/
    private testRate: number = 1;

    /**单位距离 (以x方向为标准)*/
    private dx: number = 1;
    /**单位测试距离 */
    private df: number = 1;

    private init() {
        this.dx = (this.domainX[1] - this.domainX[0]) / this.resolution;
        this.df = this.dx * this.testRate;
    }

    /**测试单点是否通过 */
    private test(p: Vec3) {
        return
    }

    /**计算所有有效的点 */
    private getGoodPoints() {
        let x0 = this.domainX[0],
            x1 = this.domainX[1],
            y0 = this.domainY[0],
            y1 = this.domainY[1],
            z0 = this.domainZ[0],
            z1 = this.domainZ[1];
        let p = v3();
        let pList = [];
        for (let i = x0; i < x1; i += this.dx) {
            for (let j = y0; j < y1; j += this.dx) {
                for (let k = z0; k < z1; k += this.dx) {
                    p.x = i;
                    p.y = j;
                    p.z = k;
                    if (Math.abs(this.f1(p) - this.f2(p)) < this.df) {
                        pList.push(v3(i, j, k));
                    }
                }
            }
        }
    }
}

