

const { ccclass } = cc._decorator;

/**计时器显示模式 */
export enum CLOCK_UIMODE {
    none,       //没有ui
    showPassed, //显示累计时间
    showRemain  //显示剩余时间
}

/**计时器参数 */
export interface IClockParam {
    totalTime: number;      //总时间
    curTime?: number;       //当前累计时间
    isRunAtBack?: false;    //是否能在后台运行
    cellTime?: number;       //变化颗粒度 默认0.05s
    endCall?: Function;      //结束回调
}

/**计时器ui */
export interface IClockView {
    viewMode?: CLOCK_UIMODE;   //显示模式
    progress?: cc.ProgressBar;  //进度条
    timeLabel?: cc.Label;
}

/**计时器 */
@ccclass
export default class Clock {
    private viewMode: CLOCK_UIMODE = CLOCK_UIMODE.none;
    private progress: cc.ProgressBar = null;
    private timeLabel: cc.Label = null;


    private isRunAtBack: boolean = false;
    private cellTime: number = 0;
    private endCall: Function = null;
    /**总计时 */
    private totalTime: number = 10;
    /**当前累计时间 */
    private _curTime: number = 0;
    private get curTime(): number {
        return this._curTime;
    }
    private set curTime(v: number) {
        if (v < 0) v = 0;
        if (v > this.totalTime) v = this.totalTime;
        this._curTime = v;
        if (this.viewMode !== CLOCK_UIMODE.none) {
            this.updateView();
        }
    }

    /**初始化计时器 */
    public init(param: IClockParam): Clock {
        cc.director.getScheduler().enableForTarget(this);
        this.totalTime = param.totalTime;
        this.curTime = param.curTime ?? 0;
        this.isRunAtBack = param.isRunAtBack ?? false;
        this.cellTime = param.cellTime ?? 0.05;
        this.endCall = param.endCall;
        this.viewMode = CLOCK_UIMODE.none;
        return this;
    }

    /**初始化计时器ui */
    public initView(param: IClockView): Clock {
        this.viewMode = param.viewMode ?? CLOCK_UIMODE.none;
        this.progress = param.progress;
        this.timeLabel = param.timeLabel;
        this.reset();
        return this;
    }

    /**重置计时 */
    public reset(total?: number): Clock {
        this.stop();
        if (total) this.totalTime = total;
        this.curTime = 0;
        return this;
    }

    /**开启定时器 */
    public start() {
        cc.director.getScheduler().schedule(this.step, this, this.cellTime);
    }

    /**停止定时器 */
    public stop() {
        cc.director.getScheduler().unschedule(this.step, this);
    }

    /**计时器执行内容 */
    private step() {
        this.curTime += this.cellTime;
        if (this.curTime >= this.totalTime) {
            this.stop();
            this.endCall && this.endCall();
        }
    }

    /**更新计时视图 */
    private updateView() {
        let val: number = 0;
        switch (this.viewMode) {
            case CLOCK_UIMODE.showPassed:
                val = this.curTime;
                break;
            case CLOCK_UIMODE.showRemain:
                val = this.totalTime - this.curTime;
                break;
        }
        if (this.timeLabel) {
            let intStr = Math.floor(val).toString();
            if (this.timeLabel.string !== intStr) {
                this.timeLabel.string = intStr;
            }
        }
        if (this.progress) {
            let r = val / this.totalTime;
            this.progress.progress = r;
        }
    }

}
