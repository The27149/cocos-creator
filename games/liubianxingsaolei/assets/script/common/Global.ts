
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
}

/**资源路径 */
export const GResPath = {
}

/**声音路径 */
export const GSoundPath = {
    button: `sound/button`,
    adou: `sound/adou`,
    amazing: `sound/amazing`,
    ao: `sound/ao`,
    bubble: `sound/bubble`,
    ei: `sound/ei`,
    excellent: `sound/excellent`,
    good: `sound/good`,
    great: `sound/great`,
    task: `sound/task`,
    unbelievable: `sound/unbelievable`,
    weiyi: `sound/weiyi`,
}

