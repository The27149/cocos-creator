import Game from "./Game";
import Prop from "./Prop";
import Task from "./Task";
import { GConst, Global } from "./common/Global";
import Module from "./common/Module";
import Utils from "./common/Utils";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Score extends Module {
    @property(cc.Label)
    levelLabel: cc.Label = null;

    @property(cc.Label)
    targetLabel: cc.Label = null;

    @property(cc.Label)
    currentLabel: cc.Label = null;

    @property(cc.Label)
    topLabel: cc.Label = null;

    @property(cc.Label)
    rankLabel: cc.Label = null;

    @property(cc.Node)
    newLevelNode: cc.Node = null;

    protected onLoad(): void {
        super.onLoad();
        this.newLevelNode.active = false;
    }

    protected start(): void {
        this.gameStart();
    }

    /**整局游戏开始 */
    public gameStart() {
        this.currentScore = 0;
        Module.get(Prop).reset();
        this.levelStart(1);
    }

    /**新关卡开始 */
    public levelStart(v: number) {
        this.level = v;
        //计算目标分数
        if (v === 1) {
            this.targetScore = 1000;
        }
        else if (v === 2) {
            this.targetScore = 2500;
        }
        else {
            let n = v - 3;
            this.targetScore = 4500 + n * 2000 + n * (n + 1) / 2 * 100;
        }
        this.newLevelNode.active = true;
        this.newLevelNode.getChildByName(`level`).getComponent(cc.Label).string = v.toString();
        this.newLevelNode.getChildByName(`targetScore`).getComponent(cc.Label).string = this.targetScore.toString();
        Global.ins.isActioning = true;
        let action = cc.sequence(cc.fadeIn(0.5), cc.delayTime(1), cc.fadeOut(1), cc.callFunc(() => {
            this.newLevelNode.active = false;
            Module.get(Game).createGrids();
            Module.get(Task).createTask();
        }))
        this.newLevelNode.runAction(action);

    }

    /**更新最高分 排名*/
    public updateTopScore() {
        this.topScore = Number(cc.sys.localStorage.getItem(GConst.topScoreStorage)) || 0;
        if (this.currentScore > this.topScore) {
            cc.sys.localStorage.setItem(GConst.topScoreStorage, JSON.stringify(this.currentScore));
            this.topScore = this.currentScore;
        }
    }

    public updateRank() {
        let x1 = 500 / (this.level - 0.5) ** 2,
            x2 = 500 / (this.level + 0.5) ** 2;
        this.rank = Utils.randomInt(x1, x2);
    }

    /**关卡 */
    private _level: number = 1;
    public get level() {
        return this._level;
    }
    public set level(v: number) {
        this._level = v;
        this.levelLabel.string = v.toString();
    }

    /**目标分 */
    private _targetScore: number = 0;
    public get targetScore() {
        return this._targetScore;
    }
    public set targetScore(v: number) {
        this._targetScore = v;
        this.targetLabel.string = v.toString();
    }

    /**当前分 */
    private _currentScore: number = 0;
    public get currentScore() {
        return this._currentScore;
    }
    public set currentScore(v: number) {
        this._currentScore = v;
        this.currentLabel.string = v.toString();
        this.updateTopScore();
    }

    /**最高分 */
    private _topScore: number = 0;
    public get topScore() {
        return this._topScore;
    }
    public set topScore(v: number) {
        this._topScore = v;
        this.topLabel.string = v.toString();
    }

    /**排名 */
    private _rank: number = 0;
    public get rank() {
        return this._rank;
    }
    public set rank(v: number) {
        this._rank = v;
        this.rankLabel.string = v.toString();
    }

}
