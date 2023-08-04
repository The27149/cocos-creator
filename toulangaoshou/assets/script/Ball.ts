import Game from "./Game";
import Module from "./common/Module";
import Utils from "./common/Utils";



const { ccclass, property } = cc._decorator;

/**单个格子 */
@ccclass
export default class Ball extends cc.Component {


    private Game: Game = null;
    private localPos: cc.Vec2 = cc.v2();
    private worldPos: cc.Vec2 = cc.v2();

    protected onLoad(): void {
        this.addEvents();
        // this.initCollider();
    }

    protected start(): void {
        this.Game = Module.get(Game);
    }

    private addEvents() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    }

    private onTouchStart() {
        this.Game.canDrag = true;
    }

    /**重置到初始状态，暂停物理组件 */
    public reset() {
        this.node.getComponent(cc.RigidBody).type = cc.RigidBodyType.Static;
        this.node.setPosition(0, 0);
    }

    /**唤醒刚体，激活物理组件 */
    public run(speed: cc.Vec2) {
        let rigid = this.node.getComponent(cc.RigidBody);
        rigid.type = cc.RigidBodyType.Dynamic;
        rigid.linearVelocity = speed;
    }

    protected update(dt: number): void {
        let pos = this.node.position;
        this.localPos.x = pos.x;
        this.localPos.y = pos.y;
        this.node.parent.convertToWorldSpaceAR(this.localPos, this.worldPos);
        if (this.worldPos.x < -100 || this.worldPos.x > 2000 || this.worldPos.y < -100) {
            this.Game.canDrag = false;
            this.reset();
        }
    }

    // 只在两个碰撞体开始接触时被调用一次
    // onBeginContact(contact, selfCollider: cc.Collider, otherCollider: cc.Collider) {
    //     if (otherCollider.node.group === 'goal') {
    //         Utils.log(`达成目标！！！`);
    //         setTimeout(() => {
    //             // this.Game.win();
    //         }, 0);
    //     }
    // }

    onCollisionEnter(other, self) {
        if (other.node.group === 'goal') {
            this.Game.win();
            this.reset();
        }
    }

}
