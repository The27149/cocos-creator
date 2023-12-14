
import Game from "./Game";
import Hall from "./Hall";
import SoundMgr from "./SoundMgr";
import CampMgr from "./camp/CampMgr";
import { SoundPath } from "./common/Global";
import Module from "./common/Module";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Result extends Module {

    @property(cc.Button)
    backBtn: cc.Button = null;

    @property(cc.Node)
    winNode: cc.Node = null;

    @property(cc.Node)
    failNode: cc.Node = null;

    private soundMgr: SoundMgr = null;

    protected onLoad(): void {
        this.backBtn.node.on(`click`, this.onClickBack, this);
        this.soundMgr = Module.get(SoundMgr);
    }

    private onClickBack() {
        this.soundMgr.playEffect(SoundPath.button);
        this.node.active = false;
        CampMgr.ins.clear();
        Module.get(Game).hide();
        Module.get(Hall).show();
    }

    show(isWin: boolean) {
        this.node.active = true;
        this.winNode.active = isWin;
        this.failNode.active = !isWin;
    }
}
