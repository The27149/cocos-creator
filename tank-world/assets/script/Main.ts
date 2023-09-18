import Hall from "./Hall";
import { GConst } from "./common/Global";
import Module from "./common/Module";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Main extends Module {

    protected onLoad(): void {
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getCollisionManager().enabled = true;
        GConst.viewBorderW = cc.view.getDesignResolutionSize().width / 2 + 100;
        GConst.viewBorderH = cc.view.getDesignResolutionSize().height / 2 + 100;
    }

    protected start(): void {
        Module.get(Hall).show();
    }


}
