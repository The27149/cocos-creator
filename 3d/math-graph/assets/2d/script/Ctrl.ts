import { Button, Component, EditBox, Label, Node, Prefab, Toggle, ToggleContainer, _decorator, find, instantiate } from 'cc';
import { Calc, FuncMode, Param } from '../../script/Calc';
import { Draw } from '../../script/draw1/Draw';
const { ccclass, property } = _decorator;

@ccclass('Ctrl')
export class Ctrl extends Component {
    @property(Node)
    inputContainer: Node = null;

    @property(ToggleContainer)
    modeToggle: ToggleContainer = null;

    @property(Node)
    fxyzBox: Node = null;

    @property({ type: EditBox })
    fxyzEditBox: EditBox = null;

    @property(Node)
    fuvwBox: Node = null;

    @property({ type: EditBox })
    xtEditBox: EditBox = null;

    @property({ type: EditBox })
    ytEditBox: EditBox = null;

    @property({ type: EditBox })
    ztEditBox: EditBox = null;

    @property(Node)
    paramsContainer: Node = null;

    @property(Prefab)
    paramPre: Prefab = null;

    ///////////////////////按钮//////////////////////
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
        // this.fxyzBox.active = this.fuvwBox.active = true;
        //初始化参数节点
        const paramNames = [`u`, `v`, `w`];
        paramNames.forEach(name => {
            let node = instantiate(this.paramPre);
            node.parent = this.paramsContainer;
            find(`name/label`, node).getComponent(Label).string = name;
        })
        //引擎bug修复，更新editBox光标 没效果
        // this.inputContainer.getComponentsInChildren(EditBox).forEach(item => {
        //     item.node.hasChangedFlags += 1;
        //     item.update();
        // })

        //初始化方程类型toggle
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
                this.fxyzBox.active = true;
                this.fuvwBox.active = false;
                break;
            case FuncMode.param:
                this.fxyzBox.active = false;
                this.fuvwBox.active = true;
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
                let params = this.getParams();
                Calc.ins.updateFn(this.calcMode, xtInput, ytInput, ztInput);
                Calc.ins.updateParams(...params);
                Calc.ins.calcPoints();
                break;
        }
        this.drawNode.getComponent(Draw).draw();
        // this.inputContainer.active = false;
    }

    /**更新参数 */
    private getParams() {
        const children = this.paramsContainer.children;
        let arr = [];
        children.forEach(item => {
            let param = new Param();
            param.name = find(`name/label`, item).getComponent(Label).string;
            param.min = Number(find(`min/minInput`, item).getComponent(EditBox).string) || 0;
            param.max = Number(find(`max/maxInput`, item).getComponent(EditBox).string) || 0;
            param.step = Number(find(`step/stepInput`, item).getComponent(EditBox).string) || 0.01;
            console.log(`设置step:`, param.step);
            if (param.min < param.max) arr.push(param);
        })
        return arr;
    }

}


