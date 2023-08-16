import Ring from "../Ring";

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
    changeSceneTime: 0.8,
}

/**资源路径 */
export const ResPath = {
    ballRootPath: 'texture/ball/',          //图片根路径
}

/**声音路径 */
export const SoundPath = {
    button: `sound/button`,
    blend: `sound/blend`,
    eliminate: `sound/eliminate`,
}

/**圆环类型 */
export enum COLOR_TYPE {
    NONE,
    RED,
    ORANGE,
    YELLOW,
    BLUE,
    PURPLE,
}

export const COLOR: { [key: number]: cc.Color } = {
    [COLOR_TYPE.NONE]: cc.color().fromHEX(`#ffffff`),
    [COLOR_TYPE.RED]: cc.color().fromHEX(`#ff3737`),
    [COLOR_TYPE.ORANGE]: cc.color().fromHEX(`#ff682d`),
    [COLOR_TYPE.YELLOW]: cc.color().fromHEX(`#ffc937`),
    [COLOR_TYPE.BLUE]: cc.color().fromHEX(`#37a8ff`),
    [COLOR_TYPE.PURPLE]: cc.color().fromHEX(`#e476ff`),
}

/**消除线 */
export interface ILINE {
    lineId: number,
    rings: number[],
    colors: COLOR_TYPE[]
}

/**消除线配置
 * {
        id: 线id,
        type: 线类型（1： 连线；2：单个环）,
        rings: 环列表
    }
 */
export const lineConfig = [
    {
        id: 1,
        type: 1,
        ringsIdx: [1, 2, 3]
    },
    {
        id: 2,
        type: 1,
        ringsIdx: [4, 5, 6]
    },
    {
        id: 3,
        type: 1,
        ringsIdx: [7, 8, 9]
    },
    {
        id: 4,
        type: 1,
        ringsIdx: [1, 4, 7]
    },
    {
        id: 5,
        type: 1,
        ringsIdx: [2, 5, 8]
    },
    {
        id: 6,
        type: 1,
        ringsIdx: [3, 6, 9]
    },
    {
        id: 7,
        type: 1,
        ringsIdx: [1, 5, 9]
    },
    {
        id: 8,
        type: 1,
        ringsIdx: [3, 5, 7]
    },
    {
        id: 9,
        type: 2,
        ringsIdx: [1]
    },
    {
        id: 10,
        type: 2,
        ringsIdx: [2]
    },
    {
        id: 11,
        type: 2,
        ringsIdx: [3]
    },
    {
        id: 12,
        type: 2,
        ringsIdx: [4]
    },
    {
        id: 13,
        type: 2,
        ringsIdx: [5]
    },
    {
        id: 14,
        type: 2,
        ringsIdx: [6]
    },
    {
        id: 15,
        type: 2,
        ringsIdx: [7]
    },
    {
        id: 16,
        type: 2,
        ringsIdx: [8]
    },
    {
        id: 17,
        type: 2,
        ringsIdx: [9]
    },

];
