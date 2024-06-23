import { Button, Component, EditBox, Node, Toggle, ToggleContainer, _decorator } from 'cc';
import { Calc, FuncMode } from '../../script/Calc';
import { Draw } from '../../script/draw1/Draw';
const { ccclass, property } = _decorator;

@ccclass('Ctrl')
export class Ctrl extends Component {
    @property(Node)
    inputContainer: Node = null;

    @property(ToggleContainer)
    modeToggle: ToggleContainer = null;

    @property({ type: EditBox })
    fxyzEditBox: EditBox = null;

    @property({ type: EditBox })
    xtEditBox: EditBox = null;

    @property({ type: EditBox })
    ytEditBox: EditBox = null;

    @property({ type: EditBox })
    ztEditBox: EditBox = null;

    @property(Button)
    visibleBtn: Button = null;

    @property(Button)
    drawBtn: Button = null;

    @property(Node)
    drawNode: Node = null;

    /**计算方式  */
    private calcMode: number = FuncMode.xyz;

    protected onLoad(): void {
        this.init();
        this.addEvents();
    }

    private init() {
        const modeList = [FuncMode.xyz, FuncMode.param];
        this.modeToggle.node.children.forEach((child, idx) => {
            child.attr({ mode: modeList[idx] });
            const comp = child.getComponent(Toggle);
            if (idx === 0) {
                comp.isChecked = true;
                this.onToggleMode(comp);
            } else {
                comp.isChecked = false;
            }
        })
    }

    private addEvents() {
        this.modeToggle.node.children.forEach(child => {
            child.on(`click`, this.onToggleMode, this);
        })
        this.visibleBtn.node.on(`click`, this.onClickVisibleBtn, this);
        this.drawBtn.node.on(`click`, this.onClickDrawBtn, this);
    }

    /**切换模式 */
    private onToggleMode(toggle: Toggle) {
        let mode = toggle.node[`mode`];
        this.calcMode = mode;
        switch (mode) {
            case FuncMode.xyz:
                this.fxyzEditBox.node.parent.active = true;
                this.xtEditBox.node.parent.active = false;
                this.ytEditBox.node.parent.active = false;
                this.ztEditBox.node.parent.active = false;
                break;
            case FuncMode.param:
                this.fxyzEditBox.node.parent.active = false;
                this.xtEditBox.node.parent.active = true;
                this.ytEditBox.node.parent.active = true;
                this.ztEditBox.node.parent.active = true;
                break;
        }
    }

    /**显示/隐藏 输入框ui */
    private onClickVisibleBtn() {
        this.inputContainer.active = !this.inputContainer.active;
    }

    /**点击绘制 */
    private onClickDrawBtn() {
        switch (this.calcMode) {
            case FuncMode.xyz:
                const xyzInput = this.fxyzEditBox.string;
                Calc.ins.updateFn(this.calcMode, xyzInput);
                break;
            case FuncMode.param:
                const xtInput = this.xtEditBox.string || `0`;
                const ytInput = this.ytEditBox.string || `0`;
                const ztInput = this.ztEditBox.string || `0`;
                Calc.ins.updateFn(this.calcMode, xtInput, ytInput, ztInput);
                break;
        }
        this.drawNode.getComponent(Draw).draw();
        this.inputContainer.active = false;
    }

}


