import Game from "./Game";
import Info from "./Info";
import Module from "./common/Module";




const { ccclass, property } = cc._decorator;

let beeNumColors = [cc.Color.GREEN, cc.Color.YELLOW, cc.Color.RED];

/**单个格子 */
@ccclass
export default class Grid extends cc.Component {

    @property(cc.Node)
    beeNode: cc.Node = null;

    @property(cc.Node)
    noBeeNode: cc.Node = null;

    @property(cc.Label)
    beeNumLabel: cc.Label = null;

    @property(cc.Node)
    markNode: cc.Node = null;

    @property(cc.Node)
    coverNode: cc.Node = null;

    /**周围蜜蜂个数 */
    public get beeNum(): number {
        return this._beeNum;
    }
    private _beeNum: number = 0;
    public set beeNum(v: number) {
        this._beeNum = v;
        this.beeNumLabel.string = v === 0 ? `` : v.toString();
        let color = beeNumColors[Math.floor((v - 0.5) / 2)];
        if (color) this.beeNumLabel.node.color = color;
    }

    /**是否有蜜蜂 */
    public get isBee(): boolean {
        return this._isBee;
    };
    private _isBee: boolean = false;
    public set isBee(v: boolean) {
        this._isBee = v;
        this.beeNode.active = v;
        this.noBeeNode.active = !v;
    }

    /**是否已打开 */
    public get isOpen(): boolean {
        return this._isOpen;
    };
    private _isOpen: boolean = false;
    public set isOpen(v: boolean) {
        this._isOpen = v;
        this.coverNode.active = !v;
        v && this.hideMark();
    }

    private isMark: boolean = false;
    /**格子坐标 x:列 y:行 （0行0列开始）*/
    public idx: number = 0;
    public idy: number = 0;
    private Game: Game = null;
    private Info: Info = null;


    protected onLoad(): void {
        this.Game = Module.get(Game);
        this.Info = Module.get(Info);
        this.coverNode.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.coverNode.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.coverNode.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancle, this);
    }

    private onTouchStart() {
        if (!this.Game.canPlay) return;
        this.Game.isLongTouch = false;
        this.scheduleOnce(this.touchTimer, 1);
    }

    private touchTimer() {
        this.Game.isLongTouch = true;
        this.onLongTouch();
    }

    private onTouchEnd() {
        if (!this.Game.canPlay) return;
        if (!this.Game.isStartPlay) {
            this.Game.isStartPlay = true;
            this.Info.startClock();
        }
        if (!this.Game.isLongTouch) {
            this.unschedule(this.touchTimer);
            this.onShortTouch();
        }
    }

    private onTouchCancle() {
        if (!this.Game.canPlay) return;
        this.unschedule(this.touchTimer);
    }

    /**判定为长按 */
    private onLongTouch() {
        this.isMark ? this.hideMark() : this.showMark();
    }

    /**判定为单次点击 */
    private onShortTouch() {
        if (this.isOpen) return;
        this.isOpen = true;
        this.Game.openGridNum++;
        if (this.isBee) this.Game.gameOver(false);
        this.Game.checkGameOverWin();
    }

    /**创建格子时初始化一次 */
    public init(i: number, j: number) {
        this.idx = i;
        this.idy = j;
    }

    /**获取格子宽度 */
    public getGridWidth(): number {
        return this.coverNode.width;
    }

    /**重置格子状态 */
    public reset() {
        this.isOpen = false;
        this.isBee = false;
        this.hideMark();
    }

    private showMark() {
        if (this.isOpen) return;
        this.isMark = true;
        this.markNode.active = true;
    }

    private hideMark() {
        this.isMark = false;
        this.markNode.active = false;
    }

}
