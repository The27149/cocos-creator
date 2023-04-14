import { _decorator, Component, Node, v3, Vec3 } from 'cc';
import { God, IBallParam } from '../../God';
import { Motion } from '../../common/Motion';
const { ccclass, property } = _decorator;

@ccclass('Ball')
export class Ball extends Motion {
    private G: number = 6.667e-11;

    /**当前天体的运动受哪些天体的影响 */
    public dragList: Ball[] = [];
    private god: God = null;
    private id: number = 0;
    private r: number = 0;

    public init(cfg: IBallParam, god: God) {
        this.god = god;
        this.id = cfg.id;
        this.p = cfg.pos;
        this.v = cfg.v0;
        this.m = cfg.weight;
        this.r = cfg.diam;
        this.name = cfg.name;
        this.node.setPosition(this.p);
    }

    public run() {
        this.dragList = this.god.balls;
        this.isMoveOpen = true;
    }

    update(dt: number) {
        if (!this.isMoveOpen) return;
        for (let item of this.dragList) {
            if (this.id === item.id) continue;
            // let s = this.p.subtract(item.p).lengthSqr();
            let s = Vec3.squaredDistance(this.p, item.p);
            if (s === 0) continue;
            let f_size = this.G * this.m * item.m / s;
            let f = item.p.clone().subtract(this.p).normalize().multiplyScalar(f_size);
            this.f.add(f);
        }
        super.update(dt);
    }


}

