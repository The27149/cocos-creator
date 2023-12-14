import CoinMgr from "../../../script/CoinMgr";
import { GConst, Global } from "../../../script/common/Global";
import Utils from "../../../script/common/Utils";
import Shop from "./Shop";
import ShopData, { IPropItem } from "./ShopData";


const { ccclass, property } = cc._decorator;

@ccclass
export default class ShopItem extends cc.Component {

    @property(cc.Sprite)
    propSp: cc.Sprite = null;

    @property(cc.Label)
    costLabel: cc.Label = null;

    @property(cc.Node)
    lockNode: cc.Node = null;

    @property(cc.Node)
    pickNode: cc.Node = null;

    private isLock: boolean = false;
    private isPick: boolean = false;
    private data: IPropItem = null;
    private shop: Shop = null;

    protected onLoad(): void {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    }

    private onTouchEnd(e: cc.Event.EventTouch) {
        if (this.isLock) {
            this.buy();
        } else {
            this.pick();
        }
    }

    public init(data: IPropItem, shop: Shop) {
        this.data = data;
        this.shop = shop;
        let path = `shop/texture/ball/lanqiu${data.type}`;
        Utils.dynamicSpriteInBundle(this.propSp, GConst.customCompBundle, path);
        this.costLabel.string = data.cost.toString();
        this.setLock(data.isLock);
        this.setPick(data.isPick);
    }

    private setLock(state: boolean) {
        this.isLock = state;
        this.lockNode.active = state;
        ShopData.ins.setLock(this.data.type, state);
    }

    public setPick(state: boolean) {
        this.isPick = state;
        this.pickNode.active = state;
        ShopData.ins.setPick(this.data.type, state);
        Global.ins.shopPickType = this.data.type;
    }

    private buy() {
        let coin = CoinMgr.ins.getCoin();
        if (coin < this.data.cost) {
            Utils.log(`星星不够，买不了`);
            return;
        } else {
            CoinMgr.ins.changeCoin(-this.data.cost);
            this.setLock(false);
        }
    }

    private pick() {
        if (this.isLock) return;
        this.shop.unPickAll();
        this.setPick(true);
    }

}
