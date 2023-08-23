
const { ccclass } = cc._decorator;

@ccclass
export class Global {
    private static _ins: Global = null;
    public static get ins(): Global {
        if (!this._ins) this._ins = new Global();
        return this._ins;
    }

    /**是否正在刷新动作中 */
    isFreshing: boolean = false;

}


/**常量定义 */
export const GConst = {
    changeSceneTime: 0.8,
    gridBtnTypeRange: [1, 7],
    rowMax: 5,
    colMax: 6,
}

/**资源路径 */
export const ResPath = {
    gridSkinCommon: 'texture/grid/fangge_',          //格子图片根路径
    gridBtnCommon: 'texture/gridBtn/liujiao_',
    GridSkinPaths: [2, 1, 3, 4, 5, 6, 7, 8],
    GridBtnPaths: [null, 1, 3, 4, 5, 6, 7, 8],
}

/**声音路径 */
export const SoundPath = {
    button: `sound/button`,
    blend: `sound/blend`,
    eliminate: `sound/eliminate`,
}

export interface IGridBtn {
    type: number;
    direction: number;
    idx: number;    //位于某行或某列（下标从1开始）
}

