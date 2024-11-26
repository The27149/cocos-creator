import { _decorator, Button, Component, EditBox, Label, Node } from 'cc';
import { ECamp, EJob, EPlayerInfoAction, EPlayerStatus, EventName, IPlayer } from '../common/ComDefine';
import { DataStorage, EnumStorageKeys } from '../common/DataStorage';
import EBEventMgr from '../common/EBEventMgr';
import { EBUtils } from '../common/EBUtil';
const { ccclass, property } = _decorator;

@ccclass('PlayerInfo')
export class PlayerInfo extends Component {

    @property(Label)
    titleLabel: Label = null;

    @property(Node)
    editContainer: Node = null;

    @property(Node)
    showContainer: Node = null;

    @property(EditBox)
    idEditBox: EditBox = null;

    @property(EditBox)
    nickEditBox: EditBox = null;

    @property(EditBox)
    jobEditBox: EditBox = null;

    @property(Label)
    idLabel: Label = null;

    @property(Label)
    nickLabel: Label = null;

    @property(Label)
    jobLabel: Label = null;

    @property(Button)
    cancelBtn: Button = null;

    @property(Button)
    okBtn: Button = null;

    /**当前信息类型 */
    private type: EPlayerInfoAction = null;

    protected onLoad(): void {
        this.addEvents();
    }

    private addEvents() {
        this.cancelBtn.node.on(`click`, this.onCancel, this);
        this.okBtn.node.on(`click`, this.onOk, this);
    }

    public reset(type: EPlayerInfoAction, playerInfo?: IPlayer) {
        this.type = type;
        switch (type) {
            case EPlayerInfoAction.add:
                this.titleLabel.string = `添加会员`;
                this.editContainer.active = true;
                this.showContainer.active = false;
                this.updateEditBoxes();
                break;
            case EPlayerInfoAction.delete:
                this.titleLabel.string = `删除会员`;
                this.editContainer.active = false;
                this.showContainer.active = true;
                this.updateShowStr(playerInfo);
                break;
            case EPlayerInfoAction.update:
                this.titleLabel.string = `更新会员`;
                this.editContainer.active = true;
                this.showContainer.active = false;
                this.updateEditBoxes(playerInfo);
                break;
            default:
                break;
        }
    }

    /**添加/修改时更新编辑框 */
    private updateEditBoxes(playerInfo?: IPlayer) {
        let idStr = EBUtils.randomString(5, 2), nickStr = ``, jobStr = ``;
        if (playerInfo) {
            idStr = playerInfo.id.toString();
            nickStr = playerInfo.nick;
            jobStr = playerInfo.jobList.join(``);
        }
        this.idEditBox.string = idStr;
        this.nickEditBox.string = nickStr;
        this.jobEditBox.string = jobStr;
    }

    /**删除时更新展示框 */
    private updateShowStr(playerInfo: IPlayer) {
        this.idLabel.string = playerInfo.id.toString();
        this.nickLabel.string = playerInfo.nick;
        this.jobLabel.string = playerInfo.jobList.join(``);
    }

    private onCancel() {
        this.node.active = false;
    }

    private onOk() {
        switch (this.type) {
            case EPlayerInfoAction.add:
            case EPlayerInfoAction.update:
                let isSaveSucceed = this.saveInfo();
                if (isSaveSucceed) this.node.active = false;
                break;
            case EPlayerInfoAction.delete:
                this.deleteInfo();
                this.node.active = false;
                break;
            default:
                break;
        }
    }

    private saveInfo(): boolean {
        let idStr = this.idEditBox.string;
        let nickStr = this.nickEditBox.string;
        let jobList = this.jobEditBox.string.split(``) as EJob[];
        let isFail = [!idStr, !nickStr, jobList?.length != 2].includes(true);
        if (isFail) {
            alert(`信息不完整`);
            return false;
        }
        if (this.isPlayerExist(Number(idStr))) {
            alert(`id已存在`)
            return false;
        }
        let playerList = DataStorage.ins.getItem(EnumStorageKeys.playerList) as IPlayer[];
        let player = null;
        if (this.type === EPlayerInfoAction.add) {
            player = {
                id: Number(idStr),
                nick: nickStr,
                head: 0,
                camp: ECamp.none,
                jobList: jobList,
                status: EPlayerStatus.free,
                score: 0,
                playCount: 0,
                winCount: 0,
                winRate: 0,
            }
            playerList.push(player);
            DataStorage.ins.setItem(EnumStorageKeys.playerList, playerList);
            EBEventMgr.ins.raiseEvent(EventName.addPlayer, player);
        } else if (this.type === EPlayerInfoAction.update) {
            player = playerList.find(player => player.id == Number(idStr));
            let idx = playerList.findIndex(player => player.id == Number(idStr));
            playerList.splice(idx, 1);
            player.id = Number(idStr);
            player.nick = nickStr;
            player.jobList = jobList;
            playerList.push(player);
            DataStorage.ins.setItem(EnumStorageKeys.playerList, playerList);
            EBEventMgr.ins.raiseEvent(EventName.updatePlayer, player);
        }
        return true;
    }

    private deleteInfo() {
        let playerList = DataStorage.ins.getItem(EnumStorageKeys.playerList) as IPlayer[];
        let id = Number(this.idLabel.string);
        let idx = playerList.findIndex(player => player.id == id);
        playerList.splice(idx, 1);
        DataStorage.ins.setItem(EnumStorageKeys.playerList, playerList);
        EBEventMgr.ins.raiseEvent(EventName.deletePlayer, id);
    }

    /**会员已存在 */
    private isPlayerExist(id: number): boolean {
        let playerList = DataStorage.ins.getItem(EnumStorageKeys.playerList) as IPlayer[];
        return playerList.some(player => player.id == id);
    }

}


