import GridBtn from "./GridBtn";
import Matrix from "./Matrix";
import { IGridBtn } from "./common/Global";
import { NodeFactory } from "./common/NodeFactory";


const { ccclass, property } = cc._decorator;

/**格子阵列的操作插槽 */
@ccclass
export default class Slot extends cc.Component {


    @property(cc.Node)
    gridBtnContainer: cc.Node = null;

    @property(cc.Prefab)
    gridBtnPre: cc.Prefab = null;


    private gridBtnFactory: NodeFactory = new NodeFactory();
    private gridBtnSize: cc.Vec2 = cc.v2();
    private matrix: Matrix = null;

    /**插槽初始化 */
    public init(m: Matrix) {
        this.matrix = m;
        this.gridBtnFactory.init(this.gridBtnPre);
        this.gridBtnContainer.removeAllChildren();
        this.initGridBtnSize();
    }

    /**根据配置刷新 */
    public refresh(configList: number[][]) {
        this.clearAllBtns();
        configList.forEach(item => {
            let direction = item[0],
                idx = item[1],
                type = item[2];
            let node = this.gridBtnFactory.get();
            node.parent = this.gridBtnContainer;
            let gridBtn = node.getComponent(GridBtn);
            gridBtn.reset(direction, idx, type, this);
            this.setGridBtnPos(node, direction, idx);
        })
    }

    /**点击了刷新按钮 */
    public clickGridBtn(gridBtn: GridBtn) {
        this.matrix.refreshWithAni(gridBtn.direction, gridBtn.idx, gridBtn.type);
    }

    /**设置按钮的位置 */
    private setGridBtnPos(node: cc.Node, direction: number, idx: number) {
        let x = 0, y = 0;
        if (direction === 0) {
            x = this.matrix.getBorderPosX() + this.gridBtnSize.x / 2 + 20;
            y = this.matrix.getRowPos(idx);
        } else {
            x = this.matrix.getColPos(idx);
            y = this.matrix.getBorderPosY() - this.gridBtnSize.y / 2 - 20;
        }
        node.setPosition(x, y);
    }

    /**清除插槽 */
    private clearAllBtns() {
        while (this.gridBtnContainer.childrenCount > 0) {
            this.gridBtnFactory.put(this.gridBtnContainer.children[0]);
        }
    }

    /**获取格子尺寸 */
    private initGridBtnSize() {
        let node = this.gridBtnFactory.get();
        this.gridBtnSize.x = node.getComponent(GridBtn).getWidth();
        this.gridBtnSize.y = node.getComponent(GridBtn).getHeight();
        this.gridBtnFactory.put(node);
    }

}
