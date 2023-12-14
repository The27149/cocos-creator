
import Arrow from "./Arrow";
import Bow from "./Bow";
import Hall from "./Hall";
import Result from "./Result";
import { GConst, Global } from "./common/Global";
import Module from "./common/Module";
import { NodeFactory } from "./common/NodeFactory";
import Utils from "./common/Utils";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Game extends Module {

    @property(cc.Prefab)
    arrowPre: cc.Prefab = null;

    @property(cc.Node)
    arrowContainer: cc.Node = null;

    @property(cc.Node)
    effectLayer: cc.Node = null;

    @property(cc.Node)
    bowNode: cc.Node = null;

    @property(cc.Node)
    buttNode: cc.Node = null;

    @property(cc.Label)
    buttScoreLabel: cc.Label = null;

    @property(cc.Label)
    scoreLabel: cc.Label = null;

    @property(cc.Label)
    arrowNumLabel: cc.Label = null;

    @property(cc.Button)
    backBtn: cc.Button = null;


    private arrowPool: NodeFactory = null;
    private bow: Bow = null;
    private scoreList: number[][] = [];

    /**分数 */
    private _curScore: number = 0;
    private get curScore(): number {
        return this._curScore;
    }
    private set curScore(v: number) {
        this._curScore = v;
        this.scoreLabel.string = v.toString();
    }

    /**剩余箭数量 */
    private _arrowNum: number = 0;
    public get arrowNum(): number {
        return this._arrowNum;
    }
    public set arrowNum(v: number) {
        this._arrowNum = v;
        this.arrowNumLabel.string = v.toString();
    }

    private showTw: cc.Tween = null;
    private hideTw: cc.Tween = null;

    protected onLoad(): void {
        this.backBtn.node.on(`click`, this.onBack, this);
    }

    private onBack() {
        this.bow.clearArrow();
        this.hide();
        Module.get(Hall).show();
    }

    public showBackBtn() { this.backBtn.node.active = true };
    public hideBackBtn() { this.backBtn.node.active = false };

    /**手动初始化 */
    public init() {
        let time = GConst.changeSceneTime;
        this.showTw = cc.tween(this.node)
            .set({ opacity: 0, active: true })
            .to(time, { opacity: 255 });
        this.hideTw = cc.tween(this.node)
            .set({ opacity: 255 })
            .to(time, { opacity: 0 })
            .set({ active: false });
        this.arrowPool = new NodeFactory(this.arrowPre);
        this.arrowContainer.removeAllChildren();
        this.bow = this.bowNode.getComponent(Bow);
        this.initScoreList();
        this.showBackBtn();
        Module.get(Result).hide();
        this.node.active = false;
    }

    public newGame() {
        this.reset();
        this.curScore = 0;
        this.arrowNum = GConst.arrowNum;
    }

    /**每次射箭前重置所有 */
    private reset() {
        this.resetButt();
        this.bow.reset();
    }

    /**重置箭靶 */
    private resetButt() {
        let x = Utils.randomInt(0, 900),
            y = Utils.randomInt(-300, 300);
        this.buttNode.setPosition(x, y);
    }

    /**生成箭 */
    public createArrow(): Arrow {
        let node = this.arrowPool.get();
        node.parent = this.arrowContainer;
        return node.getComponent(Arrow);
    }

    /**回收箭 */
    public recoverArrow(arrow: Arrow) {
        this.arrowPool.put(arrow.node);
    }

    /**检查是否下次射击 */
    public checkNextShoot() {
        this.showBackBtn();
        if (this.arrowNum <= 0) {
            Module.get(Result).show(this.curScore);
            if (this.curScore > Global.ins.highestScoreLocal.getData()) {
                Global.ins.highestScoreLocal.setData(this.curScore);
            }
        } else {
            this.reset();
        }
    }

    /**中靶 */
    public handlerHit(y: number, arrow: Arrow) {
        let score = this.getScore(y);
        this.addScore(score, () => {
            this.recoverArrow(arrow);
            this.checkNextShoot();
        });
    }

    /**加分 */
    private addScore(score: number, call?: Function) {
        this.curScore += score;
        this.buttScoreLabel.string = `+${score}`;
        let ani = this.buttNode.getComponent(cc.Animation);
        ani.stop();
        ani.play();
        ani.on(cc.Animation.EventType.FINISHED, () => {
            call && call();
        }, this);
    }

    /**初始化计分表 */
    private initScoreList() {
        let list = this.scoreList;
        list.push([0, 5, 50]);
        list.push([5, 35, 40]);
        list.push([35, 65, 30]);
        list.push([65, 115, 20]);
        list.push([115, 155, 10]);
        list.push([155, 200, 2]);
    }

    /**获取得分 */
    public getScore(y: number): number {
        y = Math.abs(y);
        let target = this.scoreList.find(item => item[0] <= y && y < item[1]);
        return target[2] ?? 0;
    }

    public show() {
        this.showTw.start();
        this.scheduleOnce(() => {
            this.newGame();
        }, GConst.changeSceneTime);
    }

    public hide() {
        this.hideTw.start();
    }

}
