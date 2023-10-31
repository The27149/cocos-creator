import SlotGame from "../resources/slotGame/script/SlotGame";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Main extends cc.Component {

    protected onLoad(): void {
        SlotGame.addSlotGame();
    }
}
