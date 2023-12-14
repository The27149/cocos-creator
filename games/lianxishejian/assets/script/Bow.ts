
import Arrow from "./Arrow";
import Game from "./Game";
import { VecGroup } from "./common/Global";
import Module from "./common/Module";
import Utils from "./common/Utils";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Bow extends cc.Component {

    @property(cc.Node)
    nailA: cc.Node = null;

    @property(cc.Node)
    nailB: cc.Node = null;

    @property(cc.Node)
    nailC: cc.Node = null;

    // @property(cc.Node)
    // bow: cc.Node = null;

    @property(cc.Node)
    bowString: cc.Node = null;

    @property(cc.Node)
    clickArea: cc.Node = null;

    /**触点坐标组 */
    private bowPos: VecGroup = new VecGroup();
    private v10: cc.Vec2 = cc.v2(1, 0);
    private strGph: cc.Graphics = null;
    /**正在拉弓 */
    private isPulling: boolean = false;
    /**当前绑定的箭 */
    private arrow: Arrow = null;
    /**对箭的速度缩放 */
    private arrowSpeed: number = 6;


    protected onLoad(): void {
        this.clickArea.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.clickArea.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.clickArea.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.strGph = this.bowString.getComponent(cc.Graphics);
    }

    public reset() {
        this.node.angle = 0;
        this.setRandomPos();
        this.isPulling = false;
        this.drawStr();
        this.installArrow();
    }

    private onTouchStart(e: cc.Event.EventTouch) {
        this.pull(e);
    }
    private onTouchMove(e: cc.Event.EventTouch) {
        this.pull(e);
    }
    private onTouchEnd(e: cc.Event.EventTouch) {
        this.shoot();
    }

    /**搭箭 */
    private installArrow() {
        this.arrow = Module.get(Game).createArrow();
        this.nailC.convertToWorldSpaceAR(this.arrow.posGroup.v2, this.arrow.posGroup.world);
        this.arrow.reset();
    }

    /**拉弓 */
    private pull(e: cc.Event.EventTouch) {
        if (!this.arrow) return;//不准拉空弓
        this.isPulling = true;
        let touchPos = e.getLocation();
        this.node.convertToWorldSpaceAR(this.bowPos.v2, this.bowPos.world);//弓的世界坐标
        this.bowPos.world.subSelf(touchPos);
        let len = this.bowPos.world.len();
        if (len > 350 || len < 125) return;  //拉弓极限限制
        let rad = this.bowPos.world.signAngle(this.v10);
        let euler = Utils.radToEuler(rad);
        this.node.angle = -euler;
        this.bowString.convertToNodeSpaceAR(touchPos, this.bowPos.local);//触点本地坐标
        this.drawStr();
        if (this.arrow && this.arrow.node.isValid) this.arrow.updateUI(touchPos, this.bowPos.world);
    }

    /**放箭 */
    private shoot() {
        if (this.arrow && this.arrow.node.isValid) {
            let speed = this.bowPos.world.mul(this.arrowSpeed);
            this.arrow.shoot(speed);
            Module.get(Game).arrowNum--;
            Module.get(Game).hideBackBtn();
            this.arrow = null;
        }
        this.isPulling = false;
        this.drawStr();
    }


    public clearArrow() {
        if (this.arrow) Module.get(Game).recoverArrow(this.arrow);
    }

    //////////////////////////////////////////ui-start////////////////////////////////////

    /**绘制弓弦 */
    private drawStr() {
        this.strGph.clear();
        let points: (cc.Vec2 | cc.Vec3)[] = [this.nailA.position];
        if (this.isPulling) points.push(this.bowPos.local);
        points.push(this.nailB.position);
        for (let i = 0; i < points.length; i++) {
            let item = points[i];
            if (i === 0) this.strGph.moveTo(item.x, item.y);
            else this.strGph.lineTo(item.x, item.y);
        }
        this.strGph.stroke();
    }

    /**随机弓的y坐标 */
    private setRandomPos() {
        let y = Utils.randomInt(-300, 300);
        this.node.setPosition(0, y);
    }

    //////////////////////////////////////////ui-end////////////////////////////////////

}
