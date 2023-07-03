import Game from "./Game";
import Grid from "./Grid";
import Score from "./Score";
import { Global, ITask, ResPath } from "./common/Global";
import Module from "./common/Module";
import Move from "./common/Move";
import Utils from "./common/Utils";


const { ccclass, property } = cc._decorator;

/**任务配置 */
const config = {
    task1CountList: [6, 9, 12, 15, 20],
    task1RewardList: [50, 100, 150, 200, 300],
    task2CountList: [1, 2, 3, 4, 5],
    task2RewardList: [300, 200, 150, 100, 50],
    task3CountList: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
    task3RewardList: [2000, 1600, 1200, 1000, 800, 600, 400, 320, 240, 200],
}

@ccclass
export default class Task extends Module {

    @property(cc.Node)
    task1Node: cc.Node = null;

    @property(cc.Node)
    task2Node: cc.Node = null;

    @property(cc.Node)
    task3Node: cc.Node = null;

    private taskList: ITask[] = [];
    private isTask1Complete: boolean = false;
    /**每轮结束后 剩余格子的数量统计 */
    private remainInfo: number[] = [];

    /**创建任务 */
    public createTask() {
        this.isTask1Complete = false;
        let id1 = Utils.randomInt(0, config.task1CountList.length - 1);
        let id2 = Utils.randomInt(0, config.task2CountList.length - 1);
        let id3 = Utils.randomInt(0, config.task3CountList.length - 1);
        let task1: ITask = {
            type: Utils.randomFromArray(Global.gridTypes),
            count: config.task1CountList[id1],
            reward: config.task1RewardList[id1]
        };
        let task2: ITask = {
            type: Utils.randomFromArray(Global.gridTypes),
            count: config.task2CountList[id2],
            reward: config.task2RewardList[id2]
        };
        let task3: ITask = {
            count: config.task3CountList[id3],
            reward: config.task3RewardList[id3]
        }
        this.taskList.length = 0;
        this.taskList.push(task1, task2, task3);
        Utils.log(`任务序号：`, id1, id2, id3, `任务数量：`, task1.count, task2.count, task3.count,);
        this.updateUI();
    }

    /**更新任务ui */
    private updateUI() {
        let taskNodes = [this.task1Node, this.task2Node, this.task3Node];
        this.taskList.forEach((task, idx) => {
            let node = taskNodes[idx];
            if (task.type) Utils.dynamicSprite(node.getChildByName('type'), `${ResPath.faceRootPath}ani${task.type}_1`);
            node.getChildByName('count').getComponent(cc.Label).string = task.count.toString();
            node.getChildByName('reward').getComponent(cc.Label).string = '/' + task.reward.toString();
        })
    }

    /**检查任务1是否达成 连消 */
    public task1Check() {
        if (this.isTask1Complete) return;
        let grids = Module.get(Game).validList;
        if (!grids[0]) return;
        let task = this.taskList[0];
        if (grids[0].type !== task.type) return;
        if (grids.length >= task.count) {
            this.playRewardAni(task.reward, this.task1Node.getChildByName(`reward`));
        };
    }

    /**检查任务2是否达成 剩余单色少于.. */
    private task2Check() {
        let task = this.taskList[1];
        let num = this.remainInfo[task.type - 1];
        if (Number(num) <= task.count) {
            this.playRewardAni(task.reward, this.task2Node.getChildByName(`reward`));
        }
    }

    /**检查任务3是否达成 剩余总数少于 */
    private task3Check() {
        let task = this.taskList[2];
        let total = this.remainInfo.reduce((pre, item) => pre + item, 0);
        if (total <= task.count) {
            this.playRewardAni(task.reward, this.task3Node.getChildByName(`reward`));
        }
    }

    /**统计剩下的格子 */
    public checkRemainGrids() {
        let grids = Utils.flat(Module.get(Game).gridList);
        this.remainInfo.length = 0;
        for (let grid of grids) {
            let i = grid.type - 1;
            if (this.remainInfo[i]) this.remainInfo[i] += 1;
            else this.remainInfo[i] = 1;
        }
        this.task2Check();
        this.task3Check();
    }

    /**加分飘分 */
    private playRewardAni(score: number, startNode: cc.Node) {
        let gameMgr = Module.get(Game);
        let scoreMgr = Module.get(Score);
        let node = gameMgr.rewardFactory.get();
        node.parent = gameMgr.effectNode;
        node.getComponent(cc.Label).string = `/` + score.toString();
        let move = Move.getInstance().setParams(node, startNode, scoreMgr.currentLabel.node, 500);
        move.run(() => {
            node.destroy();
            scoreMgr.currentScore += score;
        });
    }

}
