import { _decorator, Button, Component, instantiate, isValid, Node, Prefab } from 'cc';
import {  EPlayerStatus, EventName, IUser } from '../../common/ComDefine';
import { Player } from './Player';
import EBEventMgr from '../../common/EBEventMgr';
const { ccclass, property } = _decorator;

@ccclass('WaitingArea')
export class WaitingArea extends Component {
    @property(Node)
    container: Node = null;

    @property(Prefab)
    playerPrefab: Prefab = null;

    @property(Button)
    deleteBtn: Button = null;

    @property(Button)
    pickBtn: Button = null;

    @property(Button)
    resetBtn: Button = null;

    /**玩家列表 不管是否pick都存在这里  */
    private _playerList: Player[] = [];
    public get playerList(): Player[] {
        return this._playerList;
    }

    /**当前选中玩家 */
    private selectedPlayer: Player = null;

    protected onLoad(): void {
        this.container.destroyAllChildren();
        this.addEvents();
    }

    protected onDestroy(): void {
        this.removeEvents();
    }

    private addEvents() {
        this.deleteBtn.node.on(Button.EventType.CLICK, this.onClickDelete, this);
        this.pickBtn.node.on(Button.EventType.CLICK, this.onClickPick, this);
        this.resetBtn.node.on(Button.EventType.CLICK, this.onClickReset, this);
    }
    
    private removeEvents() {

    }

    /**添加玩家 */
    public addPlayer(data: IUser) {
        const isExist = this._playerList.some(item => item.user.id == data.id);
        if(isExist) return;
        const node = instantiate(this.playerPrefab);
        node.parent = this.container;
        const player =  node.getComponent(Player);
        player.init(data);
        player.clickCallBack = this.onClickPlayer.bind(this);
        this._playerList.push(player);
    }

    /**删除玩家 */
    private deletePlayer(){
        if(!this.selectedPlayer) return;
        const index = this._playerList.indexOf(this.selectedPlayer);
        if(index == -1) return;
        //只能删除等待区的玩家
        if (this.selectedPlayer.status !== EPlayerStatus.wait) return; 
        this._playerList.splice(index, 1);
        this.selectedPlayer.node.destroy();
        this.selectedPlayer = null;
    }

    /**子项选中 */
    private onClickPlayer(player: Player) {
        if(isValid(this.selectedPlayer)) this.selectedPlayer.updateSelectStatus(false);
        player.updateSelectStatus(true);
        this.selectedPlayer = player;
    }


    /**移除选中玩家 */
    private onClickDelete() {
        this.deletePlayer();
    }

    /**点击开始选人 */
    private onClickPick() {
        EBEventMgr.ins.raiseEvent(EventName.pickPlayers);
    }

    /**从战斗区召回全部玩家 */
    private onClickReset() {
        this._playerList.forEach(player => {
            player.reset();
            player.node.parent = this.container;
        })
        EBEventMgr.ins.raiseEvent(EventName.resetPlayers);
    }

    
}


