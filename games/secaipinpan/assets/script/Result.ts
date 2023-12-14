
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

    @property(cc.Button)
    backBtn: cc.Button = null;

    private soundMgr: SoundMgr = null;

    protected onLoad(): void {
        super.onLoad();
        this.backBtn.node.on(`click`, this.onClickBack, this);
        this.nextBtn.node.on(`click`, this.onClickNext, this);
        this.soundMgr = Module.get(SoundMgr);
    }

    private onClickBack() {
        this.soundMgr.playEffect(SoundPath.button);
        this.node.active = false;
        Module.get(Game).hide();
        Module.get(Hall).show();
    }

    private onClickNext() {
        this.soundMgr.playEffect(SoundPath.button);
        this.node.active = false;
        let game = Module.get(Game);
        game.nextGame();
    }




}
