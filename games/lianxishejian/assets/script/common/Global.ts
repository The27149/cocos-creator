import LocalData from "./LocalData";

const { ccclass } = cc._decorator;

@ccclass
export class Global {
    private static _ins: Global = null;
    public static get ins(): Global {
        if (!this._ins) this._ins = new Global();
        return this._ins;
    }

    /**视图边界 */
    public viewBorderW: number = 0;
    public viewBorderH: number = 0;

    /**最高分数据 */
    public highestScoreLocal: LocalData = new LocalData(GConst.highestStorage);

}


/**常量定义 */
export const GConst = {
    changeSceneTime: 0.8,   //专场渐显渐隐时间
    arrowNum: 15,       //单局箭的数量
    highestStorage: `highestStorage`,       //最高分key
}

/**资源路径 */
export const ResPath = {
}

/**声音路径 */
export const SoundPath = {
    button: `sound/button`,
    blend: `sound/blend`,
    eliminate: `sound/eliminate`,
    result: `sound/result`,
    shoot: `sound/shoot`,
    hit: `sound/hit`,
}

/**节点转换时使用的临时向量组 结构 */
export class VecGroup {
    public v2: cc.Vec2 = cc.v2();
    public world: cc.Vec2 = cc.v2();
    public local: cc.Vec2 = cc.v2();
}


