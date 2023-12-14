
import Game from "./Game";
import Hall from "./Hall";
import SoundMgr from "./SoundMgr";
import { SoundPath } from "./common/Global";
import Module from "./common/Module";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Result extends Module {

    @property(cc.Button)
    nextBtn: cc.Button = null;


    private soundMgr: SoundMgr = null;

    protected onLoad(): void {
        this.nextBtn.node.on(`click`, this.onClickNext, this);
    }

    private onClickNext() {
        Module.get(SoundMgr).playEffect(SoundPath.button);
        this.hide();
        Module.get(Game).nextGame();
    }

    show() {
        Module.get(SoundMgr).playEffect(SoundPath.result);
        this.node.active = true;
    }

    hide() {
        this.node.active = false;
    }
}
