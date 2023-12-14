import Game from "../Game";
import Result from "../Result";
import BulletMgr from "../bullet/BulletMgr";
import { ECAMP } from "../common/Global";
import Module from "../common/Module";
import Shop from "../shop/Shop";
import Camp from "./Camp";


const { ccclass, property } = cc._decorator;

@ccclass
export default class CampMgr {
    private static _ins: CampMgr = null;
    public static get ins(): CampMgr {
        if (!this._ins) this._ins = new CampMgr();
        return this._ins;
    }


    private campList: Camp[] = [];
    /**玩家阵营类型 */
    public playerCamp: ECAMP = ECAMP.self;

    public init() {
        let camp0 = new Camp();
        camp0.init(ECAMP.self, ECAMP.enemy);
        let camp1 = new Camp();
        camp1.init(ECAMP.enemy, ECAMP.self);
        this.campList.push(camp0, camp1);
        this.playerCamp = ECAMP.self;
    }

    /**获取阵营 */
    public getCamp(campType: ECAMP): Camp {
        return this.campList[campType];
    }

    /**游戏结束 */
    public gameOver(fail: ECAMP) {
        let winner = this.getCamp(this.getCamp(fail).enemyType);
        winner.stopAllTanks();
        let isWin = fail === ECAMP.enemy;
        Module.get(Result).show(isWin);
        Module.get(Game).isGameOver = true;
        Module.get(Game).isPlayerWin = isWin;
        Module.get(Game).robotStop();
        Module.get(Shop).stopEnergy();
    }

    /**清场 */
    public clear() {
        for (let camp of this.campList) {
            camp.destroyAllTank();
        }
        BulletMgr.ins.destroyAllBullets();
        this.campList.length = 0;
    }

}
