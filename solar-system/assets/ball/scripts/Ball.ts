import { _decorator, Component, Node, v3, Vec3 } from 'cc';
import { God, IBallParam } from '../../God';
const { ccclass, property } = _decorator;

@ccclass('Ball')
export class Ball extends Component {
    private G: number = 6.667e-11;

    /**当前天体的运动受哪些天体的影响 */
    public dragList: Ball[] = [];
    private isRuning: boolean = false;
    private god: God = null;
    private id: number = 0;

    private p: Vec3 = null;     //位置
    private f: Vec3 = null;
    private a: Vec3 = null;
    private v: Vec3 = null;
    private m: number = 0;
    private r: number = 0;



    public init(cfg: IBallParam, god: God) {
        this.god = god;
        this.id = cfg.id;
        this.p = cfg.pos;
        this.f = v3(0);
        this.a = v3(0);
        this.v = cfg.v0;
        this.m = cfg.weight;
        this.r = cfg.diam;
        this.name = cfg.name;
        this.node.setPosition(this.p);
        this.isRuning = false;
    }

    start() {

    }

    public run() {
        this.dragList = this.god.balls;
        this.isRuning = true;
    }

    update(dt: number) {
        if (!this.isRuning) return;
        //每帧更新天体的运动状态
        for (let item of this.dragList) {
            if (this.id === item.id) continue;
            // let s = this.p.subtract(item.p).lengthSqr();
            let s = Vec3.squaredDistance(this.p, item.p);
            if (s === 0) continue;
            let f_m = this.G * this.m * item.m / s;
            let f = item.p.clone().subtract(this.p).normalize().multiplyScalar(f_m);
            this.f.add(f);
        }
        this.a = this.f.multiplyScalar(1 / this.m);
        let dv = this.a.clone().multiplyScalar(dt);
        this.v.add(dv);
        let dp = this.v.clone().multiplyScalar(dt);
        this.p.add(dp);
        this.node.setPosition(this.p);
    }
}

