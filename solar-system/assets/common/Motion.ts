import { _decorator, Component, Node, v3, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

/**会根据牛二定律移动的物体 */
@ccclass('Motion')
export class Motion extends Component {

    protected isMoveOpen: boolean = false;
    protected p: Vec3 = v3();     //位置
    protected f: Vec3 = v3();     //合外力
    protected a: Vec3 = v3();     //加速度
    protected v: Vec3 = v3();     //速度
    protected m: number = 1;      //质量


    update(dt: number) {
        if (!this.isMoveOpen) return;
        if (this.f.length() === 0) return;
        this.a = this.f.multiplyScalar(1 / this.m);
        let dv = this.a.clone().multiplyScalar(dt);
        this.v.add(dv);
        let dp = this.v.clone().multiplyScalar(dt);
        this.p.add(dp);
        this.node.setPosition(this.p);
    }
}

