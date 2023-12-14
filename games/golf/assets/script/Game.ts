
import Ball from "./Ball";
import Hall from "./Hall";
import Result from "./Result";
import SoundMgr from "./SoundMgr";
import { GConst, Global, ResPath, SoundPath, VecGroup } from "./common/Global";
import Module from "./common/Module";
import { NodeFactory } from "./common/NodeFactory";
import Utils from "./common/Utils";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Game extends Module {

    @property(cc.Label)
    levelLabel: cc.Label = null;

    @property(cc.Node)
    mapContainer: cc.Node = null;

    @property(cc.Node)
    effectLayer: cc.Node = null;

    @property(cc.Node)
    waveNode: cc.Node = null;

    @property(cc.Label)
    impulseLabel: cc.Label = null;

    @property(cc.Button)
    refreshBtn: cc.Button = null;

    @property(cc.Button)
    backBtn: cc.Button = null;

    private showTw: cc.Tween = null;
    private hideTw: cc.Tween = null;
    /**当前激活的球 */
    public activeBalls: Ball[] = [];
    /**击球的最大有效距离 */
    private maxTouchLen: number = 200;
    private touchPowerScale: number = 5;
    /** 波纹特效位置组 */
    private wavePos: VecGroup = new VecGroup();
    private isMapLoad: boolean = false;

    /**当前关卡 */
    private _curLevel: number = 1;
    private get curLevel(): number {
        return this._curLevel;
    }
    private set curLevel(v: number) {
        this._curLevel = v;
        this.levelLabel.string = v.toString();
    }

    /**剩余脉冲次数 */
    private _impulse: number = 1;
    private get impulse(): number {
        return this._impulse;
    }
    private set impulse(v: number) {
        if (v < 0) {
            this.gameOver(false);
            return;
        }
        this._impulse = v;
        this.impulseLabel.string = v.toString();
    }

    protected onLoad(): void {
        this.refreshBtn.node.on(`click`, this.onRefresh, this);
        this.backBtn.node.on(`click`, this.onBack, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    }

    private onTouchEnd(e: cc.Event.EventTouch) {
        if (!this.isMapLoad) return;
        let touchPos = e.getLocation();
        this.showWave(touchPos);
        this.impulse--;
        this.activeBalls.forEach(ball => {
            if (ball?.node.isValid) {
                let worldPos = ball.node.convertToWorldSpaceAR(cc.v2());
                worldPos.subSelf(touchPos);
                let power = this.maxTouchLen - worldPos.len();
                if (power > 0) {
                    worldPos.normalizeSelf().mulSelf(power).mulSelf(this.touchPowerScale);
                    ball.updateSpeed(worldPos.x, worldPos.y);
                }
            }
        })

    }

    private onRefresh() {
        Module.get(SoundMgr).playEffect(SoundPath.button);
        if (!this.isMapLoad) return;
        this.newGame(this.curLevel);
    }

    private onBack() {
        Module.get(SoundMgr).playEffect(SoundPath.button);
        if (!this.isMapLoad) return;
        this.isMapLoad = false;
        this.mapContainer.destroyAllChildren();
        this.hide();
        Module.get(Hall).show();
    }

    public showBackBtn() { this.backBtn.node.active = true };
    public hideBackBtn() { this.backBtn.node.active = false };

    /**手动初始化 */
    public init() {
        let time = GConst.changeSceneTime;
        this.showTw = cc.tween(this.node)
            .set({ opacity: 0, active: true })
            .to(time, { opacity: 255 });
        this.hideTw = cc.tween(this.node)
            .set({ opacity: 255 })
            .to(time, { opacity: 0 })
            .set({ active: false });
        Module.get(Result).hide();
        this.hideWave();
        this.node.active = false;
    }

    public newGame(level: number = 1) {
        this.activeBalls.length = 0;
        this.isMapLoad = false;
        this.curLevel = level;
        this.loadMap(level);
        this.impulse = this.getImpulseNum(level);
    }

    public nextGame() {
        let level = this.curLevel + 1;
        if (level > GConst.maxLevel) level = 1;
        this.newGame(level);
    }

    /**根据挂起啊设置总脉冲次数 */
    private getImpulseNum(level: number): number {
        return 2 * level + 2;
    }

    /**地图 */
    private async loadMap(level: number) {
        await this.hideMap();
        let path = `${ResPath.mapPreCommon}${level}`;
        let pre = await Utils.dynamicPrefab(path);
        let node = cc.instantiate(pre);
        node.parent = this.mapContainer;
        this.showMap();
    }

    private showMap() {
        let time = .3;
        cc.tween(this.mapContainer)
            .set({ opacity: 0 })
            .to(time, { opacity: 255 })
            .call(() => {
                this.isMapLoad = true;
            })
            .start();
    }

    private hideMap() {
        return new Promise<void>((resolve, reject) => {
            let time = .3;
            cc.tween(this.mapContainer)
                .to(time, { opacity: 0 })
                .call(() => {
                    this.mapContainer.destroyAllChildren();
                    resolve();
                })
                .start();
        })
    }

    /**清除一个激活的球 */
    public clearActiveBall(ball: Ball) {
        let idx = this.activeBalls.indexOf(ball);
        if (idx > - 1) this.activeBalls.splice(idx, 1);
        if (this.activeBalls.length === 0) {
            this.gameOver(true);
        }
    }

    /**游戏结束 */
    public gameOver(isWin: boolean) {
        if (isWin) {
            Module.get(Result).show();
        } else {
            this.newGame(this.curLevel);
        }
    }

    /**显示点击特效 波纹 */
    private showWave(touchPos: cc.Vec2) {
        Module.get(SoundMgr).playEffect(SoundPath.eliminate);
        this.waveNode.active = true;
        this.waveNode.parent.convertToNodeSpaceAR(touchPos, this.wavePos.local);
        this.waveNode.setPosition(this.wavePos.local);
        let ani = this.waveNode.getComponent(cc.Animation);
        ani.play();
        ani.on(cc.Animation.EventType.FINISHED, this.hideWave, this);
    }

    private hideWave() {
        this.waveNode.active = false;
    }

    public show() {
        this.showTw.start();
        this.scheduleOnce(() => {
            this.newGame();
        }, GConst.changeSceneTime);
    }

    public hide() {
        this.hideTw.start();
    }

}
