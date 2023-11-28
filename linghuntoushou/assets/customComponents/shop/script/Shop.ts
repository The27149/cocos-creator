import SoundMgr from "../../../script/SoundMgr";
import Module from "../../../script/common/Module";
import { NodeFactory } from "../../../script/common/NodeFactory";
import ShopData from "./ShopData";
import ShopItem from "./ShopItem";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Shop extends Module {
    @property(cc.Prefab)
    shopItemPre: cc.Prefab = null;

    @property(cc.Node)
    shopItemContainer: cc.Node = null;

    @property(cc.Button)
    closeBtn: cc.Button = null;

    private itemFactory: NodeFactory = null;
    private shopItemList: ShopItem[] = [];

    protected onLoad(): void {
        this.itemFactory = new NodeFactory().init(this.shopItemPre);
        this.closeBtn.node.on(`click`, this.onClose, this);
    }

    private onClose() {
        Module.get(SoundMgr).playBtnSound();
        this.node.destroy();
    }

    protected onEnable(): void {
        this.initUI();
    }

    private initUI() {
        this.shopItemContainer.removeAllChildren();
        let list = ShopData.ins.getAllProps();
        for (let i = 0; i < list.length; i++) {
            let data = list[i];
            let node = this.itemFactory.get();
            node.parent = this.shopItemContainer;
            let item = node.getComponent(ShopItem);
            item.init(data, this);
            this.shopItemList.push(item);
        }

    }

    public unPickAll() {
        for (let item of this.shopItemList) {
            item.setPick(false);
        }
    }

}
