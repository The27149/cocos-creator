

const { ccclass, property } = cc._decorator;

@ccclass
export default class SlotConfig {
    private static _ins: SlotConfig = null;
    public static get ins(): SlotConfig {
        if (!this._ins) this._ins = new SlotConfig();
        return this._ins;
    }
    private constructor() { }

    public readonly row: number = 3;
    public readonly col: number = 3;
    public readonly gridWidth: number = 100;
    public readonly gridHeight: number = 100;
    public readonly gridSpacingX: number = 70;
    public readonly gridSpacingY: number = 5;
    /**slotGame预制路径 */
    public readonly slotGamePrePath: string = `slotGame/prefab/SlotGame`;
    /**格子预制路径 */
    public readonly gridPrePath: string = `slotGame/prefab/SlotGrid`;
    /**格子图片路径 */
    public readonly gridSpPath: string = `slotGame/texture/grid/*`;
    /**滚动方向1: 上    -1：下 */
    public readonly rollDirection: number = -1;
    /**匀速阶段滚动速率 */
    public readonly rollSpeed: number = 1500;
    /**滚动阶段时长 s [渐快，匀速，渐慢] */
    public readonly rollStage: number[] = [0.5, 1, 0.5];
    /**格子元素种类*/
    public readonly gridDataSize: number = 3;
    /**滚轴启动时间间隔 ms*/
    public readonly rollerStartGap: number = 200;
    /**默认滚动次数*/
    public readonly totalPlayCount: number = 3;


}
