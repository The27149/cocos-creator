import LocalData from "./LocalData";

const { ccclass } = cc._decorator;

@ccclass
export class Global {
    private static _ins: Global = null;
    public static get ins(): Global {
        if (!this._ins) this._ins = new Global();
        return this._ins;
    }

    /**本地存储 */
    public localData: LocalData = new LocalData(`game_9011301`);
    public shopPickType: number = 1;            //选中的皮肤

}


/**常量定义 */
export const GConst = {
    gridCreatTime: 0.5,
    gridDisappearTime: 0.5,
    gridMoveTime: 0.3,
    scoreAniTime: 0.5,
    topScoreStorage: 'topScoreStorage',
    customCompBundle: `customComponents`,
}

/**资源路径 */
export const ResPath = {
    faceRootPath: 'texture/grid/',          //格子图片根路径
}

/**声音路径 */
export const SoundPath = {
    bubble: `sound/bubble`,
    button: `sound/button`,
    fresh: `sound/fresh`,
    hitGround: `sound/hitGround`,
    task: `sound/task`,
}

export const GEvent = {
    coinChanged: `coinChanged`,             //金币改动
}


/**节点转换时使用的临时向量组 结构 */
export class Vec2Group {
    public v2: cc.Vec2 = cc.v2();
    public world: cc.Vec2 = cc.v2();
    public local: cc.Vec2 = cc.v2();
}
