import { ResPath } from "./common/Global";
import Utils from "./common/Utils";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Grid extends cc.Component {

    @property(cc.Sprite)
    skinSprite: cc.Sprite = null;

    public type: number = 0;
    /**行 */
    public row: number = 1;
    /**列 */
    public col: number = 1;

    public reset(i: number, j: number) {
        this.row = ++i;
        this.col = ++j;
        this.updateSkin();
    }

    public updateSkin(type: number = 0) {
        this.type = type;
        let path = ResPath.gridSkinCommon + ResPath.GridSkinPaths[type];
        Utils.dynamicSprite(this.skinSprite, path);
    }

    public getGridWidth(): number {
        return this.skinSprite.node.width;
    }

    public getGridHeight(): number {
        return this.skinSprite.node.height;
    }

}
