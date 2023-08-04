

import Game from "./Game";
import Grid from "./Grid";
import SoundMgr from "./SoundMgr";
import { Global, SoundPath } from "./common/Global";
import Module from "./common/Module";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Prop extends Module {
    @property(cc.Button)
    refreshBtn: cc.Button = null;

    @property(cc.Button)
    exchangeBtn: cc.Button = null;

    @property(cc.Label)
    refreshLabel: cc.Label = null;

    @property(cc.Label)
    exchangeLabel: cc.Label = null;

    @property(cc.Node)
    exchangeSelect: cc.Node = null;

    /**是否使用交换道具 */
    public isUseExchang: boolean = false;
    /**待交换的列表 */
    public exchangeList: Grid[] = [];

    protected onLoad(): void {
        super.onLoad();
        this.refreshBtn.node.on('click', this.onRefresh, this);
        this.exchangeBtn.node.on('click', this.onExchange, this);
    }

    /**新局开始 重置道具 */
    public reset() {
        this.refreshCount = 3;
        this.exchangeCount = 3;
        this.exchangeSelect.active = false
    }

    private onRefresh() {
        Module.get(SoundMgr).playEffect(SoundPath.button);
        if (this.refreshCount <= 0) return;
        Module.get(Game).refreshGrids();
    }

    private onExchange() {
        Module.get(SoundMgr).playEffect(SoundPath.button);
        if (this.exchangeCount <= 0) return;
        if (this.isUseExchang) {
            this.isUseExchang = false;
            this.exchangeSelect.active = false;
        } else {
            this.isUseExchang = true;
            this.exchangeSelect.active = true;
            this.exchangeList.length = 0;
        }
    }

    private _refreshCount: number = 0;
    public get refreshCount(): number {
        return this._refreshCount
    }
    public set refreshCount(v: number) {
        this._refreshCount = v;
        this.refreshLabel.string = v.toString();
    }

    private _exchangeCount: number = 0;
    public get exchangeCount(): number {
        return this._exchangeCount
    }
    public set exchangeCount(v: number) {
        this._exchangeCount = v;
        this.exchangeLabel.string = v.toString();
    }
}
