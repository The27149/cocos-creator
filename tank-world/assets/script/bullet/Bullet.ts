import { ECAMP, GConst, GGroup } from "../common/Global";
import Utils from "../common/Utils";
import ColliderHandler from "../tank/ColliderHandler";
import Tank from "../tank/Tank";
import BulletMgr from "./BulletMgr";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Bullet extends cc.Component {
    public type: number = 0;        //子弹类型
    public campType: ECAMP = ECAMP.self;    //阵营
    public damage: number = 0;              //伤害
    public massPos: cc.Vec2 = cc.v2();      //质心
    public pos: cc.Vec2 = cc.v2();          //位置
    public isDead: boolean = false;        //是否有效
    public lastHitTank: any = null;        //击中的目标
    private v2: cc.Vec2 = cc.v2();          //零向量

    public reset(campType: ECAMP, damage: number, dir: cc.Vec2) {
        this.isDead = false;
        this.campType = campType;
        this.damage = damage;
        this.node.setPosition(this.pos);
        let impulse = dir.mulSelf(BulletMgr.ins.bulletSpeed);
        let rigidBody = this.node.getComponent(cc.RigidBody);
        rigidBody.linearVelocity = this.v2;
        rigidBody.applyLinearImpulse(impulse, this.massPos, true);
        let rad = Math.atan2(dir.y, dir.x);
        this.node.angle = Utils.radToEuler(rad);
    }

    public onCollisionEnter(other: cc.Collider, self: cc.Collider) {
        if (this.isDead) return;
        let group = other.node.group;
        switch (group) {
            case GGroup.ground://落地
                this.bulletBomb();
                break;
            case GGroup.tank: //击中
                let tank = other.node.getComponent(ColliderHandler).proxy as Tank;
                if (tank.campType !== this.campType && !tank.isDead) {
                    this.lastHitTank = tank;
                    this.bulletBomb();
                }
                break;
        }
    }

    /**子弹爆炸 */
    private bulletBomb() {
        this.isDead = true;
        this.node.getComponent(cc.RigidBody).linearVelocity = this.v2;
        BulletMgr.ins.createBomb(this.node, () => {
            BulletMgr.ins.destroyBullet(this);
        });
    }

    protected update(dt: number): void {
        let absX = Math.abs(this.node.x),
            absY = Math.abs(this.node.y);
        if (absX > GConst.viewBorderW || absY > GConst.viewBorderH) {
            BulletMgr.ins.destroyBullet(this);
        }
    }

    /**销毁前 */
    public stopAllState() {
        //及时解除对tank的引用
        this.lastHitTank = null;
        this.node.getComponent(cc.RigidBody).linearVelocity = this.v2;
    }

}
