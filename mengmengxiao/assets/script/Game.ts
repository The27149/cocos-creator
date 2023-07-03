import Grid from "./Grid";
import Score from "./Score";
import SoundMgr from "./SoundMgr";
import Task from "./Task";
import { GConst, Global, MOVE_DIRECTION, SoundPath } from "./common/Global";
import Module from "./common/Module";
import { NodeFactory } from "./common/NodeFactory";
import Utils from "./common/Utils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Game extends Module {

    @property(cc.Prefab)
    gridPre: cc.Prefab = null;

    @property(cc.Prefab)
    addScorePre: cc.Prefab = null;

    @property(cc.Prefab)
    rewardPre: cc.Prefab = null;

    @property(cc.Node)
    gridContainer: cc.Node = null;

    @property(cc.Node)
    gameOverNode: cc.Node = null;

    @property(cc.Button)
    reStartBtn: cc.Button = null;

    @property(cc.Node)
    effectNode: cc.Node = null;

    @property(cc.Button)
    refreshBtn: cc.Button = null;

    /**格子工厂 */
    private gridFactory: NodeFactory = null;
    /**飘分工厂 */
    public addScoreFactory: NodeFactory = null;
    /**任务飘分工厂 */
    public rewardFactory: NodeFactory = null;
    public gridList: Grid[][] = [];
    /**搜索时 保存满足要求的 */
    public validList: Grid[] = [];
    /**每次搜索过程 保存已经搜过的 */
    public checkedList: Grid[] = [];
    public canClick: boolean = true;


    protected onLoad(): void {
        super.onLoad();
        this.gameOverNode.active = false;
        this.reStartBtn.node.on('click', this.onRestart, this);
        this.refreshBtn.node.on('click', this.onClickFresh, this);
        this.gridFactory = new NodeFactory().init(this.gridPre);
        this.addScoreFactory = new NodeFactory().init(this.addScorePre);
        this.rewardFactory = new NodeFactory().init(this.rewardPre);
    }


    public createGrids() {
        this.gridList.length = 0;
        //行
        for (var i = 0; i < 10; i++) {
            let col = this.gridList[i] = [];
            //列
            for (var j = 0; j < 10; j++) {
                let type = Utils.randomFromArray(Global.gridTypes);
                var node = this.gridFactory.get();
                node.parent = this.gridContainer;
                let grid = node.getComponent(Grid);
                grid.init(type, i, j);
                col[j] = grid;
            }
        }
        Global.ins.canfreshGrids = true;
        if (this.eliminateOverCheck()) {
            this.refreshGrids();
        }
    }

    private destroyGrids(list: Grid[]) {
        list.forEach(item => {
            this.gridFactory.put(item.node);
        })
    }

    /**重置搜索 */
    public resetSearch() {
        this.validList.length = 0;
        this.checkedList.forEach(item => item.isChecked = false);
        this.checkedList.length = 0;
    }

    /**搜索一个格子 初始格子没有compare*/
    public check(grid: Grid, compare?: Grid) {
        if (grid.isChecked) return;
        grid.isChecked = true;
        this.checkedList.push(grid);
        if (!compare || grid.type === compare.type) {
            this.validList.push(grid);
            let x = grid.posIndex.x,
                y = grid.posIndex.y;
            let list = this.gridList;
            list[x] && list[x][y + 1] && this.check(list[x][y + 1], grid);//上
            list[x] && list[x][y - 1] && this.check(list[x][y - 1], grid);//下
            list[x - 1] && list[x - 1][y] && this.check(list[x - 1][y], grid);//左
            list[x + 1] && list[x + 1][y] && this.check(list[x + 1][y], grid);//右
        }
    }

    /** 消除 */
    public eliminate() {
        for (let i = 0; i < this.gridList.length; i++) {
            let col = this.gridList[i];
            for (let j = 0; j < col.length; j++) {
                let grid = col[j];
                if (this.validList.includes(grid)) {
                    col.splice(j, 1);
                    j--;
                }
            }
            //如果该数组最后一个元素被删除(某列消失)，把这个空数组也删掉
            if (col.length === 0) {
                this.gridList.splice(i, 1);
                i--;
            }
        }
        for (let grid of this.validList) {
            grid.disappear();
        }
        //等待消失动画完成
        setTimeout(() => {
            this.destroyGrids(this.validList);
            this.resetSearch();
            this.move();
        }, GConst.gridDisappearTime * 1000);
    }

    /**掉落 */
    public move() {
        for (let i = 0; i < this.gridList.length; i++) {
            let col = this.gridList[i];
            for (let j = 0; j < col.length; j++) {
                let grid = col[j];
                let x = grid.posIndex.x,
                    y = grid.posIndex.y;
                //y坐标有移动 掉落
                if (j !== y) grid.move(MOVE_DIRECTION.down, y - j);
                //x坐标有移动 横移
                if (i !== x) grid.move(MOVE_DIRECTION.left, x - i);
                grid.posIndex.x = i;
                grid.posIndex.y = j;
            }
        }
        setTimeout(() => {
            this.canClick = true;
            if (this.eliminateOverCheck()) {
                Utils.log('消除结束');
                this.levelOver();
            }
        }, GConst.gridMoveTime * 1000);
    }

    /**判定一关是否结束 */
    private eliminateOverCheck(): boolean {
        let isOver = true;
        let grids = Utils.flat(this.gridList);
        for (let i = 0; i < grids.length; i++) {
            let grid = grids[i];
            this.check(grid);
            isOver = this.validList.length <= 1;
            this.resetSearch();
            if (!isOver) break;
        }
        return isOver;
    }

    /**一关结束 */
    private levelOver() {
        let task = Module.get(Task);
        task.checkRemainGrids();
        let scoreMgr = Module.get(Score);
        scoreMgr.updateTopScore();
        if (scoreMgr.currentScore >= scoreMgr.targetScore) {
            this.destroyAll(() => {
                scoreMgr.levelStart(scoreMgr.level + 1);
            });
        } else {
            Utils.log('游戏结束');
            this.gameOverNode.active = true;
        }
    }

    /**移除当前剩余的所有格子 */
    private destroyAll(call?: Function) {
        let grids = Utils.flat(this.gridList);
        grids.forEach(item => item.disappear());
        setTimeout(() => {
            this.destroyGrids(grids);
            this.gridList.length = 0;
            call && call();
        }, GConst.gridDisappearTime * 1000);
    }

    private onRestart() {
        Module.get(SoundMgr).playEffect(SoundPath.button);
        this.gameOverNode.active = false;
        this.destroyAll(() => {
            Module.get(Score).gameStart();
        })
    }

    private onClickFresh() {
        Module.get(SoundMgr).playEffect(SoundPath.button);
        this.refreshGrids();
    }

    /**刷新格子 */
    private refreshGrids() {
        if (!Global.ins.canfreshGrids) return;
        Global.ins.canfreshGrids = false;
        this.destroyAll(() => {
            this.createGrids();
        })
    }
}
