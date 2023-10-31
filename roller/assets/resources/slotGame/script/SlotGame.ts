
import SoundMgr from "../../../script/SoundMgr";
import { SoundPath } from "../../../script/common/Global";
import Module from "../../../script/common/Module";
import Utils from "../../../script/common/Utils";
import SlotConfig from "./SlotConfig";
import SlotRoller from "./SlotRoller";


const { ccclass, property } = cc._decorator;

@ccclass
export default class SlotGame extends Module {

    public static gameCache: cc.Node = null;
    /**添加slot小游戏 */
    public static async addSlotGame(count: number = SlotConfig.ins.totalPlayCount, hitHandler?: Function) {
        if (!this.gameCache) {
            let pre = await Utils.dynamicPrefab(SlotConfig.ins.slotGamePrePath);
            this.gameCache = cc.instantiate(pre);
        }
        this.gameCache.parent = cc.Canvas.instance.node;
        let slotGame = this.gameCache.getComponent(SlotGame);
        slotGame.reset(count, hitHandler);
    }
    /**退出slot小游戏 */
    public static removeSlotGame() {
        if (this.gameCache?.getComponent(SlotGame)?.isPlaying) return;
        this.gameCache?.removeFromParent();
    }

    @property(cc.Node)
    rollerContainer: cc.Node = null;

    @property(cc.Button)
    startBtn: cc.Button = null;

    @property(cc.Sprite)
    hitSprite: cc.Sprite = null;

    @property(cc.Label)
    remainLabel: cc.Label = null;

    /**单条滚轴列表 */
    private rollerList: SlotRoller[] = [];
    /**格子预制体 */
    public gridPre: cc.Prefab = null;
    public worldPos: cc.Vec2 = cc.v2();
    public v00: cc.Vec2 = cc.v2();
    private isRolling: boolean = false;
    private isPlaying: boolean = false;
    private hitHandler: Function = null;

    /**剩余次数 */
    private _remainCount: number = 0;
    private get remainCount(): number {
        return this._remainCount;
    }
    private set remainCount(v: number) {
        if (v < 0) v = 0;
        this._remainCount = v;
        this.remainLabel.string = v.toString();
    }

    protected async onLoad() {
        this.gridPre = await Utils.dynamicPrefab(SlotConfig.ins.gridPrePath);
        this.rollerContainer.convertToWorldSpaceAR(this.v00, this.worldPos);
        this.installRoller();
        this.addEvents();
    }

    private addEvents() {
        this.startBtn.node.on(`click`, this.onClickStartBtn, this);
    }

    /**安装滚轴 */
    private installRoller() {
        let cfg = SlotConfig.ins;
        let unitX = cfg.gridWidth + cfg.gridSpacingX;
        let x0 = -(cfg.col - 1) * unitX / 2;
        for (let i = 0; i < cfg.col; i++) {
            let node = new cc.Node(`roller`);
            node.parent = this.rollerContainer;
            node.setPosition(x0 + unitX * i, 0);
            let roller = node.addComponent(SlotRoller);
            this.rollerList.push(roller);
            roller.init();
        }
    }

    /**每次重开 重置游戏 */
    private reset(count: number, hitHandler: Function) {
        this.remainCount = count;
        this.hitHandler = hitHandler;
        this.isPlaying = false;
    }

    /**开始按钮 */
    private onClickStartBtn() {
        if (this.isPlaying) return;
        if (this.remainCount <= 0) return;
        Module.get(SoundMgr).playEffect(SoundPath.button);
        this.hitSprite.spriteFrame = null;
        this.allRollerBegin();
    }

    /**所有滚轴依次开始 */
    private allRollerBegin() {
        Module.get(SoundMgr).playEffect(SoundPath.roll)
        this.remainCount--;
        this.isRolling = true;
        this.isPlaying = true;
        for (let i = 0; i < this.rollerList.length; i++) {
            setTimeout(() => {
                let roller = this.rollerList[i];
                roller.startRoll();
            }, i * SlotConfig.ins.rollerStartGap);
        }
    }

    /**全部滚轴停止 */
    public allRollerEnd() {
        this.isRolling = false;
        let focusDatas: number[] = [];
        for (let i = 0; i < this.rollerList.length; i++) {
            let roller = this.rollerList[i];
            focusDatas.push(roller.getFocusGrid().data);
        }
        let first = focusDatas[0];
        let isAllSame = !focusDatas.some(data => data !== first);
        if (isAllSame) {
            this.showHitSprite(first);
            this.hitHandler && this.hitHandler(first);
        } else {
            this.playOver();
        }
    }

    public isLastRoller(roller: SlotRoller) {
        return roller === this.rollerList[this.rollerList.length - 1];
    }

    private showHitSprite(data: number) {
        Module.get(SoundMgr).playEffect(SoundPath.shoot)
        let path = SlotConfig.ins.gridSpPath.replace(`*`, `${data}`);
        Utils.dynamicSprite(this.hitSprite, path);
        cc.tween(this.hitSprite.node)
            .to(0.2, { scale: 5 })
            .to(0.5, { scale: 1 })
            .call(() => {
                this.playOver();
            })
            .start();
    }

    /**一次游戏结束 */
    private playOver() {
        setTimeout(() => {
            this.isPlaying = false;
            if (this.remainCount === 0) {
                SlotGame.removeSlotGame();
            }
        }, 1000);
    }
}
