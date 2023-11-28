import Game from "./Game";
import Module from "./common/Module";
import Utils from "./common/Utils";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Basket extends cc.Component {

    @property(cc.Node)
    basketOut: cc.Node = null;

    private game: Game = null;
    private posX: number = 540;
    private posYMin: number = -200;
    private posYMax: number = 400;
    private collider1Off: cc.Vec2 = null;
    private collider2Off: cc.Vec2 = null;
    private collider1: cc.PhysicsCircleCollider = null;
    private collider2: cc.PhysicsCircleCollider = null;
    private basketOutOff: cc.Vec3 = cc.v3();

    protected onLoad(): void {
        this.game = Module.get(Game);
        let colliders = this.node.getComponents(cc.PhysicsCollider);
        this.collider1 = colliders.find(item => item.tag === 1) as cc.PhysicsCircleCollider;
        this.collider2 = colliders.find(item => item.tag === 2) as cc.PhysicsCircleCollider;
        this.collider1Off = this.collider1.offset;
        this.collider2Off = this.collider2.offset;
        this.node.position.sub(this.basketOut.position, this.basketOutOff);
    }

    /**重置篮筐位置 状态 */
    public reset(direction: number) {
        let posY = Utils.randomInt(this.posYMin, this.posYMax),
            posX = this.posX * direction;
        this.node.setPosition(posX, posY);
        let outOff = this.basketOutOff.clone();
        outOff.x *= -direction;
        let outPos = this.node.position.sub(outOff);
        this.basketOut.setPosition(outPos);
        this.node.scaleX = this.basketOut.scaleX = -direction;
        let temp1 = cc.v2(-direction * this.collider1Off.x, this.collider1Off.y);
        let temp2 = cc.v2(-direction * this.collider2Off.x, this.collider2Off.y);
        this.collider1.offset = temp1;
        this.collider2.offset = temp2;
        this.collider1.apply();
        this.collider2.apply();
    }

}
