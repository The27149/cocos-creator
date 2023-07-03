
const { ccclass } = cc._decorator;

@ccclass
export class Global {
    private static _ins: Global = null;
    public static get ins(): Global {
        if (!this._ins) this._ins = new Global();
        return this._ins;
    }

    static isDebug: boolean = true;
    static gridTypes: number[] = [1, 2, 3, 4, 5];

    /**是否能刷新格子 */
    public canfreshGrids: boolean = false;

}


/**常量定义 */
export const GConst = {
    gridDisappearTime: 0.5,
    gridMoveTime: 0.3,
    topScoreStorage: 'topScoreStorage',
}

/**资源路径 */
export const ResPath = {
    faceRootPath: 'texture/grid/',          //格子图片根路径
}

/**声音路径 */
export const SoundPath = {
    button: `sound/button`,
}

/**格子移动方向标识 */
export enum MOVE_DIRECTION {
    left,
    down
}

/**任务接口 */
export interface ITask {
    type?: number;
    count: number;
    reward: number
}
