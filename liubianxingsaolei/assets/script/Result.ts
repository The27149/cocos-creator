
import Game from "./Game";
import Module from "./common/Module";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Result extends Module {

    @property(cc.Node)
    winNode: cc.Node = null;

    @property(cc.Node)
    failNode: cc.Node = null;

    @property(cc.Button)
    againBtn: cc.Button = null;

    protected onLoad(): void {
        super.onLoad();
        this.againBtn.node.on(`click`, this.onClickAgain, this);
        this.hide();
    }

    private onClickAgain() {
        Module.get(Game).reset();
        this.node.active = false;
    }

    public show(isWin: boolean) {
        this.node.active = true;
        this.winNode.active = isWin;
        this.failNode.active = !isWin;
    }

    public hide() {
        this.node.active = false;
    }

}
