import Ball from "./Ball";
import Launch from "./Launch";
import Level, { ELEMENTTYPE, IElement } from "./Level";
import Module from "./common/Module";
import { NodeFactory } from "./common/NodeFactory";
import Utils from "./common/Utils";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Game extends Module {


    @property(cc.Node)
    ballNode: cc.Node = null;

    @property(cc.Graphics)
    graphics: cc.Graphics = null;

    @property(cc.Node)
    dragArea: cc.Node = null;

    @property(cc.Node)
    boardContainer: cc.Node = null;

    @property(cc.Prefab)
    boardPre: cc.Prefab = null;

    @property(cc.Node)
    goalNode: cc.Node = null;

    @property(cc.Button)
    backBtn: cc.Button = null;

    @property(cc.Node)
    resultNode: cc.Node = null;

    @property(cc.Button)
    againBtn: cc.Button = null;

    @property(cc.Button)
    continueBtn: cc.Button = null;

    @property(cc.Label)
    levelLabel: cc.Label = null;


    /**隔板节点池 */
    private boardPool: NodeFactory = new NodeFactory();
    private ball: Ball = null;
    /**是否能拖拽 */
    public canDrag: boolean = false;
    /**发射速度缩放 */
    private launchRatio: number = 6;
    /**当前关卡 */
    private _curLevel: number = 1;
    public get curLevel(): number {
        return this._curLevel;
    }
    public set curLevel(v: number) {
        this._curLevel = v;
        this.levelLabel.string = v.toString();
    }

    protected onLoad(): void {
        super.onLoad();
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getCollisionManager().enabled = true;
        this.boardPool.init(this.boardPre);
        this.ball = this.ballNode.getComponent(Ball);
        this.addEvents();
        this.node.active = false;
    }

    public showGame() {
        this.node.active = true;
        this.resultNode.active = false;
        this.curLevel = 1;
        this.newLevel();
        this.node.runAction(cc.fadeIn(1));
    }

    public hideGame() {
        this.node.runAction(cc.fadeOut(1));
        setTimeout(() => {
            this.node.active = false;
        }, 1000);
    }

    private addEvents() {
        this.dragArea.on(cc.Node.EventType.TOUCH_MOVE, this.onDragTouchMove, this);
        this.dragArea.on(cc.Node.EventType.TOUCH_END, this.onDragTouchEnd, this);
        this.backBtn.node.on('click', this.onClickBackBtn, this);
        this.againBtn.node.on('click', this.onClickAgainBtn, this);
        this.continueBtn.node.on('click', this.onClickContinueBtn, this);
    }

    private onDragTouchMove(e: cc.Event.EventTouch) {
        if (!this.canDrag) return;
        let pos = this.dragArea.convertToNodeSpaceAR(e.getLocation());
        let len = Utils.getDistance(pos, cc.v2(0, 0));
        if (len > this.dragArea.height / 2) return;
        this.ballNode.setPosition(pos);

        this.drawLine();
    }

    private onDragTouchEnd(e: cc.Event.EventTouch) {
        if (!this.canDrag) return;
        this.canDrag = false;
        let pos = this.ballNode.position;
        let v = new cc.Vec2(pos.x, pos.y).negSelf().mulSelf(this.launchRatio);
        this.ball.run(v);
        this.graphics.clear();
    }

    /**新关卡重置游戏 */
    public newLevel() {
        this.canDrag = false;
        this.ball.reset();
        this.createElements();
    }

    /**达成目标 */
    public win() {
        this.showResult();
    }

    /**生成一关的所有隔板 球筐 */
    private createElements() {
        while (this.boardContainer.children.length > 0) {
            cc.Tween.stopAllByTarget(this.boardContainer.children[0]);
            this.boardPool.put(this.boardContainer.children[0]);
        }
        let config: IElement[] = Level.ins.getLevelConfig(this.curLevel);
        for (let cfg of config) {
            let node: cc.Node = null;
            if (cfg.type === ELEMENTTYPE.board) {
                node = this.boardPool.get();
                node.parent = this.boardContainer;
            } else if (cfg.type === ELEMENTTYPE.goal) {
                node = this.goalNode;
            }
            node.setPosition(cfg.pos);
            node.angle = cfg.deg;
            cc.Tween.stopAllByTarget(node);
            cfg.moveFn && cfg.moveFn(node);
            cfg.rotateFn && cfg.rotateFn(node);
        }
    }

    /**绘制抛物线 */
    private drawLine() {
        let g = this.graphics;
        g.clear();
        let pos = this.ballNode.position;
        let l = pos.len(),
            cosA = -pos.x / l,
            sinA = -pos.y / l;
        let v = new cc.Vec2(pos.x, pos.y).negSelf().mulSelf(this.launchRatio);
        let vl = v.len(),
            vx = vl * cosA,
            vy = vl * sinA;
        let a = cc.director.getPhysicsManager().gravity.y * this.ballNode.getComponent(cc.RigidBody).gravityScale;
        g.moveTo(0, 0);
        for (let t = 0; t < 0.8; t += 0.03) {
            let fx = vx * t,
                fy = vy * t + 0.5 * a * t ** 2;
            g.circle(fx, fy, 3);
        }
        g.fill();
    }

    private onClickBackBtn() {
        Module.get(Launch).showLaunchFromGame();
    }

    private onClickAgainBtn() {
        this.newLevel();
        this.hideResult();
    }

    private onClickContinueBtn() {
        this.curLevel++;
        if (this.curLevel > Level.ins.getLevelSize()) {
            this.curLevel = 1;
        }
        this.newLevel();
        this.hideResult();
    }

    private showResult() {
        this.resultNode.active = true
    }

    private hideResult() {
        this.resultNode.active = false;
    }

}
