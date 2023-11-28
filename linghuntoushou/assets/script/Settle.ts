import Game from "./Game";
import Launch from "./Launch";
import SoundMgr from "./SoundMgr";
import Module from "./common/Module";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Settle extends Module {

    @property(cc.Label)
    scoreLabel: cc.Label = null;

    @property(cc.Button)
    backBtn: cc.Button = null;

    @property(cc.Button)
    againBtn: cc.Button = null;

    protected onLoad(): void {
        this.backBtn.node.on(`click`, this.onBack, this);
        this.againBtn.node.on(`click`, this.onAgain, this);
    }

    private onBack() {
        Module.get(SoundMgr).playBtnSound();
        this.hide();
        Module.get(Game).hide();
        Module.get(Launch).show();
    }

    private onAgain() {
        Module.get(SoundMgr).playBtnSound();
        this.hide();
        Module.get(Game).newGame();
    }

    public show(score: number) {
        this.node.active = true;
        this.scoreLabel.string = score.toString();
    }

    public hide() {
        this.node.active = false;
    }

}
