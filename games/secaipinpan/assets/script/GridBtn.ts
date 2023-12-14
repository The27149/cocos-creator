import Grid from "./Grid";
import Slot from "./Slot";
import SoundMgr from "./SoundMgr";
import { Global, ResPath, SoundPath } from "./common/Global";
import Module from "./common/Module";
import Utils from "./common/Utils";


const { ccclass, property } = cc._decorator;

@ccclass
export default class GridBtn extends cc.Component {

    @property(cc.Button)
    gridBtn: cc.Button = null;

    @property(cc.Sprite)
    skinSprite: cc.Sprite = null;

    public type: number = 1;
    public direction: number = 0;
    public idx: number = 1;
    private slot: Slot = null;


    protected onLoad(): void {
        this.addEvent()
    }

    private addEvent() {
        this.gridBtn.node.on(`click`, this.onClick, this);
    }

    private onClick() {
        Module.get(SoundMgr).playEffect(SoundPath.blend);
        if (Global.ins.isFreshing) return;
        this.slot.clickGridBtn(this);
    }

    private updateSkin(type: number) {
        this.type = type;
        let path = ResPath.gridBtnCommon + ResPath.GridBtnPaths[type];
        Utils.dynamicSprite(this.skinSprite, path);
    }

    public reset(direction: number, idx: number, type: number, slot: Slot) {
        this.updateSkin(type);
        this.direction = direction;
        this.idx = idx;
        this.slot = slot;
    }

    public getWidth(): number {
        return this.skinSprite.node.width;
    }

    public getHeight(): number {
        return this.skinSprite.node.height;
    }

}
