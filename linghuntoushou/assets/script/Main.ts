import Game from "./Game";
import Launch from "./Launch";
import { GConst } from "./common/Global";
import Module from "./common/Module";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Main extends cc.Component {


    protected onLoad(): void {
        this.init();
    }

    private async init() {
        await this.loadBundle();
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getCollisionManager().enabled = true;
        // cc.director.getPhysicsManager().debugDrawFlags = 1;
        // cc.director.getCollisionManager().enabledDebugDraw = true;
        // cc.director.getCollisionManager().enabledDrawBoundingBox = true;
        Module.get(Game).hide();
        Module.get(Launch).show();

    }

    private loadBundle() {
        return new Promise<void>((resolve, reject) => {
            cc.assetManager.loadBundle(GConst.customCompBundle, (err, bundle) => {
                if (!err) {
                    resolve();
                } else {
                    reject();
                }
            })
        })
    }
}
