import { _decorator, Button, Component, isValid, Label, Sprite,Node, UIOpacity, UITransform } from 'cc';
import {  IUser } from '../../common/ComDefine';
import { UserInfo } from './UserInfo';
const { ccclass, property } = _decorator;

@ccclass('UserInfoItem')
export class UserInfoItem extends Component {

    @property(Label)
    nickLabel: Label = null;

    @property(Sprite)
    headSprite: Sprite = null;

    @property(Label)
    jobLabel: Label  = null;

    @property(Label)
    recordLabel: Label = null;

    @property(Node)
    selectBg: Node = null;

    @property(Label)
    indexLabel: Label = null;

    private _user: IUser = null;
    public get user(): IUser {
        return this._user;
    }
    private _isSelected: boolean = false;
    public get isSelected(): boolean {
        return this._isSelected;
    }
    public set isSelected(value: boolean) {
        this._isSelected = value;
        this.selectBg.active = value;
    }
    public clickCallBack: (item: UserInfoItem) => any = null;


    protected onLoad(): void {
        this.node.on(Button.EventType.CLICK, this.onClick, this);
    }

    public updateUI(data: IUser, index?: number) {
        this._user = data;
        this.nickLabel.string = `${data.gameNick}(${data.wxNick})#${data.id}`;
        this.jobLabel.string = `${data.jobList.join('')}`;
        this.recordLabel.string = `总分：${data.rankScore}，总场：${data.totalGame}, 胜率：${data.winRate}, 生日：${new Date(data.birthDay).toLocaleDateString()}`;
        if(!!index) this.indexLabel.string = `${index}`;
    }

    public updateIndexUI(index: number){
        this.indexLabel.string = `${index}`;
    }

    private onClick(){
        this.clickCallBack?.(this);
    }
}


