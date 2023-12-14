import Game from "../Game";
import { ECAMP } from "../common/Global";
import Module from "../common/Module";
import Tank from "../tank/Tank";
import TankMgr from "../tank/TankMgr";
import CampMgr from "./CampMgr";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Camp {

    /**阵营类型 0：自己  1：敌人 */
    private type: ECAMP = ECAMP.self;
    /**地方阵营 */
    public enemyType: ECAMP = ECAMP.enemy;

    public tankList: Tank[] = [];
    private mainTank: Tank = null;  //主坦克（其血量代表阵营血量）

    /**重置阵营 生成主坦克 */
    init(self: ECAMP, enemy: ECAMP) {
        this.type = self;
        this.enemyType = enemy;
        this.mainTank = this.createTank(0);
    }

    /**生成一辆tank */
    public createTank(type: number): Tank {
        let tank = TankMgr.ins.createTank(type, this.type);
        this.tankList.push(tank);
        return tank;
    }

    /**销毁自己阵营的一辆车 */
    public destroyTank(tank: Tank) {
        if (tank === this.mainTank && !Module.get(Game).isGameOver) {
            CampMgr.ins.gameOver(this.type);
        }
        let idx = this.tankList.findIndex(item => item === tank);
        this.tankList.splice(idx, 1);
        TankMgr.ins.destroyTank(tank);
    }

    /**停止所有tank所有状态 */
    public stopAllTanks() {
        for (let tank of this.tankList) {
            if (tank.isDead) continue;
            tank.stopAllState();
        }
    }

    /**销毁所有车 */
    public destroyAllTank() {
        this.mainTank = null;
        for (let tank of this.tankList) {
            TankMgr.ins.destroyTank(tank);
        }
        this.tankList.length = 0;
    }

}
