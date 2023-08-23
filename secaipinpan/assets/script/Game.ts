
import Hall from "./Hall";
import Level, { ILevelElement } from "./Level";
import Matrix from "./Matrix";
import Slot from "./Slot";
import SoundMgr from "./SoundMgr";
import { GConst, Global, SoundPath } from "./common/Global";
import Module from "./common/Module";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Game extends Module {

    @property(cc.Node)
    displayMatrixNode: cc.Node = null;

    @property(cc.Node)
    playMatrixNode: cc.Node = null;

    @property(cc.Prefab)
    slotPre: cc.Prefab = null;

    @property(cc.Button)
    backBtn: cc.Button = null;

    @property(cc.Button)
    againBtn: cc.Button = null;

    @property(cc.Label)
    levelLabel: cc.Label = null;

    @property(cc.Node)
    resultNode: cc.Node = null;

    private showTw: cc.Tween = null;
    private hideTw: cc.Tween = null;
    /**本关配置 */
    private curConfig: ILevelElement = null;
    private curLevel: number = 1;
    /**展示阵列 */
    private displayMatrix: Matrix = null;
    /**操作阵列 */
    private playMatrix: Matrix = null;

    protected onLoad(): void {
        super.onLoad();
        this.init();
        this.node.active = false;
    }

    private init() {
        this.backBtn.node.on(`click`, this.onClickBack, this);
        this.againBtn.node.on(`click`, this.onClickAgain, this);
        let time = GConst.changeSceneTime;
        this.showTw = cc.tween(this.node)
            .set({ opacity: 0, active: true })
            .to(time, { opacity: 255 });
        this.hideTw = cc.tween(this.node)
            .set({ opacity: 255 })
            .to(time, { opacity: 0 })
            .set({ active: false });
        this.displayMatrix = this.displayMatrixNode.getComponent(Matrix);
        this.playMatrix = this.playMatrixNode.getComponent(Matrix);
    }

    protected start(): void {
        let slotNode = cc.instantiate(this.slotPre);
        this.playMatrix.installSlot(slotNode);
    }

    private onClickBack() {
        Module.get(SoundMgr).playEffect(SoundPath.button);
        this.hide();
        Module.get(Hall).show();
    }

    private onClickAgain() {
        Module.get(SoundMgr).playEffect(SoundPath.button);
        this.resetPlayMatrix();
    }

    public show() {
        this.showTw.start();
        this.scheduleOnce(() => {
            this.newGame();
        }, 0)
    }

    public hide() {
        this.hideTw.start();
    }

    private newGame(level: number = 1) {
        this.curLevel = level;
        this.levelLabel.string = level.toString();
        this.curConfig = Level.ins.getConfig(level);
        this.resetDisplayMatrix();
        this.resetPlayMatrix();
    }

    /**重置展示阵列 */
    private resetDisplayMatrix() {
        this.displayMatrix.reset(this.curConfig);
        //根据序列刷新一遍格子
        this.curConfig.order.forEach(item => {
            let config = this.curConfig.slot[item];
            let direction = config[0],
                idx = config[1],
                type = config[2];
            this.displayMatrix.refreshGridsType(direction, idx, type);
        })
        this.displayMatrix.refreshGridsUI();
    }

    /**重置实际玩的阵列 */
    private resetPlayMatrix() {
        Global.ins.isFreshing = false;
        this.playMatrix.reset(this.curConfig);
        //刷新插槽
        this.playMatrix.refreshSlot(this.curConfig);
    }

    /**检查两个阵列是否相同 */
    public checkMatrixIsSame() {
        let isSame = this.displayMatrix.gridList.every((item, idx) => item.type === this.playMatrix.gridList[idx].type);
        if (isSame) {
            this.resultNode.active = true;
        }
    }

    /**下一关游戏 */
    public nextGame() {
        this.curLevel++;
        let levelNum = Level.ins.getLevelSize();
        if (this.curLevel > levelNum) this.curLevel = 1;
        this.newGame(this.curLevel);
    }


}
