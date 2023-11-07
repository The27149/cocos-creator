

const { ccclass } = cc._decorator;

/**屏幕手柄管理器 */
@ccclass
export default class ScreenHandle {
    private static _instance: ScreenHandle = null;
    public static get instance(): ScreenHandle {
        if (!this._instance) this._instance = new ScreenHandle();
        return this._instance;
    }

    /**是否激活本模块 */
    public active: boolean = false;

    /**启用屏幕手柄 并初始化 */
    public init() {

    }


}
