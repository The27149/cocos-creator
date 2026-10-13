import { _decorator, Button, Component, instantiate, isValid, Node, Prefab } from 'cc';
import { EUserInfoEditType, EventName, IUser } from '../../common/ComDefine';
import { DataStorage, EnumStorageKeys } from '../../common/DataStorage';
import EBEventMgr from '../../common/EBEventMgr';
import { UserMgr } from '../../global/UserMgr';
import { UserInfoItem } from './UserInfoItem';
import { UserEditor } from './UserEditor';
import { WaitingArea } from '../match/WaitingArea';
const { ccclass, property } = _decorator;

@ccclass('UserInfo')
export class UserInfo extends Component {

    @property(Prefab)
    userInfoItemPre: Prefab = null;

    @property(Node)
    UserContainer: Node = null;

    @property(Button)
    sortBtn: Button = null;

    @property(Button)
    addBtn: Button = null;

    @property(Button)
    deleteBtn: Button = null;

    @property(Button)
    updateBtn: Button = null;

    @property(Button)
    goFightBtn: Button = null;

    @property(Node)
    UserEditorNode: Node = null;

    @property(WaitingArea)
    waitingArea: WaitingArea = null;


    private itemList: UserInfoItem[] = [];
    private userEditor: UserEditor = null;
    public selectedItem: UserInfoItem = null;

    protected onLoad(): void {
        this.userEditor = this.UserEditorNode.getComponent(UserEditor);
        this.addEvents();
        this.init();
    }

    protected onDestroy() {
        this.removeEvents();
    }

    private addEvents() {
        this.sortBtn.node.on('click', this.onSortBtn, this);
        this.addBtn.node.on(`click`, this.onAddBtn, this);
        this.deleteBtn.node.on(`click`, this.onDeleteBtn, this);
        this.updateBtn.node.on(`click`, this.onUpdateBtn, this);
        this.goFightBtn.node.on(`click`, this.onGoFightBtn, this);
        EBEventMgr.ins.addEvent(EventName.addUser, this.onAddUser, this);
        EBEventMgr.ins.addEvent(EventName.deleteUser, this.onDeleteUser, this);
        EBEventMgr.ins.addEvent(EventName.updateUser, this.onUpdateUser, this);
    }
    
    private removeEvents() {
        EBEventMgr.ins.removeEvent(EventName.addUser, this.onAddUser, this);
        EBEventMgr.ins.removeEvent(EventName.deleteUser, this.onDeleteUser, this);
        EBEventMgr.ins.removeEvent(EventName.updateUser, this.onUpdateUser, this);
    }

    private async init() {
        //初始化前 尝试加载旧数据
        await UserMgr.ins.loadData();
        // this.deleteBtn.node.active = false;
        // this.updateBtn.node.active = false;
        this.UserEditorNode.active = false;
        this.UserContainer.destroyAllChildren();
        let userList = UserMgr.ins.userList;
        userList.forEach(itemData => {
            this.addUserItem(itemData);
        })
    }

    /**添加一个节点 */
    private addUserItem(data: IUser) {
        let node = instantiate(this.userInfoItemPre);
        node.parent = this.UserContainer;
        let user = node.getComponent(UserInfoItem);
        user.updateUI(data, this.itemList.length + 1);
        user.clickCallBack = this.onClickItem.bind(this);
        this.itemList.push(user);
    }

    /**删除一个节点 */
    private deleteUserItem(data: IUser) {
        let index = this.itemList.findIndex(item => item.user.id == data.id);
        if(index == -1) return;
        const item = this.itemList.splice(index, 1)[0];
        if(item == this.selectedItem) this.selectedItem = null;
        item.node.destroy();
    }

    /**排序 */
    private onSortBtn() {
        this.itemList.sort((a, b) => b.user.rankScore - a.user.rankScore);
        this.itemList.forEach((item, index) =>  {
            item.updateIndexUI(index + 1);
            item.node.setSiblingIndex(index);
        });

    }

    private onAddBtn() {
        this.UserEditorNode.active = true;
        this.userEditor.reset(EUserInfoEditType.add);
    }

    private onDeleteBtn() {
        const user = this.selectedItem?.user;
        if(!user) return;
        this.UserEditorNode.active = true;
        this.userEditor.reset(EUserInfoEditType.delete, user);
    }

    private onUpdateBtn() {
        const user = this.selectedItem?.user;
        if(!user) return;
        this.UserEditorNode.active = true;
        this.userEditor.reset(EUserInfoEditType.update, user);
    }

    private onGoFightBtn() {
        const user = this.selectedItem?.user;
        if(!user) return;
        this.waitingArea.addPlayer(user);
        //test
        // UserMgr.ins.userList.forEach(item => this.waitingArea.addPlayer(item))
    }

    private onClickItem(item: UserInfoItem) {
        if(isValid(this.selectedItem)) this.selectedItem.isSelected = false;
        item.isSelected = true;
        this.selectedItem = item;
    }

    private onAddUser(user: IUser) {
        this.addUserItem(user);
    }

    private onDeleteUser(user: IUser) {
        this.deleteUserItem(user);
    }

    private onUpdateUser(user: IUser) {
        const item = this.itemList.find(item => item.user.id == user.id);
        if(item) item.updateUI( user);
    }

}


