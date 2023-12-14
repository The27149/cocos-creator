import Grid from "./Grid";
import Info from "./Info";
import Result from "./Result";
import Module from "./common/Module";
import { NodeFactory } from "./common/NodeFactory";
import Utils from "./common/Utils";



const { ccclass, property } = cc._decorator;

@ccclass
export default class Game extends Module {

    @property(cc.Prefab)
    gridPre: cc.Prefab = null;

    @property(cc.Node)
    gridContainer: cc.Node = null;


    private gridPool: NodeFactory = new NodeFactory();
    /**二维数组保存格子 */
    private gridList: Grid[][] = [];
    /**扁平化的格子列表，随gridList更新 */
    private gridListFlat: Grid[] = [];
    /**蜂巢数量(第一行为准) */
    private gridNumX: number = 10;
    private gridNumY: number = 15;
    /**间隙 px */
    private gridGap: number = 5;
    /**蜜蜂个数 */
    public beeNum: number = 20;
    public isLongTouch: boolean = false;
    public isStartPlay: boolean = false;
    public canPlay: boolean = false;
    public openGridNum: number = 0;

    protected onLoad(): void {
        super.onLoad();
        this.gridPool.init(this.gridPre);
    }

    protected start(): void {
        this.createGrids();
        this.reset();
    }

    /**创建蜂巢 */
    private createGrids() {
        let w = this.getGridWidth() + this.gridGap,
            h = 3 ** 0.5 / 2 * w;
        let y0 = (this.gridNumY - 1) * h / 2;
        for (let j = 0; j < this.gridNumY; j++) {
            let NumX = j % 2 === 0 ? this.gridNumX : this.gridNumX - 1;
            let x0 = -(NumX - 1) * w / 2,
                y = y0 - j * h;
            let row = [];
            for (let i = 0; i < NumX; i++) {
                let node = this.gridPool.get();
                let x = x0 + i * w;
                node.parent = this.gridContainer;
                node.setPosition(x, y);
                let grid = node.getComponent(Grid);
                row.push(grid);
                grid.init(i, j);
            }
            this.gridList.push(row);
        }
        this.gridListFlat = Utils.flat(this.gridList);
    }

    /**重置游戏 */
    public reset() {
        this.canPlay = true;
        this.isLongTouch = false;
        this.isStartPlay = false;
        this.openGridNum = 0;
        this.gridListFlat.forEach(item => {
            item.reset();
        })
        this.refreshBees();
        this.refreshCount();
        Module.get(Info).reset();
    }

    /**刷新蜜蜂雷区 */
    private refreshBees() {
        let grids: Grid[] = [];
        while (grids.length < this.beeNum) {
            let grid = Utils.randomFromArray(this.gridListFlat);
            if (!grids.includes(grid)) grids.push(grid);
        }
        grids.forEach((item) => {
            item.isBee = true;
        })
    }

    /**刷新空白格子计数 */
    private refreshCount() {
        for (let grid of this.gridListFlat) {
            if (grid.isBee) continue;
            grid.beeNum = this.countBeeNum(grid);
        }
    }

    /**统计周围的蜜蜂数量 */
    private countBeeNum(grid: Grid): number {
        let i = grid.idy,
            j = grid.idx;
        let grid1: Grid, grid2: Grid, grid3: Grid, grid4: Grid, grid5: Grid, grid6: Grid;
        grid2 = this.gridList[i - 1] && this.gridList[i - 1][j];
        grid3 = this.gridList[i] && this.gridList[i][j - 1];
        grid4 = this.gridList[i] && this.gridList[i][j + 1];
        grid6 = this.gridList[i + 1] && this.gridList[i + 1][j];
        //i:偶数为多行 奇数为少行
        if (i % 2 === 0) {
            grid1 = this.gridList[i - 1] && this.gridList[i - 1][j - 1];
            grid5 = this.gridList[i + 1] && this.gridList[i + 1][j - 1];
        } else {
            grid1 = this.gridList[i - 1] && this.gridList[i - 1][j + 1];
            grid5 = this.gridList[i + 1] && this.gridList[i + 1][j + 1];
        }
        return [grid1, grid2, grid3, grid4, grid5, grid6].reduce((pre, cur) => {
            if (cur?.isBee) pre++;
            return pre;
        }, 0);
    }

    public checkGameOverWin() {
        if (this.openGridNum === this.gridListFlat.length - this.beeNum) this.gameOver(true);
    }

    public gameOver(isWin: boolean) {
        Module.get(Info).stopClock();
        this.canPlay = false;
        Module.get(Result).show(isWin);
    }

    private getGridWidth(): number {
        let grid = this.gridPool.get();
        let w = grid.getComponent(Grid).getGridWidth();
        this.gridPool.put(grid);
        return w;
    }



}
