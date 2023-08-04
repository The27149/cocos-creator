import Game from "./Game";
import Module from "./common/Module";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Info extends Module {

    @property(cc.Label)
    beeLabel: cc.Label = null;

    @property(cc.Label)
    clockLabel: cc.Label = null;

    @property(cc.Button)
    againBtn: cc.Button = null;

    private timer = null;
    private seconds: number = 0;
    private Game: Game = null;

    protected onLoad(): void {
        super.onLoad();
        this.againBtn.node.on(`click`, this.onClickAgain, this);
    }

    protected onDestroy(): void {
        this.stopClock();
    }

    protected start(): void {
        this.Game = Module.get(Game);
    }

    private onClickAgain() {
        this.Game.reset();
    }

    public reset() {
        this.stopClock();
        this.seconds = 0;
        this.updateClock();
        this.updateBeeNum();
    }

    public startClock() {
        this.seconds = 0;
        this.timer = setInterval(() => {
            this.seconds++;
            this.updateClock();
        }, 1000);
    }

    public stopClock() {
        clearInterval(this.timer);
    }

    private updateClock() {
        let h = Math.floor(this.seconds / 3600);
        let m = Math.floor((this.seconds % 3600) / 60);
        let s = (this.seconds % 3600) % 60;
        let hstr = h < 10 ? `0${h}` : `${h}`,
            mstr = m < 10 ? `0${m}` : `${m}`,
            sstr = s < 10 ? `0${s}` : `${s}`;
        this.clockLabel.string = `${hstr}:${mstr}:${sstr}`;
    }

    private updateBeeNum() {
        this.beeLabel.string = Module.get(Game).beeNum.toString();
    }





}
