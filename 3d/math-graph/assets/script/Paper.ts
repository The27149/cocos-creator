import { _decorator, Component, instantiate, Node, Prefab, v3, Vec3 } from 'cc';
const { ccclass, property } = _decorator;
/**单变量结构 */
interface IFactor {
    rate: number;   //系数
    type: EFuncType;    //类型
    param: number[];    //对应类型的参数
}

/**方程的结构 */
interface IEquation {
    x?: IFactor[];
    y?: IFactor[];
    z?: IFactor[];
    d?: number
}

/**基本函数类型 */
enum EFuncType {
    pow,        //幂函数
    exp,        //指数函数
    log,        //对数
    sin,
    cos,
    tan
}



@ccclass('Paper')
export class Paper extends Component {

    @property(Prefab)
    pointPre: Prefab = null;

    @property(Node)
    pointsContainer = null;

    private domain = {
        x0: -5,
        x1: 5,
        dx: 0.1,
        y0: -5,
        y1: 5,
        dy: 0.1,
        z0: -5,
        z1: 5,
        dz: 0.1,

    }

    /**特殊方程集合 */
    private methods = new Map<number, Function>();

    protected onLoad(): void {
        this.methods.set(EFuncType.pow, () => {

        })
    }

    start() {
        this.draw([`x`, `z`], `y`);

    }

    /**函数 */
    private f(param: Vec3) {
        let { x, y, z } = param;
        return x ** 2 * Math.sin(x) + Math.cos(x) + Math.sin(z);

    }

    /**方程 */
    private equation() {

    }

    /**求解初等一元方程的解 */
    private eq(type: EFuncType, ...arg: number[]) {

    }

    /**绘制 确定自变量与应变量 */
    private draw(v: string[], r: string) {
        if (v.length === 0) return;
        var param = v3();
        param.x = param.y = param.z = 0;
        let res = 0;

        let tag = v[0];
        let start = this.domain[`${tag}0`],
            end = this.domain[`${tag}1`],
            dv = this.domain[`d${tag}`];
        for (let i = start; i < end; i += dv) {
            let tag1 = v[1];
            if (tag1) {
                let start1 = this.domain[`${tag1}0`],
                    end1 = this.domain[`${tag1}1`],
                    dv1 = this.domain[`d${tag1}`];
                for (let j = start1; j < end1; j += dv1) {
                    param[tag] = i;
                    param[tag1] = j;
                    param[r] = this.f(param);
                    this.createPoint(param);
                }

            } else {
                param[tag] = i;
                param[r] = this.f(param);
                this.createPoint(param);
            }

        }
    }

    private createPoint(pos: Vec3): Node {
        let node = instantiate(this.pointPre);
        node.parent = this.pointsContainer;
        node.setPosition(pos.clone());
        return node;
    }
}

