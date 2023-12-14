
import Ball from "./Ball";
import Basket from "./Basket";
import Clock, { CLOCK_UIMODE, IClockParam, IClockView } from "./Clock";
import CoinMgr from "./CoinMgr";
import Launch from "./Launch";
import Settle from "./Settle";
import SoundMgr from "./SoundMgr";
import EventMgr from "./common/EventMgr";
import { GEvent, Global, SoundPath } from "./common/Global";
import Module from "./common/Module";
import { NodeFactory } from "./common/NodeFactory";
import Utils from "./common/Utils";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Game extends Module {
    @property(cc.Node)
    ballNode: cc.Node = null;

    @property(cc.Node)
    basketNode: cc.Node = null;

    @property(cc.ProgressBar)
    progress: cc.ProgressBar = null;

    @property(cc.Label)
    timeLabel: cc.Label = null;

    @property(cc.Label)
    scoreLabel: cc.Label = null;

    @property(cc.Node)
    effectLayer: cc.Node = null;

    @property(cc.Prefab)
    starPre: cc.Prefab = null;

    @property(cc.Label)
    starLabel: cc.Label = null;

    @property(cc.Button)
    addTimeBtn: cc.Button = null;

    private ball: Ball = null;
    private basket: Basket = null;
    /**当前篮筐方向 左负右正 */
    public basketDirection: number = 1;
    /**是否结束 */
    public isTimeEnd: boolean = false;
    private clock: Clock = null;
    private isGameOver: boolean = false;
    private starFactory: NodeFactory = null;

    private _score: number = 0;
    private get score(): number {
        return this._score;
    }
    private set score(v: number) {
        this._score = v;
        this.scoreLabel.string = v.toString();
    }

    protected onLoad(): void {
        this.ball = this.ballNode.getComponent(Ball);
        this.basket = this.basketNode.getComponent(Basket);
        this.addEvents();
        this.initClock();
        this.updateStar(CoinMgr.ins.getCoin());
        this.starFactory = new NodeFactory().init(this.starPre);
        this.createStar();
        this.initPickType();
        Module.get(Settle).hide();
        EventMgr.ins.on(GEvent.coinChanged, this.onCoinChanged, this);
    }

    protected onDestroy(): void {
        EventMgr.ins.off(GEvent.coinChanged, this.onCoinChanged, this);
    }

    public show() {
        this.node.active = true;
        this.node.runAction(cc.fadeIn(1));
        this.newGame();
    }

    public hide() {
        this.node.runAction(cc.fadeOut(1));
        setTimeout(() => {
            this.node.active = false;
        }, 1000);
    }

    private addEvents() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.addTimeBtn.node.on(`click`, this.onAddTime, this);
    }

    private initClock() {
        let param: IClockParam = {
            totalTime: 5,
            endCall: this.onTimeEnd.bind(this)
        };

        let uiParam: IClockView = {
            viewMode: CLOCK_UIMODE.showRemain,
            progress: this.progress,
            timeLabel: this.timeLabel,
        }
        let clock = this.clock = new Clock();
        clock.init(param).initView(uiParam);
    }

    private initPickType() {
        let key = `shopProps`;
        let localData = Global.ins.localData.getData(key);
        let type = 1;
        if (localData) {
            type = localData.find(item => !item.isLock && item.isPick).type;
        }
        Global.ins.shopPickType = type;
    }

    public newGame() {
        this.clock.reset();
        this.basketDirection = -1;
        this.basket.reset(this.basketDirection);
        this.ball.reset();
        this.isTimeEnd = false;
        this.score = 0;
        this.isGameOver = false;
        this.addTimeBtn.interactable = false;
    }

    private onTouchEnd(e: cc.Event.EventTouch) {
        if (this.isTimeEnd) return;
        this.ball.jump();
    }

    private onAddTime() {
        Module.get(SoundMgr).playBtnSound();
        if (this.isTimeEnd) return;
        let remainStar = CoinMgr.ins.getCoin();
        if (remainStar < 10) return;
        CoinMgr.ins.changeCoin(-10);
        this.clock.reset().start();
    }

    /**达成目标 */
    public onHitBasket() {
        Module.get(SoundMgr).playEffect(SoundPath.fresh);
        this.score++;
        this.basketDirection *= -1;
        this.basket.reset(this.basketDirection);
        this.clock.reset().start();
        this.isTimeEnd = false;
        this.addTimeBtn.interactable = true;
    }

    private createStar() {
        let star = this.starFactory.get();
        star.parent = this.effectLayer;
        let x = Utils.randomInt(-250, 250),
            y = Utils.randomInt(-450, 450);
        star.setPosition(x, y);
    }

    public onHitStar(starNode: cc.Node) {
        Module.get(SoundMgr).playEffect(SoundPath.bubble);
        this.starFactory.put(starNode);
        CoinMgr.ins.changeCoin(1);
        this.createStar();
    }

    private onCoinChanged() {
        let num = CoinMgr.ins.getCoin();
        this.updateStar(num);
    }

    private updateStar(num: number) {
        this.starLabel.string = num.toString();
    }

    private onTimeEnd() {
        this.isTimeEnd = true;
        this.addTimeBtn.interactable = false;
        if (this.ball.isOnGround) {
            this.gameOver();
        }
    }

    public gameOver() {
        if (!this.isGameOver) {
            this.isGameOver = true;
            Module.get(Settle).show(this.score);
        }
    }

}
