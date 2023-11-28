"use strict";
cc._RF.push(module, '4e160jp+utJt5rBZ4OaEV1e', 'Clock');
// script/Clock.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLOCK_UIMODE = void 0;
var ccclass = cc._decorator.ccclass;
/**计时器显示模式 */
var CLOCK_UIMODE;
(function (CLOCK_UIMODE) {
    CLOCK_UIMODE[CLOCK_UIMODE["none"] = 0] = "none";
    CLOCK_UIMODE[CLOCK_UIMODE["showPassed"] = 1] = "showPassed";
    CLOCK_UIMODE[CLOCK_UIMODE["showRemain"] = 2] = "showRemain"; //显示剩余时间
})(CLOCK_UIMODE = exports.CLOCK_UIMODE || (exports.CLOCK_UIMODE = {}));
/**计时器 */
var Clock = /** @class */ (function () {
    function Clock() {
        this.viewMode = CLOCK_UIMODE.none;
        this.progress = null;
        this.timeLabel = null;
        this.isRunAtBack = false;
        this.cellTime = 0;
        this.endCall = null;
        /**总计时 */
        this.totalTime = 10;
        /**当前累计时间 */
        this._curTime = 0;
    }
    Object.defineProperty(Clock.prototype, "curTime", {
        get: function () {
            return this._curTime;
        },
        set: function (v) {
            if (v < 0)
                v = 0;
            if (v > this.totalTime)
                v = this.totalTime;
            this._curTime = v;
            if (this.viewMode !== CLOCK_UIMODE.none) {
                this.updateView();
            }
        },
        enumerable: false,
        configurable: true
    });
    /**初始化计时器 */
    Clock.prototype.init = function (param) {
        var _a, _b, _c;
        cc.director.getScheduler().enableForTarget(this);
        this.totalTime = param.totalTime;
        this.curTime = (_a = param.curTime) !== null && _a !== void 0 ? _a : 0;
        this.isRunAtBack = (_b = param.isRunAtBack) !== null && _b !== void 0 ? _b : false;
        this.cellTime = (_c = param.cellTime) !== null && _c !== void 0 ? _c : 0.05;
        this.endCall = param.endCall;
        this.viewMode = CLOCK_UIMODE.none;
        return this;
    };
    /**初始化计时器ui */
    Clock.prototype.initView = function (param) {
        var _a;
        this.viewMode = (_a = param.viewMode) !== null && _a !== void 0 ? _a : CLOCK_UIMODE.none;
        this.progress = param.progress;
        this.timeLabel = param.timeLabel;
        this.reset();
        return this;
    };
    /**重置计时 */
    Clock.prototype.reset = function (total) {
        this.stop();
        if (total)
            this.totalTime = total;
        this.curTime = 0;
        return this;
    };
    /**开启定时器 */
    Clock.prototype.start = function () {
        cc.director.getScheduler().schedule(this.step, this, this.cellTime);
    };
    /**停止定时器 */
    Clock.prototype.stop = function () {
        cc.director.getScheduler().unschedule(this.step, this);
    };
    /**计时器执行内容 */
    Clock.prototype.step = function () {
        this.curTime += this.cellTime;
        if (this.curTime >= this.totalTime) {
            this.stop();
            this.endCall && this.endCall();
        }
    };
    /**更新计时视图 */
    Clock.prototype.updateView = function () {
        var val = 0;
        switch (this.viewMode) {
            case CLOCK_UIMODE.showPassed:
                val = this.curTime;
                break;
            case CLOCK_UIMODE.showRemain:
                val = this.totalTime - this.curTime;
                break;
        }
        if (this.timeLabel) {
            var intStr = Math.floor(val).toString();
            if (this.timeLabel.string !== intStr) {
                this.timeLabel.string = intStr;
            }
        }
        if (this.progress) {
            var r = val / this.totalTime;
            this.progress.progress = r;
        }
    };
    Clock = __decorate([
        ccclass
    ], Clock);
    return Clock;
}());
exports.default = Clock;

cc._RF.pop();