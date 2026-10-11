import { _decorator, Button, Component, EditBox, Label, Node } from 'cc';
import { ECamp, EJob, EUserInfoEditType, EPlayerStatus, EventName, IUser, IUserEditable } from '../../common/ComDefine';
import { DataStorage, EnumStorageKeys } from '../../common/DataStorage';
import EBEventMgr from '../../common/EBEventMgr';
import { EBUtils } from '../../common/EBUtil';
import { UserMgr } from '../../global/UserMgr';
const { ccclass, property } = _decorator;

@ccclass('UserEditor')
export class UserEditor extends Component {

    @property(Label)
    titleLabel: Label = null;

    @property(Node)
    editContainer: Node = null;

    @property(Node)
    showContainer: Node = null;

    @property(EditBox)
    gameNickEditBox: EditBox = null;

    @property(EditBox)
    wxNickEditBox: EditBox = null;

    @property(EditBox)
    jobEditBox: EditBox = null;

    @property(Label)
    gameNickLabel: Label = null;

    @property(Label)
    wxNickLabel: Label = null;

    @property(Label)
    jobLabel: Label = null;

    @property(Button)
    cancelBtn: Button = null;

    @property(Button)
    okBtn: Button = null;

    /**当前信息类型 */
    private type: EUserInfoEditType = null;
    private userInfo: IUser = null;

    protected onLoad(): void {
        this.addEvents();
    }

    private addEvents() {
        this.cancelBtn.node.on(`click`, this.onCancel, this);
        this.okBtn.node.on(`click`, this.onOk, this);
    }

    public reset(type: EUserInfoEditType, userInfo?: IUser) {
        this.type = type;
        this.userInfo = userInfo;
        switch (type) {
            case EUserInfoEditType.add:
                this.titleLabel.string = `添加会员`;
                this.editContainer.active = true;
                this.showContainer.active = false;
                this.clearEditBoxes();
                break;
            case EUserInfoEditType.delete:
                this.titleLabel.string = `删除会员`;
                this.editContainer.active = false;
                this.showContainer.active = true;
                this.updateShowStr(userInfo);
                break;
            case EUserInfoEditType.update:
                this.titleLabel.string = `更新会员`;
                this.editContainer.active = true;
                this.showContainer.active = false;
                this.updateEditBoxes(userInfo);
                break;
            default:
                break;
        }
    }

    private clearEditBoxes() {
        this.gameNickEditBox.string = ``;
        this.wxNickEditBox.string = ``;
        this.jobEditBox.string = ``;
    }

    /**修改时更新编辑框 */
    private updateEditBoxes(userInfo: IUser) {
        this.gameNickEditBox.string = userInfo.gameNick;
        this.wxNickEditBox.string = userInfo.wxNick;
        this.jobEditBox.string = userInfo.jobList.join('');
    }

    /**删除时更新展示框 */
    private updateShowStr(userInfo: IUser) {
        this.gameNickLabel.string = userInfo.gameNick;
        this.wxNickLabel.string = userInfo.wxNick;
        this.jobLabel.string = userInfo.jobList.join(``);
    }

    private onCancel() {
        this.node.active = false;
    }

    private onOk() {
        switch (this.type) {
            case EUserInfoEditType.add:
            case EUserInfoEditType.update:
                const isOk = this.checkInput();
                if(isOk) {
                    this.saveInfo();
                    this.node.active = false;
                }
                break;
            case EUserInfoEditType.delete:
                UserMgr.ins.deleteUser(this.userInfo.id);
                this.node.active = false;
                break;
            default:
                break;
        }
    }

    /**检查输入 */
    private checkInput(): boolean{
        let gameNick = this.gameNickEditBox.string;
        let wxNick = this.wxNickEditBox.string;
        let jobList = this.jobEditBox.string.split(``) as EJob[];
        let isFail = [!gameNick, !wxNick, jobList?.length != 2].includes(true);
        if (isFail) {
            alert(`信息不完整或错误`);
            return false;
        }else{
            return true;
        }

    }

    /**保存 */
    private saveInfo() {
        const userEditable: IUserEditable = {
            gameNick: this.gameNickEditBox.string,
            wxNick: this.wxNickEditBox.string,
            head: 0,
            dirtyTalk: '',
            jobList: this.jobEditBox.string.split(``) as EJob[]
        };
        if (this.type === EUserInfoEditType.add) {
            UserMgr.ins.addUser(userEditable);
        } else if (this.type === EUserInfoEditType.update) {
            UserMgr.ins.updateUser(this.userInfo.id, userEditable);
        }
    }

}


