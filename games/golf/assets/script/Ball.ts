import Game from "./Game";
import SoundMgr from "./SoundMgr";
import { SoundPath } from "./common/Global";
import Module from "./common/Module";
import Utils from "./common/Utils";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Ball extends cc.Component {

    @property(cc.Node)
    skinNode: cc.Node = null;

    @property(cc.MotionStreak)
    motion: cc.MotionStreak = null;

    private curSpeed: cc.Vec2 = cc.v2();
    private rigid: cc.RigidBody = null;

    protected onLoad(): void {
        this.rigid = this.node.getComponent(cc.RigidBody);
    }

    protected onEnable(): void {
        //修复2.4.9版本拖尾效果从原点开始问题，后续关注引擎修复情况移除
        let motion = this.motion;
        motion.scheduleOnce(() => {
            motion.reset();
            let mat4 = cc.mat4();
            let matrix = motion.node.getWorldMatrix(mat4);
            let tx = matrix.m[12],
                ty = matrix.m[13];
            //@ts-ignore
            motion._lastWPos.x = tx;
            //@ts-ignore
            motion._lastWPos.y = ty;
        });
    }

    public reset(color: cc.Color) {
        this.skinNode.color = color;
        this.motion.color = color;
    }

    /**手动设置速度 */
    public updateSpeed(x: number, y: number) {
        this.curSpeed.x = x;
        this.curSpeed.y = y;
        this.rigid.linearVelocity = this.curSpeed;
    }

    /**球进洞 */
    private dropInHole(holeCore: cc.Node) {
        Module.get(SoundMgr).playEffect(SoundPath.hit);
        this.updateSpeed(0, 0);
        this.node.setScale(0.7);
        let aniState = holeCore.parent.getComponent(cc.Animation).getAnimationState(`swing`);
        aniState.speed = 2;
        setTimeout(() => {
            this.node.getComponent(cc.PhysicsCircleCollider).enabled = false;
            this.rigid.type = cc.RigidBodyType.Static;
            let holeWorldPos = holeCore.convertToWorldSpaceAR(cc.v2());
            let localPos = this.node.parent.convertToNodeSpaceAR(holeWorldPos);
            this.node.setPosition(localPos);
        }, 0);
        Module.get(Game).clearActiveBall(this);
    }

    /**被粉碎 */
    private beBroken() {
        Module.get(Game).gameOver(false);
        this.node.destroy();
    }

    /**碰撞开始 */
    private onBeginContact(contact: cc.PhysicsContact, self: cc.PhysicsCollider, other: cc.PhysicsCollider) {
        if (other.node[`isHole`] && self.node[`ballType`] === other.node[`holeType`]) {
            this.dropInHole(other.node);
        }
        if (other.node[`isBroken`]) {
            this.beBroken();
        }
    }
}
