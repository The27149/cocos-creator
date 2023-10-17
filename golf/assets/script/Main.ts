import Game from "./Game";
import Hall from "./Hall";
import { GConst, Global } from "./common/Global";
import Module from "./common/Module";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Main extends Module {

    protected onLoad(): void {
        cc.director.getPhysicsManager().enabled = true;
        // cc.director.getPhysicsManager().debugDrawFlags = 1;
        // cc.director.getCollisionManager().enabled = true;
        // cc.director.getCollisionManager().enabledDebugDraw = true;
        // cc.director.getCollisionManager().enabledDrawBoundingBox = true;

        Global.ins.viewBorderW = cc.view.getDesignResolutionSize().width / 2 + 300;
        Global.ins.viewBorderH = cc.view.getDesignResolutionSize().height / 2 + 300;
    }

    protected start(): void {
        Module.get(Game).init();
        Module.get(Hall).show();
    }

}
