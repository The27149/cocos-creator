import Game from "./Game";
import Module from "./common/Module";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Launch extends Module {

    @property(cc.Button)
    startBtn: cc.Button = null;

    @property(cc.Node)
    gameNode: cc.Node = null;


    protected onLoad(): void {
        super.onLoad();
        this.startBtn.node.on('click', this.onClickStartBtn, this);
        this.node.runAction(cc.fadeIn(1));
        this.gameNode.active = false;
    }

    private onClickStartBtn() {
        this.node.runAction(cc.fadeOut(1));
        this.gameNode.active = true;
        this.gameNode.runAction(cc.fadeIn(1));
    }

}
