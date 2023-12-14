
import Hall from "./Hall";
import Result from "./Result";
import Ring from "./Ring";
import SoundMgr from "./SoundMgr";
import { COLOR_TYPE, GConst, ILINE, SoundPath, lineConfig } from "./common/Global";
import Module from "./common/Module";
import Move from "./common/Move";
import { NodeFactory } from "./common/NodeFactory";
import Utils from "./common/Utils";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Game extends Module {

    @property(cc.Node)
    boardNode: cc.Node = null;

    @property(cc.Prefab)
    ringPre: cc.Prefab = null;

    @property(cc.Prefab)
    lineEffectPre: cc.Prefab = null;

    @property(cc.Node)
    nextContainer: cc.Node = null;

    @property(cc.Label)
    scoreLabel: cc.Label = null;

    @property(cc.Button)
    backBtn: cc.Button = null;

    @property(cc.Node)
    resultNode: cc.Node = null;

    @property(cc.Node)
    effectLayer: cc.Node = null;

    /**面板上固定的圆环 */
    public ringList: Ring[] = [];
    public ringFactory: NodeFactory = new NodeFactory();
    public lineEffectFactory: NodeFactory = new NodeFactory();
    public ringColors: COLOR_TYPE[] = [COLOR_TYPE.RED, COLOR_TYPE.ORANGE, COLOR_TYPE.YELLOW, COLOR_TYPE.BLUE, COLOR_TYPE.PURPLE];
    /**拖环缓存 */
    private dragRing: Ring = null;
    /**消除列表 */
    private eliminateList: ILINE[] = [];
    private _score: number = 0;
    public get score(): number {
        return this._score;
    }
    public set score(v: number) {
        this._score = v;
        this.scoreLabel.string = v.toString();
    }
    private showTw: cc.Tween = null;
    private hideTw: cc.Tween = null;

    protected onLoad(): void {
        super.onLoad();
        this.ringFactory.init(this.ringPre);
        this.lineEffectFactory.init(this.lineEffectPre);
        this.init();
        this.node.active = false;
        this.resultNode.active = false;
    }

    private init() {
        this.boardNode.children.forEach((nail, idx) => {
            let ringNode = this.ringFactory.get();
            ringNode.parent = nail;
            let ring = ringNode.getComponent(Ring);
            this.ringList.push(ring);
            ring.initAsBlend();
        })
        this.backBtn.node.on(`click`, this.onClickBack, this);
        let time = GConst.changeSceneTime;
        this.showTw = cc.tween(this.node)
            .set({ opacity: 0, active: true })
            .to(time, { opacity: 255 });
        this.hideTw = cc.tween(this.node)
            .set({ opacity: 255 })
            .to(time, { opacity: 0 })
            .set({ active: false });
    }

    private onClickBack() {
        Module.get(SoundMgr).playEffect(SoundPath.button);
        this.hide();
        Module.get(Hall).show();
    }

    public show() {
        this.showTw.start();
        this.scheduleOnce(() => {
            this.newGame();
        }, 0)
    }

    public hide() {
        this.hideTw.start();
    }

    /**新一局开始 */
    public newGame() {
        this.score = 0;
        this.eliminateList.length = 0;
        this.ringList.forEach(item => item.reset());
        this.clearDragRing();
        this.createDragRing();
    }

    /**创建可拖动的环 */
    public createDragRing() {
        let ringNode = this.ringFactory.get();
        ringNode.parent = this.nextContainer;
        let ring = ringNode.getComponent(Ring);
        ring.initAsDrag();
        this.dragRing = ring;

        let actionY = this.nextContainer.convertToWorldSpaceAR(cc.v2()).y;
        ringNode.y = -actionY;
        cc.tween(ringNode)
            .set({ y: -actionY })
            .to(0.3, { y: 0 })
            .start();
    }

    /**清除所有可拖动的环 */
    private clearDragRing() {
        while (this.nextContainer.childrenCount > 0) {
            let node = this.nextContainer.children[0];
            cc.Tween.stopAllByTarget(node);
            this.ringFactory.put(node);
        }
        this.dragRing = null;
    }

    /**消除检查 */
    public checkEliminate() {
        this.eliminateList.length = 0;
        lineConfig.forEach(config => {
            let type = config.type;
            let lineId = config.id;
            if (type === 1) {   //连线
                this.ringColors.forEach(colorType => {
                    let isHit = config.ringsIdx.every(idx => this.ringList[idx - 1].isIncludeColor(colorType));
                    if (isHit) {
                        let line = this.eliminateList.find(item => item.lineId === lineId);
                        if (line) {
                            line.colors.push(colorType);
                        } else {
                            line = {
                                lineId: lineId,
                                rings: [...config.ringsIdx],
                                colors: [colorType]
                            }
                            this.eliminateList.push(line);
                        }

                    }
                })

            } else if (type === 2) { //单环
                let idx = config.ringsIdx[0];
                let ring = this.ringList[idx - 1];
                let isHit = ring.isSameColor();
                if (isHit) {
                    let line: ILINE = {
                        lineId: lineId,
                        rings: [idx],
                        colors: [ring.getCircleColor(0)]
                    }
                    this.eliminateList.push(line);
                }
            }
        })

        Utils.log(`待消除的线列表：`, this.eliminateList);
        this.eliminate();
    }

    /**消除 */
    private eliminate() {
        this.eliminateList.forEach(line => {
            line.rings.forEach(idx => {
                this.ringList[idx - 1].eliminateCircle(line.colors);
            })

            let start = this.ringList[line.rings[0] - 1].node,
                end = this.ringList[line.rings[line.rings.length - 1] - 1].node;
            if (start !== end) this.playLineEffect(start, end);
        })
    }

    /**画线特效 */
    private playLineEffect(start: cc.Node, end: cc.Node) {
        Module.get(SoundMgr).playEffect(SoundPath.eliminate);
        let node = this.lineEffectFactory.get();
        node.parent = this.effectLayer;
        node.getComponent(cc.ParticleSystem).resetSystem();
        let move = Move.getInstance().setParams(node, start, end, 500);
        move.run(() => {
            this.lineEffectFactory.put(node);
        })
    }

    /**检查游戏是否结束 */
    public checkGameOver() {
        let isContinue = this.ringList.some(ring => this.checkBlend(ring, this.dragRing));
        if (!isContinue) {
            Utils.log(`游戏结束`);
            this.resultNode.active = true;
        }
    }

    /**检查两个环是否能够叠加 */
    public checkBlend(ring1: Ring, ring2: Ring): boolean {
        let res = ring1.circleList.reduce((pre, cur, idx) => {
            return pre + cur * ring2.circleList[idx];
        }, 0);
        return res === 0;
    }

}
