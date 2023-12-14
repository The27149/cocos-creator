import Game from "./Game";
import SoundMgr from "./SoundMgr";
import { GConst, SoundPath } from "./common/Global";
import Module from "./common/Module";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Hall extends Module {

    @property(cc.Button)
    startBtn: cc.Button = null;

    private showTw: cc.Tween = null;
    private hideTw: cc.Tween = null;

    protected onLoad(): void {
        super.onLoad();
        this.startBtn.node.on(`click`, this.onClickStart, this);
        let time = GConst.changeSceneTime;
        this.showTw = cc.tween(this.node)
            .set({ opacity: 0, active: true })
            .to(time, { opacity: 255 });
        this.hideTw = cc.tween(this.node)
            .set({ opacity: 255 })
            .to(time, { opacity: 0 })
            .set({ active: false });
    }

    public show() {
        this.showTw.start();
    }

    public hide() {
        this.hideTw.start();
    }

    private onClickStart() {
        Module.get(SoundMgr).playEffect(SoundPath.button);
        this.hide();
        Module.get(Game).show();
    }

}
