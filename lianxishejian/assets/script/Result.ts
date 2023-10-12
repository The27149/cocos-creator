
import Game from "./Game";
import Hall from "./Hall";
import SoundMgr from "./SoundMgr";
import { SoundPath } from "./common/Global";
import Module from "./common/Module";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Result extends Module {

    @property(cc.Button)
    againBtn: cc.Button = null;

    @property(cc.Label)
    score: cc.Label = null;

    private soundMgr: SoundMgr = null;

    protected onLoad(): void {
        this.againBtn.node.on(`click`, this.onClickAgain, this);
        this.soundMgr = Module.get(SoundMgr);
    }

    private onClickAgain() {
        this.soundMgr.playEffect(SoundPath.button);
        this.hide();
        Module.get(Game).newGame();
    }

    show(score: number) {
        this.score.string = score.toString();
        this.node.active = true;
    }

    hide() {
        this.node.active = false;
    }
}
