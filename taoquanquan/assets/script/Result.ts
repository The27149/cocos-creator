import Game from "./Game";
import Hall from "./Hall";
import SoundMgr from "./SoundMgr";
import { SoundPath } from "./common/Global";
import Module from "./common/Module";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Result extends Module {

    @property(cc.Label)
    scoreLabel: cc.Label = null;

    @property(cc.Button)
    againBtn: cc.Button = null;

    @property(cc.Button)
    backBtn: cc.Button = null;

    protected onLoad(): void {
        super.onLoad();
        this.againBtn.node.on(`click`, this.onClickAgain, this);
        this.backBtn.node.on(`click`, this.onClickBack, this);
    }

    protected onEnable(): void {
        this.scoreLabel.string = Module.get(Game).score.toString();
    }

    private onClickAgain() {
        Module.get(SoundMgr).playEffect(SoundPath.button);
        this.node.active = false;
        Module.get(Game).newGame();
    }

    private onClickBack() {
        Module.get(SoundMgr).playEffect(SoundPath.button);
        this.node.active = false;
        Module.get(Game).hide();
        Module.get(Hall).show();
    }


}
