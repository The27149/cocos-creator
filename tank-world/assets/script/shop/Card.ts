import { ResPath } from "../common/Global";
import Module from "../common/Module";
import Utils from "../common/Utils";
import TankData from "../tank/TankData";
import Shop from "./Shop";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Card extends cc.Component {

    @property(cc.Sprite)
    tankSprite: cc.Sprite = null;

    @property(cc.Label)
    costLabel: cc.Label = null;

    @property(cc.Label)
    nameLabel: cc.Label = null;

    public tankType: number = 1;
    public cost: number = 0;
    private tankName: string = ``;
    private disappearTw: cc.Tween = null;

    /**是否可以购买 */
    public canCost: boolean = false;

    protected onLoad(): void {
        this.disappearTw = cc.tween(this.node)
            .set({ scale: 1 })
            .to(0.2, { scale: 0 })
            .set({ scale: 0 })
            .call(() => {
                let shop = Module.get(Shop);
                shop.transportCard(this.node.parent);
                shop.recoverCard(this);
            })
    }

    public reset(type: number) {
        this.tankType = type;
        let data = TankData.ins.get(type);
        this.cost = data.cost;
        this.tankName = data.name;
        // this.tankName = data.nick;
        this.updateUI();
    }

    public disappear() {
        this.disappearTw.start();
    }

    protected update(dt: number): void {
        this.checkGray();
    }

    /**检查是否需要置灰 */
    private checkGray() {
        let shop = Module.get(Shop);
        let isRich = shop.curEnergy >= this.cost;
        // if (this.canCost === isRich) return;
        this.canCost = isRich;
        let sprites = this.node.getComponentsInChildren(cc.Sprite);
        sprites.forEach(sprite => {
            let m = isRich ? shop.normalMaterial : shop.grayMaterial;
            sprite.setMaterial(0, m);
        })
    }

    private updateUI() {
        let path = `${ResPath.tankSkinCommon}${this.tankType}`;
        Utils.dynamicSprite(this.tankSprite, path);
        this.costLabel.string = this.cost.toString();
        this.nameLabel.string = this.tankName;
    }

}
