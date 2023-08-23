import Game from "./Game";
import Grid from "./Grid";
import { ILevelElement } from "./Level";
import Slot from "./Slot";
import { Global } from "./common/Global";
import Module from "./common/Module";
import { NodeFactory } from "./common/NodeFactory";
import Utils from "./common/Utils";


const { ccclass, property } = cc._decorator;

/**格子阵列 */
@ccclass
export default class Matrix extends cc.Component {

    @property(cc.Prefab)
    gridPre: cc.Prefab = null;

    @property(cc.Node)
    gridContainer: cc.Node = null;

    /**是否需要安装操作插槽 */
    private hasSlot: boolean = false;
    private slot: Slot = null;
    private gridFactory: NodeFactory = new NodeFactory();
    /**格子列表，从左往右，自上至下 */
    public gridList: Grid[] = [];
    private gridSize: cc.Vec2 = cc.v2();
    /**格子间距 */
    private gridSpaceSize: cc.Vec2 = cc.v2(10, 10);
    /**阵列尺寸 */
    private matrixSize: cc.Vec2 = cc.v2();

    protected onLoad(): void {
        this.gridContainer.removeAllChildren();
        this.gridFactory.init(this.gridPre);
        this.initGridSize();
        this.hasSlot = false;
        this.gridList.length = 0;
    }

    /**重置格子 */
    public reset(config: ILevelElement) {
        this.clearAllGrids();
        this.matrixSize.x = config.row;
        this.matrixSize.y = config.col;
        for (let i = 0; i < config.row; i++) {
            let y = this.getRowPos(i + 1);
            for (let j = 0; j < config.col; j++) {
                let node = this.gridFactory.get();
                node.parent = this.gridContainer;
                let x = this.getColPos(j + 1);
                node.setPosition(x, y);
                let grid = node.getComponent(Grid);
                grid.reset(i, j);
                this.gridList.push(grid);
            }
        }
    }

    /**安装操作插槽 */
    public installSlot(slotNode: cc.Node) {
        this.hasSlot = true;
        slotNode.parent = this.gridContainer.parent;
        slotNode.position = this.gridContainer.position;
        this.slot = slotNode.getComponent(Slot);
        this.slot.init(this);
    }

    /**刷新格子，仅修改数据
     * @param direction 刷新方向  行：0  竖1
     * @param idx 第几行（列） 从序号1开始
     */
    public refreshGridsType(direction: number, idx: number, type: number) {
        let list: Grid[] = direction === 0 ? this.getRowGrids(idx) : this.getColGrids(idx);
        list.forEach(grid => { grid.type = type });
    }

    /**仅更新ui */
    public refreshGridsUI() {
        this.gridList.forEach(grid => { grid.updateSkin(grid.type) });
    }

    /**刷新格子(带延迟刷新动画)
     * @param direction 刷新方向  行：0  竖1
     */
    public refreshWithAni(direction: number, idx: number, type: number) {
        let list: Grid[] = direction === 0 ? this.getRowGrids(idx) : this.getColGrids(idx);
        let call = () => {
            let first = list.splice(0, 1)[0];
            if (first) {
                first.updateSkin(type);
            } else {
                this.unschedule(call);
                Global.ins.isFreshing = false;
                Module.get(Game).checkMatrixIsSame();
            }
        };
        Global.ins.isFreshing = true;
        this.schedule(call, 0.05);
    }

    /**刷新插槽 */
    public refreshSlot(config: ILevelElement) {
        if (!this.hasSlot) return;
        this.slot.refresh(config.slot);
    }

    /**获取横向最右的x坐标 */
    public getBorderPosX(): number {
        let col = this.matrixSize.y;
        let w = this.gridSize.x + this.gridSpaceSize.x;
        return col * w / 2;
    }

    /**获取竖向最下的y坐标 */
    public getBorderPosY(): number {
        let row = this.matrixSize.x;
        let h = this.gridSize.y + this.gridSpaceSize.y;
        return -row * h / 2;
    }

    /**获取一行的y坐标 */
    public getRowPos(row: number): number {
        let h = this.gridSize.y + this.gridSpaceSize.y;
        let y0 = (this.matrixSize.x - 1) * h / 2;
        return y0 - (row - 1) * h;
    }

    /**获取一列的x坐标 */
    public getColPos(col: number): number {
        let w = this.gridSize.x + this.gridSpaceSize.x;
        let x0 = -(this.matrixSize.y - 1) * w / 2;
        return x0 + (col - 1) * w;
    }

    /**清除所有格子 */
    private clearAllGrids() {
        while (this.gridList.length > 0) {
            this.gridFactory.put(this.gridList[0].node);
            this.gridList.splice(0, 1);
        }
    }

    /**获取格子尺寸 */
    private initGridSize() {
        let node = this.gridFactory.get();
        this.gridSize.x = node.getComponent(Grid).getGridWidth();
        this.gridSize.y = node.getComponent(Grid).getGridHeight();
        this.gridFactory.put(node);
    }

    /**获取一行 idx从第一行开始 */
    private getRowGrids(idx: number): Grid[] {
        let start = --idx * this.matrixSize.y;
        let list = this.gridList.slice(start, start + this.matrixSize.y);
        return list.reverse();
    }

    /**获取一列 idx从第一列开始 */
    private getColGrids(idx: number): Grid[] {
        let list = this.gridList.filter(grid => grid.col === idx);
        return list.reverse();
    }


}
