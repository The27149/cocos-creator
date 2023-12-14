
import Hall from "./Hall";
import SoundMgr from "./SoundMgr";
import BulletMgr from "./bullet/BulletMgr";
import CampMgr from "./camp/CampMgr";
import { ECAMP, GConst, Global, SoundPath } from "./common/Global";
import Module from "./common/Module";
import Utils from "./common/Utils";
import Shop from "./shop/Shop";
import TankMgr from "./tank/TankMgr";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Game extends Module {

    @property(cc.Prefab)
    tank0Pre: cc.Prefab = null;

    @property(cc.Prefab)
    tank1Pre: cc.Prefab = null;

    @property(cc.Prefab)
    tank2Pre: cc.Prefab = null;

    @property(cc.Prefab)
    tank3Pre: cc.Prefab = null;

    @property(cc.Prefab)
    tank4Pre: cc.Prefab = null;

    @property(cc.Prefab)
    tank5Pre: cc.Prefab = null;

    @property(cc.Prefab)
    tank6Pre: cc.Prefab = null;

    @property(cc.Prefab)
    tank7Pre: cc.Prefab = null;

    @property(cc.Prefab)
    bullet0Pre: cc.Prefab = null;

    @property(cc.Prefab)
    bullet1Pre: cc.Prefab = null;

    @property(cc.Prefab)
    bombPre: cc.Prefab = null;

    @property(cc.Node)
    tankContainer: cc.Node = null;

    @property(cc.Node)
    bulletContainer: cc.Node = null;

    @property(cc.Node)
    bombContainer: cc.Node = null;

    @property(cc.Label)
    levelLabel: cc.Label = null;

    private showTw: cc.Tween = null;
    private hideTw: cc.Tween = null;

    public isGameOver: boolean = false;
    public isPlayerWin: boolean = false;

    private _curLevel: number = 1;
    public get curLevel(): number {
        return this._curLevel;
    }
    private set curLevel(v: number) {
        this._curLevel = v;
        this.levelLabel.string = v.toString();
    }

    protected onLoad(): void {
        this.init();
        TankMgr.ins.init(this.tankContainer, this.tank0Pre, this.tank1Pre, this.tank2Pre, this.tank3Pre, this.tank4Pre, this.tank5Pre, this.tank6Pre, this.tank7Pre);
        BulletMgr.ins.init(this.bulletContainer, this.bullet0Pre, this.bullet1Pre);
        BulletMgr.ins.initBomb(this.bombContainer, this.bombPre);
        Module.get(Shop).init();
    }

    private init() {
        let time = GConst.changeSceneTime;
        this.showTw = cc.tween(this.node)
            .set({ opacity: 0, active: true })
            .to(time, { opacity: 255 });
        this.hideTw = cc.tween(this.node)
            .set({ opacity: 255 })
            .to(time, { opacity: 0 })
            .set({ active: false });

        this.node.active = false;
        this.isPlayerWin = false;
    }

    private newGame() {
        if (this.isPlayerWin) this.curLevel++;
        else { this.curLevel = this.curLevel }
        this.isPlayerWin = false;
        this.isGameOver = false;
        CampMgr.ins.init()
        Module.get(Shop).reset();
        this.robotStart();
    }

    /**人机启动 */
    private robotStart() {
        this.unschedule(this.robotAttack);
        this.schedule(this.robotAttack, 3);
    }

    private robotAttack() {
        let camp = CampMgr.ins.getCamp(ECAMP.enemy);
        let tankType = Utils.randomFromArray(GConst.allTankType)[0];
        camp.createTank(tankType);
    }

    /**人机停止 */
    public robotStop() {
        this.unschedule(this.robotAttack);
    }

    public show() {
        this.showTw.start();
        this.newGame();
    }

    public hide() {
        this.hideTw.start();
    }

}
