
import Utils from "../../../script/common/Utils";
import SlotConfig from "./SlotConfig";


const { ccclass, property } = cc._decorator;

@ccclass
export default class SlotGrid extends cc.Component {

    @property(cc.Sprite)
    skin: cc.Sprite = null;

    /**格子数据 */
    public data: number = 1;

    public setData(data: number) {
        if (data <= 0) return;
        this.data = data;
        let path = SlotConfig.ins.gridSpPath.replace(`*`, `${data}`);
        Utils.dynamicSprite(this.skin, path);
    }

}
