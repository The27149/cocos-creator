import Game from "./Game";
import Module from "./common/Module";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Launch extends Module {

    @property(cc.Button)
    startBtn: cc.Button = null;

    private canStart: boolean = true;

    protected onLoad(): void {
        super.onLoad();
        this.startBtn.node.on('click', this.onClickStartBtn, this);
        this.node.runAction(cc.fadeIn(1));
    }

    private onClickStartBtn() {
        if (!this.canStart) return;
        this.showGameFromLaunch();
    }

    public showGameFromLaunch() {
        this.canStart = false;
        this.node.runAction(cc.fadeOut(1));
        Module.get(Game).showGame();
    }

    public showLaunchFromGame() {
        this.canStart = true;
        this.node.runAction(cc.fadeIn(1));
        Module.get(Game).node.runAction(cc.fadeOut(1));
    }
}
