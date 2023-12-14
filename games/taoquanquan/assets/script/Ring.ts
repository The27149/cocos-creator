import Game from "./Game";
import SoundMgr from "./SoundMgr";
import { COLOR, COLOR_TYPE, SoundPath } from "./common/Global";
import Module from "./common/Module";
import Utils from "./common/Utils";





const { ccclass, property } = cc._decorator;

/**单个圆环 */
@ccclass
export default class Ring extends cc.Component {

    /**拖拽选中的环 */
    static selected: Ring = null;

    @property(cc.Node)
    circleContainer: cc.Node = null;

    @property(cc.Node)
    touchLayer: cc.Node = null;

    /**是否能拖拽 */
    private canDrag: boolean = false;
    /**是否能叠加 */
    private canBlend: boolean = false;
    private Game: Game = null;


    /**圆圈列表的颜色 【大， 中， 小】 */
    public circleList: COLOR_TYPE[] = [COLOR_TYPE.NONE, COLOR_TYPE.NONE, COLOR_TYPE.NONE];
    protected onLoad(): void {
        this.Game = Module.get(Game);
        this.addEvents();
    }

    private addEvents() {
        this.touchLayer.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.touchLayer.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    }

    public reset(): void {
        this.circleList[0] = this.circleList[1] = this.circleList[2] = COLOR_TYPE.NONE;
        this.updateUI();
    }

    public initAsBlend() {
        this.canBlend = true;
        this.canDrag = false;
        this.reset();
    }

    public initAsDrag() {
        this.canBlend = false;
        this.canDrag = true;
        this.createCircles();
        this.updateUI();
    }

    private onTouchMove(e: cc.Event.EventTouch) {
        if (!this.canDrag) return;
        if (!Ring.selected) Ring.selected = this;
        let pos = Ring.selected.node.parent.convertToNodeSpaceAR(e.getLocation());
        Ring.selected.node.setPosition(pos);
    }

    private onTouchEnd(e: cc.Event.EventTouch) {
        if (!this.canDrag) return;
        if (!Ring.selected) return;
        let targetRing = this.getBlendTarget();
        if (targetRing && targetRing.blendSelf(Ring.selected)) {
            Module.get(SoundMgr).playEffect(SoundPath.blend);
            this.Game.ringFactory.put(Ring.selected.node);
            Ring.selected = null;
            this.Game.checkEliminate();
            this.Game.createDragRing();
            this.Game.checkGameOver();
        } else {
            Ring.selected.node.setPosition(0, 0);
        }

    }

    /**获取一个靠近拖拽环附近的固定环 */
    private getBlendTarget(): Ring {
        if (!Ring.selected) return;
        let v2 = cc.v2(),
            world1 = Ring.selected.node.convertToWorldSpaceAR(v2);
        for (let ring of this.Game.ringList) {
            if (!ring.canBlend) continue;
            let world2 = ring.node.convertToWorldSpaceAR(v2);
            let s = Utils.getDistance(world1, world2);
            if (s <= ring.getTouchSize()) {
                return ring;
            }
        }
        return null;
    }

    /**获取触摸半径 */
    private getTouchSize(): number {
        return this.touchLayer.width / 2;
    }

    /**两个环组合叠加 */
    private blendSelf(ring: Ring): boolean {
        let canBlend = this.Game.checkBlend(this, ring);
        if (!canBlend) return false;
        this.circleList.forEach((item, idx) => {
            this.circleList[idx] = item + ring.circleList[idx];
        })
        this.updateUI();
        return true;
    }

    public updateUI() {
        // Utils.log(`当前圆圈颜色排列 大中小：`, this.circleList, this.Game.ringList);
        this.circleContainer.children.forEach((node, idx) => {
            let colorType = this.circleList[idx];
            if (colorType === COLOR_TYPE.NONE) {
                node.opacity = 1;
            } else {
                node.color = COLOR[colorType];
                node.opacity = 255;
            }
        })

    }

    /**随机生成各个圆圈 */
    private createCircles() {
        let num = Math.random() > 0.7 ? 2 : 1;
        let allSizeList = [0, 1, 2];
        let sizeList = Utils.randomFromArray(allSizeList, num);
        for (let i = 0; i < 3; i++) {
            if (sizeList.includes(i)) {
                this.circleList[i] = Utils.randomFromArray(this.Game.ringColors)[0];
                // this.circleList[i] = 2;
            } else {
                this.circleList[i] = COLOR_TYPE.NONE;
            }
        }
    }

    /**是否三个环颜色相同 */
    public isSameColor(): boolean {
        let first = this.circleList[0];
        if (first === COLOR_TYPE.NONE) return false;
        return this.circleList.every(item => item === first);
    }

    /**消除色圈 */
    public eliminateCircle(colors: COLOR_TYPE[]) {
        this.circleList.forEach((item, idx) => {
            if (colors.includes(item)) {
                this.circleList[idx] = COLOR_TYPE.NONE;
                this.Game.score += 1;
            }
        })
        this.updateUI();
    }

    /**获取一个圈的颜色 */
    public getCircleColor(idx: number): COLOR_TYPE {
        return this.circleList[idx];
    }

    /**整个环是否包含某个颜色 */
    public isIncludeColor(colorType: COLOR_TYPE): boolean {
        return this.circleList.includes(colorType);
    }

}
