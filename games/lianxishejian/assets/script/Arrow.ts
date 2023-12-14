import Game from "./Game";
import SoundMgr from "./SoundMgr";
import { Global, SoundPath, VecGroup } from "./common/Global";
import Module from "./common/Module";
import Utils from "./common/Utils";



const { ccclass, property } = cc._decorator;

@ccclass
export default class Arrow extends cc.Component {
    @property(cc.Node)
    tail: cc.Node = null;

    private rigid: cc.RigidBody = null;
    /**x正方向 */
    private v10: cc.Vec2 = cc.v2(1, 0);
    /**射中箭靶的坐标 */
    private hitPoint: cc.Vec2 = cc.v2();
    /**是否是刚体静态模式 */
    private isStatic: boolean = true;
    /**箭的坐标组 */
    public posGroup: VecGroup = new VecGroup();
    private posOff: cc.Vec2 = cc.v2();
    /**当前速度 */
    private curSpeed: cc.Vec2 = cc.v2();

    protected onLoad(): void {
        this.rigid = this.node.getComponent(cc.RigidBody);
        this.posOff.x = this.tail.x;
        this.posOff.y = this.tail.y;
        this.posOff.negSelf();
    }

    public reset() {
        this.isStatic = true;
        this.rigid.type = cc.RigidBodyType.Static;
        this.updateSpeed(0, 0);
        this.updateUI(this.posGroup.world, this.v10);
    }

    public shoot(worldSpeed: cc.Vec2) {
        this.isStatic = false;
        this.rigid.type = cc.RigidBodyType.Dynamic;
        this.updateSpeed(worldSpeed.x, worldSpeed.y);
        Module.get(SoundMgr).playEffect(SoundPath.shoot);
    }

    /**手动更新箭的ui （位置，角度） */
    public updateUI(worldPos: cc.Vec2, worldDirection: cc.Vec2) {
        if (!this.isStatic) return;
        let rad = -worldDirection.signAngle(this.v10);
        let euler = Utils.radToEuler(rad);
        this.node.angle = euler;
        this.node.parent.convertToNodeSpaceAR(worldPos, this.posGroup.local);
        this.posGroup.local.addSelf(this.posOff.rotate(rad));
        this.node.setPosition(this.posGroup.local);
    }

    /**手动设置速度 */
    private updateSpeed(x: number, y: number) {
        this.curSpeed.x = x;
        this.curSpeed.y = y;
        this.rigid.linearVelocity = this.curSpeed;
    }

    protected update(dt: number): void {
        if (!this.isStatic) {
            let v = this.rigid.linearVelocity;
            let rad = -v.signAngle(this.v10);
            let euler = Utils.radToEuler(rad);
            this.node.angle = euler;
        } else {
            this.rigid.type = cc.RigidBodyType.Static;
        }
        if (this.isOverBorder()) {
            Module.get(Game).recoverArrow(this);
            Module.get(Game).checkNextShoot();
        }
    }

    /**是否超出视图边界 */
    private isOverBorder(): boolean {
        let x = this.node.position.x,
            y = this.node.position.y,
            w = Global.ins.viewBorderW,
            h = Global.ins.viewBorderH;
        return Math.abs(x) > w || y < -h;
    }

    /**碰撞开始 */
    private onBeginContact(contact: cc.PhysicsContact, self: cc.PhysicsCollider, other: cc.PhysicsCollider) {
        let point = contact.getWorldManifold().points[0];
        other.node.convertToNodeSpaceAR(point, this.hitPoint);
        Module.get(Game).handlerHit(this.hitPoint.y, this);
        this.isStatic = true;
        Module.get(SoundMgr).playEffect(SoundPath.hit);
        this.scheduleOnce(() => {
            this.rigid.type = cc.RigidBodyType.Static;
        }, 0);
    }


}
