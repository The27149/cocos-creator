
const { ccclass } = cc._decorator;

@ccclass
export class Global {
    private static _ins: Global = null;
    public static get ins(): Global {
        if (!this._ins) this._ins = new Global();
        return this._ins;
    }

}


/**常量定义 */
export const GConst = {
    changeSceneTime: 0.8,   //专场渐显渐隐时间
    viewBorderW: 960,       //边界距中心距离绝对值
    viewBorderH: 540,
    levelKey: `curLevel`,
    allTankType: [1, 2, 3, 4, 5, 6, 7]  //所有可生成的坦克类型
}

/**资源路径 */
export const ResPath = {
    hpSkinCommon: 'texture/hp/xuetiao_',          //血条图片根路径
    tankSkinCommon: 'texture/tank/tank',          //tank图片根路径
}

/**声音路径 */
export const SoundPath = {
    button: `sound/button`,
    blend: `sound/blend`,
    eliminate: `sound/eliminate`,
}

/**碰撞代理 */
export interface IColliderProxy {
    onCollisionEnter: Function;
}

/**节点分组记录 */
export const GGroup = {
    tank: `tank`,
    bullet: `bullet`,
    ground: `ground`,
}

/**阵营 */
export enum ECAMP {
    self,
    enemy
}

/**节点转换时使用的临时向量组 结构 */
export class NodeConvertVec2s {
    public v2: cc.Vec2 = cc.v2();
    public world: cc.Vec2 = cc.v2();
    public local: cc.Vec2 = cc.v2();
}


