import { _decorator, Button, Component, Label, Node, Toggle } from 'cc';
import { FightingArea } from './FightingArea';
import { ECamp } from '../../common/ComDefine';
import { Player } from './Player';
const { ccclass, property } = _decorator;

@ccclass('ResultArea')
export class ResultArea extends Component {
    
    @property(Toggle)
    blueToggle: Toggle = null;

    @property(Button)
    saveBtn: Button = null;
 
    @property(FightingArea)
    fightingArea: FightingArea = null;



    protected onLoad(): void {
        this.saveBtn.node.on(Button.EventType.CLICK, this.onClickSaveBtn, this);

    }

    private onClickSaveBtn() {
        const bluePlayer = this.fightingArea.blueSelectedPlayer,
        redPlayer = this.fightingArea.redSelectedPlayer;
        if(!bluePlayer || !redPlayer) return;
        const isBlueWin = this.blueToggle.isChecked;
        const blueList = this.fightingArea.blueList;
        const redList = this.fightingArea.redList;
        blueList.forEach(player => {
                player.settle(isBlueWin)
            })
        redList.forEach(player => {
            player.settle(!isBlueWin)
        })
        this.fightingArea.showResultArea(false)
    }
}


