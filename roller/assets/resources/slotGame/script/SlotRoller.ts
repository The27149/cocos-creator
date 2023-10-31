
import Module from "../../../script/common/Module";
import Utils from "../../../script/common/Utils";
import SlotConfig from "./SlotConfig";
import SlotGame from "./SlotGame";
import SlotGrid from "./SlotGrid";


const { ccclass, property } = cc._decorator;

@ccclass
export default class SlotRoller extends cc.Component {


    private gridList: SlotGrid[] = [];      //格子列表
    private gridDataList: number[] = [];    //格子数据
    private slotGame: SlotGame = null;      //保存对游戏机的引用
    private rollTop: number = 0;            //滚动的上边界位置
    private rollBottom: number = 0;         //滚动的下边界位置
    private rollDistance: number = 0;       //滚动总距离
    private speed: cc.Vec2 = cc.v2();
    private isRolling: boolean = false;     //开启滚动
    private speedTw: cc.Tween = null;       //速度缓动
    private rollTargetPos: number = 0;      //滚动结束目标位置
    private rollTargetTime: number = 0;     //调整到目标位置时长

    public init() {
        this.slotGame = Module.get(SlotGame);
        this.installGrids();
        this.initSpeedTw();
        this.reset();
    }

    private installGrids() {
        let cfg = SlotConfig.ins;
        let num = cfg.row + 2;
        let unitY = (cfg.gridHeight + cfg.gridSpacingY);
        let y0 = (num - 1) * unitY / 2;
        for (let i = 0; i < num; i++) {
            let node = cc.instantiate(this.slotGame.gridPre);
            node.parent = this.node;
            let y = y0 - unitY * i;
            node.setPosition(0, y);
            let grid = node.getComponent(SlotGrid);
            this.gridList.push(grid);
            let data = Utils.randomInt(1, SlotConfig.ins.gridDataSize);
            grid.setData(data);
            this.gridDataList.push(data);
        }
        this.rollTop = unitY;
        this.rollBottom = -unitY;
        this.rollDistance = this.rollTop - this.rollBottom;
    }

    private reset() {
        this.isRolling = false;
        this.speed.y = 0;
    }

    protected update(dt: number): void {
        if (!this.isRolling) return;
        let dx = this.speed.y * dt;
        let y = this.node.y + dx;
        if (y < this.rollBottom) {
            y += this.rollDistance;
            this.jump(1);
        }
        if (y > this.rollTop) {
            y -= this.rollDistance;
            this.jump(-1);
        };
        this.node.y = y;
    }

    /**更新速度 分段函数 */
    private initSpeedTw() {
        let stage1 = SlotConfig.ins.rollStage[0],
            stage2 = SlotConfig.ins.rollStage[1],
            stage3 = SlotConfig.ins.rollStage[2],
            fixedSpeed = SlotConfig.ins.rollSpeed * SlotConfig.ins.rollDirection,
            adjustSpeed = fixedSpeed / 2;
        this.speedTw = cc.tween(this.speed)
            .to(stage1, { y: fixedSpeed })
            .delay(stage2)
            .to(stage3, { y: adjustSpeed })
            .call(this.rollAdjust.bind(this, adjustSpeed))
            .to(this.rollTargetTime, { y: 0 })
            .call(this.stopRoll.bind(this));
    }

    /**滚到边界后跳跃回到另一边界 */
    private jump(to: number) {
        if (to > 0) {
            //删掉最后两个，从前面插入两个新数据
            this.gridDataList.splice(SlotConfig.ins.row);
            this.gridDataList.unshift(Utils.randomInt(1, SlotConfig.ins.gridDataSize));
            this.gridDataList.unshift(Utils.randomInt(1, SlotConfig.ins.gridDataSize));
        } else {
            //删掉前面两个，从后面插入两个新数据
            this.gridDataList.splice(0, 2);
            this.gridDataList.push(Utils.randomInt(1, SlotConfig.ins.gridDataSize));
            this.gridDataList.push(Utils.randomInt(1, SlotConfig.ins.gridDataSize));
        }
        for (let i = 0; i < this.gridList.length; i++) {
            let grid = this.gridList[i].getComponent(SlotGrid);
            let data = this.gridDataList[i];
            grid.setData(data);
        }
    }

    /**开始滚动 */
    public startRoll() {
        this.isRolling = true;
        this.speedTw.start();
    }

    /**停止滚动 */
    private stopRoll() {
        this.isRolling = false;
        this.speed.y = 0;
        this.node.y = this.rollTargetPos;
        if (this.slotGame.isLastRoller(this)) {
            this.slotGame.allRollerEnd();
        }
    }

    /**滚动停止位置调整 */
    private rollAdjust(speedY: number) {
        let cfg = SlotConfig.ins;
        let unit = cfg.gridHeight + cfg.gridSpacingY;
        let r = this.node.y / unit;
        r = cfg.rollDirection > 0 ? Math.ceil(r) : Math.floor(r);
        this.rollTargetPos = r * unit;
        this.rollTargetTime = Math.abs((this.rollTargetPos - this.node.y) * 2 / speedY);
    }

    /**获取高亮格子 */
    public getFocusGrid(): SlotGrid {
        let target: SlotGrid = null,
            distanceMin: number = -1;
        let gridPos = cc.v2();
        this.gridList.forEach(grid => {
            grid.node.convertToWorldSpaceAR(this.slotGame.v00, gridPos);
            let s = gridPos.subSelf(this.slotGame.worldPos).len();
            if (distanceMin < 0 || s < distanceMin) {
                distanceMin = s;
                target = grid;
            }
        })
        return target;
    }
}
