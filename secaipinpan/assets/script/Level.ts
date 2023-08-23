import { GConst, IGridBtn } from "./common/Global";
import Utils from "./common/Utils";

const { ccclass, property } = cc._decorator;

/**关卡元素 最大五行六列 */
export interface ILevelElement {
    row: number,
    col: number,
    /**插槽 [[横0竖1， 下标(从1开始)，type(1-7)]] */
    slot?: number[][],
    /**操作次数，可以根据次数随机生成order */
    opNum?: number,
    /**刷新序列，值为插槽的下标序列 从0开始 */
    order?: number[]
}

/**关卡设计 */
@ccclass
export default class Level {
    private static _ins: Level = null;
    public static get ins(): Level {
        if (!this._ins) this._ins = new Level();
        this._ins.init();
        return this._ins;
    }
    //总配置表
    private configList: ILevelElement[] = [];
    private levelNum: number = 100;


    /**获取一关的配置 */
    public getConfig(level: number): ILevelElement {
        return this.configList[level - 1];
    }

    /**获取关卡数 */
    public getLevelSize(): number {
        return this.configList.length;
    }

    /**由行列自动生成卡槽 */
    private creatSlot(row: number, col: number): number[][] {
        let list = [];
        let range = GConst.gridBtnTypeRange;
        for (let i = 0; i < row; i++) {
            let type = Utils.randomInt(range[0], range[1]);
            let rowList = [0, i + 1, type];
            list.push(rowList);
        }
        for (let j = 0; j < col; j++) {
            let type = Utils.randomInt(range[0], range[1]);
            let colList = [1, j + 1, type];
            list.push(colList);
        }
        return list;
    }

    private init() {
        this.configList = [
            {
                row: 3,
                col: 3,
                slot: [
                    [1, 1, 1],
                    [1, 3, 1]
                ],
                order: [0, 1]
            },
            {
                row: 3,
                col: 4,
                slot: [
                    [1, 2, 2],
                    [1, 4, 2],
                    [0, 2, 1],

                ],
                order: [0, 1, 2]
            },
            {
                row: 4,
                col: 4,
                slot: [
                    [1, 1, 1],
                    [1, 2, 2],
                    [1, 3, 3],
                    [1, 4, 4],
                    [0, 1, 1],
                    [0, 2, 2],
                    [0, 3, 1],
                    [0, 4, 2],
                ],
                opNum: 8,
            },
        ];

        for (let i = 0; i < this.levelNum; i++) {
            let config = this.configList[i];
            if (!config) {
                config = {
                    row: Utils.randomInt(4, GConst.rowMax),
                    col: Utils.randomInt(4, GConst.colMax),
                    opNum: Math.min(i + 5, 20),
                };
                this.configList.push(config);
            }
            let row = config.row,
                col = config.col;

            /**自动生成全部卡槽点 */
            if (!config.slot || config.slot.length === 0) {
                config.slot = this.creatSlot(row, col);
            }

            //自动生成操作序列
            if (config.opNum > 0) {
                config.order = [];
                let idxMax = config.slot.length - 1;
                for (let i = 0; i < config.opNum; i++) {
                    let idx = Utils.randomInt(0, idxMax);
                    if (idx === config.order[0]) {
                        idx--;
                        continue;
                    } else {
                        config.order.unshift(idx);
                    }
                }
            }
        }
    }


}
