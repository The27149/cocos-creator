import SoundMgr from "../SoundMgr";
import CampMgr from "../camp/CampMgr";
import { GConst, SoundPath } from "../common/Global";
import Module from "../common/Module";
import Move from "../common/Move";
import { NodeFactory } from "../common/NodeFactory";
import Utils from "../common/Utils";
import Card from "./Card";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Shop extends Module {

    @property(cc.ProgressBar)
    energyProgress: cc.ProgressBar = null;

    @property(cc.Label)
    energyLabel: cc.Label = null;

    @property(cc.Node)
    cardsContainer: cc.Node = null;

    @property(cc.Node)
    nextCardContainer: cc.Node = null;

    @property(cc.Prefab)
    cardPre: cc.Prefab = null;

    @property(cc.Material)
    normalMaterial: cc.Material = null;

    @property(cc.Material)
    grayMaterial: cc.Material = null;

    private fullEnergy: number = 15;
    public curEnergy: number = 0;
    private energySize: number = this.fullEnergy / 200; //每次充能大小
    private energyGap: number = 0.04;        //每充能一次间隔

    private cardPool: NodeFactory = null;
    private nextCard: Card = null;      //下张牌

    public init() {
        this.nextCardContainer.removeAllChildren();
        this.cardPool = new NodeFactory(this.cardPre);
        this.cardsContainer.children.forEach(cardBtn => {
            cardBtn.removeAllChildren();
            cardBtn.on(`click`, this.onClickCardBtn, this);
        })
    }

    public reset() {
        this.nextCard = this.resetCard(this.nextCardContainer);
        this.resetCards();
        this.startEnergy();
    }

    private onClickCardBtn(button: cc.Button) {
        Module.get(SoundMgr).playEffect(SoundPath.button);
        let card = button.node.getComponentInChildren(Card);
        if (!card) return;
        if (!card.canCost) return;
        this.curEnergy -= card.cost;
        card.disappear();
        CampMgr.ins.getCamp(CampMgr.ins.playerCamp)?.createTank(card.tankType);
    }

    /**更新能量条 */
    private updateEnergy(v: number) {
        if (v < 0) v = 0;
        if (v > this.fullEnergy) v = this.fullEnergy;
        this.curEnergy = v;
        this.energyLabel.string = Math.floor(v).toString();
        let rate = Number((v / this.fullEnergy).toFixed(4));
        this.energyProgress.progress = rate;
    }

    /**开启吸能 */
    private startEnergy() {
        this.stopEnergy();
        this.schedule(this.collectEnergy, this.energyGap);
    }

    /**收集能量 */
    private collectEnergy() {
        if (this.curEnergy === this.fullEnergy) return;
        this.updateEnergy(this.curEnergy + this.energySize);
    }

    /**停止吸能 */
    public stopEnergy() {
        this.unschedule(this.collectEnergy);
    }

    protected update(dt: number): void {

    }

    /**转入下一张牌 */
    transportCard(desNode: cc.Node) {
        let move = Move.getInstance().setParams(this.nextCard.node, this.nextCardContainer, desNode, 200);
        move.run(() => {
            this.nextCard.node.parent = desNode;
            this.nextCard.node.setPosition(0, 0);
            this.nextCard = this.resetCard(this.nextCardContainer);
        })
    }


    /**生成一张卡 */
    private resetCard(parent: cc.Node, tankType?: number): Card {
        let node = parent.children[0];
        if (!node) {
            node = this.cardPool.get();
            node.setScale(1);
            node.parent = parent;
        }
        tankType = tankType ?? Utils.randomFromArray(GConst.allTankType)[0];
        let card = node.getComponent(Card);
        card.reset(tankType);
        return card;
    }

    public recoverCard(card: Card) {
        this.cardPool.put(card.node);
    }

    /**移除所有位置的卡牌 */
    private clearCards(container: cc.Node) {
        while (container.childrenCount > 0) {
            let node = container.children[0].getComponentInChildren(Card).node;
            this.cardPool.put(node);
        }
    }


    /**更新全部待选卡 */
    private resetCards() {
        let typeList = Utils.randomFromArray(GConst.allTankType, this.cardsContainer.childrenCount);
        this.cardsContainer.children.forEach((cardBtn, idx) => {
            let type = typeList[idx];
            this.resetCard(cardBtn, type);
        })
    }

}
