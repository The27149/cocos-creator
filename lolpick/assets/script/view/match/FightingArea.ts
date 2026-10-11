import { _decorator, Button, Component, isValid, Node } from 'cc';
import { WaitingArea } from './WaitingArea';
import { Player } from './Player';
import { ECamp, EJob, EventName } from '../../common/ComDefine';
import { EBUtils } from '../../common/EBUtil';
import Move from '../../common/Move';
import EBEventMgr from '../../common/EBEventMgr';
const { ccclass, property } = _decorator;

@ccclass('FightingArea')
export class FightingArea extends Component {

    @property(WaitingArea)
    waitingArea: WaitingArea = null;

    @property(Node)
    blueContainer: Node = null;

    @property(Node)
    redContainer: Node = null;

    @property(Button)
    startResultBtn: Button = null;

    @property(Node)
    resultArea: Node = null;
    

    private waitList: Player[] = [];
    public blueList: Player[] = [];
    public redList: Player[] = [];

    public blueSelectedPlayer: Player = null;
    public redSelectedPlayer: Player = null;

    protected onLoad(): void {
        this.showResultArea(false);
        this.startResultBtn.node.on(Button.EventType.CLICK, this.onClickStartResultBtn, this)
        EBEventMgr.ins.addEvent(EventName.pickPlayers, this.pick, this);
        EBEventMgr.ins.addEvent(EventName.resetPlayers, this.reset, this);
    }
    
    protected onDestroy(): void {
        EBEventMgr.ins.removeEvent(EventName.pickPlayers, this.pick, this);
        EBEventMgr.ins.removeEvent(EventName.resetPlayers, this.reset, this);
    }

    /**分配玩家 */
    private pick() {
        if(this.waitingArea.playerList.length < 10) return;
        this.waitList = [...this.waitingArea.playerList];//待选的人
        const waitJobList = [EJob.top, EJob.jug, EJob.mid, EJob.adc, EJob.sup];//待选的位置
        //每轮确定一个位置，两个人 循环直到条件满足
        while(!this.isPickOver) {
            if(this.waitList.length === 0) break;
            //首先统计每个位置的人数
            // {job: 中, player: []}
            const jobArr = [];
            this.waitList.forEach(playerItem => {
                playerItem.user.jobList.forEach(jobItem => {
                    //排除已经确定的位置
                    if(waitJobList.includes(jobItem)){
                        const arrObj = jobArr.find(arrItem => arrItem.job === jobItem)
                        if(arrObj) arrObj.player.push(playerItem);
                        else jobArr.push({job: jobItem, player: [playerItem]})
                    }
                })
            })
            //根据人数排序
            jobArr.sort((a, b) => a.player.length - b.player.length);
            //尝试确定人数最多的位置
            const data = jobArr[0];
            if(!data) {
                //没有适配位置 剩余的全部补位
                waitJobList.forEach(jobItem => {
                    const players = EBUtils.randomItemOfArr(this.waitList, 2);
                    this.pickPlayer(players[0], jobItem, ECamp.blue);
                    this.pickPlayer(players[1], jobItem, ECamp.red);
                    waitJobList.splice(waitJobList.indexOf(jobItem), 1);
                })
            } else{
               if(data.player.length === 1){
                //camp1优先选  camp2补位
                    let camp1 = ECamp.blue, camp2 = ECamp.red;
                    const blueFillCount = this.blueList.filter(item => item.isFill).length;
                    const redFillCount = this.redList.filter(item => item.isFill).length;
                    if(blueFillCount === redFillCount) {
                        if(Math.random() < 0.5) [camp1, camp2] = [camp2, camp1];
                    }else if(blueFillCount < redFillCount) {
                        [camp1, camp2] = [camp2, camp1];
                    }
                    this.pickPlayer(data.player[0], data.job, camp1);
                    const otherOne = EBUtils.randomItemOfArr(this.waitList)[0];
                    this.pickPlayer(otherOne, data.job, camp2);
                    waitJobList.splice(waitJobList.indexOf(data.job), 1);
               }else {
                    const players: Player[] = EBUtils.randomItemOfArr(data.player, 2);
                    this.pickPlayer(players[0], data.job, ECamp.blue);
                    this.pickPlayer(players[1], data.job, ECamp.red);
                    waitJobList.splice(waitJobList.indexOf(data.job), 1);
               }
            }
        }
    }

    /**重置分配 */
    private reset() {
        this.blueList.length = 0;
        this.redList.length = 0;
        this.showResultArea(false);
        this.blueSelectedPlayer = null;
        this.redSelectedPlayer = null;
        this.startResultBtn.node.active = true;
    }

    /**是否选人结束 */
    private get isPickOver(): boolean {
        return this.checkCampOver(this.blueList) && this.checkCampOver(this.redList);
    }

    /**检查单个阵营是否选完 */
    private checkCampOver(list: Player[]): boolean {
        if(list.length !== 5) return false;
        const jobsStr = list.reduce((pre, cur) => {
            if(!pre.includes(cur.job)) pre += cur.job;
            return pre;
        }, '');
        return jobsStr.length === 5;
    }

    /**执行具体选人动作 */
    private pickPlayer(player: Player, job: EJob, camp: ECamp) {
        player.clickSmvpCallBack = this.onToggleSmvp.bind(this);
        this.waitList.splice(this.waitList.indexOf(player), 1);
        // const move = Move.getInstance();
        // move.setParams()
        if(camp === ECamp.blue) {
            this.blueList.push(player);
            player.node.parent = this.blueContainer;
        }else {
            this.redList.push(player);
            player.node.parent = this.redContainer;
        }
        player.pick(job, camp);
    }

    private onClickStartResultBtn() {
        if(this.blueList.length !== 5 || this.redList.length !== 5) return;
        this.showResultArea(true);
    }

    public showResultArea(isShow: boolean) {
        this.resultArea.active = isShow;
        if(isShow){
            this.startResultBtn.node.active = !isShow;
            this.redList.forEach(player => player.updateSmvpActive(isShow));
            this.blueList.forEach(player => player.updateSmvpActive(isShow));
        }
    }

    /**切换smvp标记 */
    private onToggleSmvp(player: Player) {
        const camp  = player.camp;
        if(camp === ECamp.blue){
            if(isValid(this.blueSelectedPlayer)) this.blueSelectedPlayer.smvpToggle.setIsCheckedWithoutNotify(false);
            this.blueSelectedPlayer = player;
        }else {
            if(isValid(this.redSelectedPlayer)) this.redSelectedPlayer.smvpToggle.setIsCheckedWithoutNotify(false);
            this.redSelectedPlayer = player;
        }
    }


}


