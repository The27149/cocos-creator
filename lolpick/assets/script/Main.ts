import { _decorator, Component } from 'cc';
import { DataStorage, EnumStorageKeys } from './common/DataStorage';
const { ccclass, property } = _decorator;

@ccclass('Main')
export class Main extends Component {
    start() {
        let playerList = DataStorage.ins.getItem(EnumStorageKeys.playerList);
        if (!playerList) {
            playerList = [];
            DataStorage.ins.setItem(EnumStorageKeys.playerList, playerList);
        }
        let rankList = DataStorage.ins.getItem(EnumStorageKeys.rankList);
        if (!rankList) {
            rankList = [];
            DataStorage.ins.setItem(EnumStorageKeys.rankList, rankList);
        }
    }

}


