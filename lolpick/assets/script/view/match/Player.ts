import { _decorator, Button, Component, Label, Node, Toggle } from 'cc';
import { ECamp, EJob, EPlayerStatus, IUser } from '../../common/ComDefine';
import { UserMgr } from '../../global/UserMgr';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {

    @property(Node)
    selectedBg: Node = null;

    @property(Label)
    nickLabel: Label = null;

    @property(Node)
    fillTag: Node = null;

    @property(Label)
    jobListLabel: Label = null;

    @property(Label)
    jobLabel: Label = null;

    @property(Label)
    recordLabel: Label = null;

    @property(Toggle)
    smvpToggle: Toggle = null;


    private _user: IUser = null;
    public get user(): IUser {
        return this._user;
    }

    public status: EPlayerStatus = EPlayerStatus.wait;
    public camp: ECamp = ECamp.none;
    public job: EJob = EJob.none;
    public isFill: boolean = false; //是否补位

    /**等待注入的回调列表 */
    public clickCallBack: (user: Player) => any = null;
    /**点击smvptoggle的回调 */
    public clickSmvpCallBack: (user: Player) => any = null;

    protected onLoad(): void {
        this.node.on(Button.EventType.CLICK, this.onClickSelect, this);
        this.smvpToggle.node.on(Toggle.EventType.TOGGLE, this.onToggleSmvp, this);
    }


    public init(user: IUser) {
        this._user = user;
        this.nickLabel.string = `${user.gameNick}`;
        this.jobListLabel.string = `${user.jobList.join(``)}`;
        this.updateRecordLabel();
        this.reset();
    }

    public reset() {
        this.status = EPlayerStatus.wait;
        this.camp = ECamp.none;
        this.updateSelectStatus(false);
        this.updateJob(EJob.none);
        this.updateFill(false);
        this.updateSmvpActive(false);
    }

    /**被pick时更新状态 */
    public pick(job: EJob, camp: ECamp) {
        this.status = EPlayerStatus.pick;
        this.camp = camp;
        this.updateSelectStatus(false);
        this.updateFill(!this.user.jobList.includes(job));
        this.updateJob(job);
    }

    /**更新是否被选中标记 （仅在等待区时有效） */
    public updateSelectStatus(isSelected: boolean) {
        this.selectedBg.active = isSelected;
    }

    /**更新玩家位置ui */
    public updateJob(job: EJob) {
        this.job = job;
        this.jobLabel.string = `${job}`;
    }

    /**是否显示补位标记 */
    public updateFill(isFill: boolean) {
        this.isFill = isFill;
        this.fillTag.active = isFill;
    }

    /**是否显示smvp标记 */
    public updateSmvpActive(isShow: boolean) {
        this.smvpToggle.node.active = isShow;
        this.smvpToggle.isChecked = false;
    }

    private updateRecordLabel() {
        this.recordLabel.string = `总场：${this.user.totalGame} 胜率：${this.user.winRate}`;
    }

    /**玩家数据结算 */
    public settle(isWin: boolean) {
        const isSmvp = this.smvpToggle.isChecked;
        const isFill = this.isFill;
        this.user.totalGame++;
        this.user.fillGame += isFill ? 1 : 0;
        if(isWin){
            this.user.winGame++;
            this.user.mvpGame += isSmvp ? 1 : 0;
            this.user.rankScore += 20;
            this.user.rankScore += isSmvp ? isFill ? 12 : 8 : isFill ? 2 : 0; 
        }else {
            this.user.svpGame += isSmvp ? 1 : 0;
            this.user.rankScore -= 20;
            this.user.rankScore += isSmvp ? isFill ? 24 : 18 : isFill ? 3 : 0;
        }
        this.user.winRate = Math.round(this.user.winGame * 100 / this.user.totalGame) / 100;
        this.updateRecordLabel();
        UserMgr.ins.updateUser(this.user.id,this.user);
    }

    /**当被点击时 */
    private onClickSelect() {
        if(this.status !== EPlayerStatus.wait) return;
        this.clickCallBack?.(this);
    }

    /**切换smvp标记 */
    private onToggleSmvp() {
        this.clickSmvpCallBack?.(this);
    }
}


