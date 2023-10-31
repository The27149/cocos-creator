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

    /**球的颜色 */
    public ballsColor: cc.Color[] = [cc.color().fromHEX(`#db3e3e`), cc.color().fromHEX(`#f0ff00`), cc.color().fromHEX(`#00a2ff`)];

}


/**常量定义 */
export const GConst = {
    changeSceneTime: 0.8,   //专场渐显渐隐时间
    dataLibName: `game_9011001`,    //本地数据名称
    maxLevel: 10,           //最大关卡
}

/**资源路径 */
export const ResPath = {
    mapPreCommon: `prefab/map/map`,     //关卡地图
    propPreCommon: `prefab/prop/`,       //关卡元素
    flagFrameCommon: `texture/flag/`,   //球洞旗子图片
}

/**声音路径 */
export const SoundPath = {
    button: `sound/button`,
    blend: `sound/blend`,
    eliminate: `sound/eliminate`,
    result: `sound/result`,
    shoot: `sound/shoot`,
    hit: `sound/hit`,
    roll: `sound/roll`,
}

/**节点转换时使用的临时向量组 结构 */
export class VecGroup {
    public v2: cc.Vec2 = cc.v2();
    public world: cc.Vec2 = cc.v2();
    public local: cc.Vec2 = cc.v2();
}

/**节点分组 */
export const NodeGroup = {
    ball: `ball`,
    prop: `prop`,
}


