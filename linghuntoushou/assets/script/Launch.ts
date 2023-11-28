
import CoinMgr from "./CoinMgr";
import Game from "./Game";
import SoundMgr from "./SoundMgr";
import EventMgr from "./common/EventMgr";
import { GConst, GEvent } from "./common/Global";
import Module from "./common/Module";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Launch extends Module {

    @property(cc.Button)
    startBtn: cc.Button = null;

    @property(cc.Label)
    starLabel: cc.Label = null;

    @property(cc.Button)
    shopBtn: cc.Button = null;

    private canStart: boolean = true;

    protected onLoad(): void {
        this.startBtn.node.on('click', this.onClickStartBtn, this);
        this.shopBtn.node.on(`click`, this.onOpenShop, this);
        EventMgr.ins.on(GEvent.coinChanged, this.onCoinChanged, this);
        this.updateStar(CoinMgr.ins.getCoin());
    }

    protected onDestroy(): void {
        EventMgr.ins.off(GEvent.coinChanged, this.onCoinChanged, this);
    }

    private onClickStartBtn() {
        Module.get(SoundMgr).playBtnSound();
        if (!this.canStart) return;
        this.hide();
        Module.get(Game).show();
    }

    private onOpenShop() {
        Module.get(SoundMgr).playBtnSound();
        this.addShopView();
    }

    public hide() {
        this.canStart = false;
        this.node.runAction(cc.fadeOut(1));
        setTimeout(() => {
            this.node.active = false;
        }, 1000);
    }

    public show() {
        this.node.active = true;
        this.node.runAction(cc.fadeIn(1));
        setTimeout(() => {
            this.canStart = true;
        }, 1000);
    }

    private updateStar(num: number) {
        this.starLabel.string = num.toString();
    }

    private onCoinChanged() {
        let num = CoinMgr.ins.getCoin();
        this.updateStar(num);
    }

    private addShopView() {
        let bundle = cc.assetManager.getBundle(GConst.customCompBundle);
        bundle.load(`shop/prefab/Shop`, cc.Prefab, (err, pre: cc.Prefab) => {
            if (!err) {
                let node = cc.instantiate(pre);
                node.parent = this.node;
            }
        })
    }
}
