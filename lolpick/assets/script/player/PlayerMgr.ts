import { _decorator, Button, Component, instantiate, Node, Prefab } from 'cc';
import { EPlayerInfoAction, EventName, IPlayer } from '../common/ComDefine';
import { DataStorage, EnumStorageKeys } from '../common/DataStorage';
import EBEventMgr from '../common/EBEventMgr';
import { Player } from './Player';
import { PlayerInfo } from './PlayerInfo';
const { ccclass, property } = _decorator;

@ccclass('PlayerMgr')
export class PlayerMgr extends Component {

    @property(Prefab)
    playerPre: Prefab = null;

    @property(Node)
    playerContainer: Node = null;

    @property(Button)
    addBtn: Button = null;

    @property(Button)
    deleteBtn: Button = null;

    @property(Button)
    updateBtn: Button = null;

    @property(Node)
    playerInfoNode: Node = null;

    private playerInfo: PlayerInfo = null;
    private playerList: Player[] = [];

    protected onLoad(): void {
        this.addEvents();
        this.init();
    }

    private addEvents() {
        this.addBtn.node.on(`click`, this.onAddBtn, this);
        this.deleteBtn.node.on(`click`, this.onDeleteBtn, this);
        this.updateBtn.node.on(`click`, this.onUpdateBtn, this);
        EBEventMgr.ins.addEvent(EventName.addPlayer, this.onAddPlayer, this);
    }

    private init() {
        this.deleteBtn.node.active = false;
        this.updateBtn.node.active = false;
        this.playerInfoNode.active = false;
        this.playerInfo = this.playerInfoNode.getComponent(PlayerInfo);
        this.playerContainer.destroyAllChildren();
        this.playerList.length = 0;
        let playerList = DataStorage.ins.getItem(EnumStorageKeys.playerList) as IPlayer[];
        playerList.forEach(itemData => {
            this.addPlayer(itemData);
        })
    }

    /**添加一个节点 */
    private addPlayer(data: IPlayer) {
        let node = instantiate(this.playerPre);
        node.parent = this.playerContainer;
        let player = node.getComponent(Player);
        this.playerList.push(player);
        player.init(data);
    }

    private onAddBtn() {
        this.playerInfoNode.active = true;
        this.playerInfo.reset(EPlayerInfoAction.add);
    }

    private onDeleteBtn() {

    }

    private onUpdateBtn() {

    }

    private onAddPlayer(data: IPlayer) {
        this.addPlayer(data);
    }

}


