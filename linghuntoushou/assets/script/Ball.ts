import Game from "./Game";
import SoundMgr from "./SoundMgr";
import { GConst, Global, SoundPath, Vec2Group } from "./common/Global";
import Module from "./common/Module";
import Utils from "./common/Utils";



const { ccclass, property } = cc._decorator;

/**单个格子 */
@ccclass
export default class Ball extends cc.Component {

    @property(cc.Sprite)
    ballSp: cc.Sprite = null;

    private Game: Game = null;
    private rigid: cc.RigidBody = null;
    private posGroup: Vec2Group = null;
    private speed: cc.Vec2 = cc.v2();
    private isEffectHit: boolean = false;    //篮框碰撞开始是否有效
    /**跳跃时球的速度标量 */
    public jumpSpeedX: number = 500;
    public jumpSpeedY: number = 1800;
    public isOnGround: boolean = false;        //球在地上

    protected onLoad(): void {
        this.Game = Module.get(Game);
        this.rigid = this.node.getComponent(cc.RigidBody);
        this.posGroup = new Vec2Group();
    }

    /**重置到初始状态，暂停物理组件 */
    public reset() {
        this.rigid.type = cc.RigidBodyType.Static;
        this.setSpeed(0, 0);
        this.node.setPosition(0, 0);
        this.isEffectHit = false;
        let path = `shop/texture/ball/lanqiu${Global.ins.shopPickType}`;
        Utils.dynamicSpriteInBundle(this.ballSp, GConst.customCompBundle, path);
    }

    /**触发跳跃 */
    public jump() {
        if (this.rigid.type === cc.RigidBodyType.Static)
            this.rigid.type = cc.RigidBodyType.Dynamic;
        this.setSpeed(this.jumpSpeedX * this.Game.basketDirection, this.jumpSpeedY);
    }

    protected update(dt: number): void {
        let pos = this.node.position;
        if (pos.x < -640) {
            this.node.x += 1280;
        } else if (pos.x > 640) {
            this.node.x -= 1280;
        }
    }

    /**设置速度 */
    private setSpeed(x: number, y: number) {
        this.speed.x = x;
        this.speed.y = y;
        this.rigid.linearVelocity = this.speed;
    }

    /**获取速度 */
    private getSpeed(): cc.Vec2 {
        return this.rigid.linearVelocity;
    }

    onCollisionEnter(other, self) {
        if (other.node.group === 'basket') {
            let isDown = this.getSpeed().y < 0;
            this.isEffectHit = isDown;
        }
        if (other.node.group === `ground`) {
            Module.get(SoundMgr).playEffect(SoundPath.hitGround);
            this.isOnGround = true;
            if (this.Game.isTimeEnd) this.Game.gameOver();
        }
        if (other.node.group === `star`) {
            this.Game.onHitStar(other.node);
        }
    }

    onCollisionExit(other, self) {
        if (other.node.group === 'basket' && this.isEffectHit) {
            this.isEffectHit = false;
            let isDown = this.getSpeed().y < 0;
            if (isDown) {
                this.Game.onHitBasket();
            }
        }
        if (other.node.group === `ground`) {
            this.isOnGround = false;
        }
    }


}
