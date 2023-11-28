
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Clock.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxDbG9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUSxJQUFBLE9BQU8sR0FBSyxFQUFFLENBQUMsVUFBVSxRQUFsQixDQUFtQjtBQUVsQyxhQUFhO0FBQ2IsSUFBWSxZQUlYO0FBSkQsV0FBWSxZQUFZO0lBQ3BCLCtDQUFJLENBQUE7SUFDSiwyREFBVSxDQUFBO0lBQ1YsMkRBQVUsQ0FBQSxDQUFFLFFBQVE7QUFDeEIsQ0FBQyxFQUpXLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBSXZCO0FBa0JELFNBQVM7QUFFVDtJQUFBO1FBQ1ksYUFBUSxHQUFpQixZQUFZLENBQUMsSUFBSSxDQUFDO1FBQzNDLGFBQVEsR0FBbUIsSUFBSSxDQUFDO1FBQ2hDLGNBQVMsR0FBYSxJQUFJLENBQUM7UUFHM0IsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0IsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixZQUFPLEdBQWEsSUFBSSxDQUFDO1FBQ2pDLFNBQVM7UUFDRCxjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQy9CLFlBQVk7UUFDSixhQUFRLEdBQVcsQ0FBQyxDQUFDO0lBb0ZqQyxDQUFDO0lBbkZHLHNCQUFZLDBCQUFPO2FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7YUFDRCxVQUFvQixDQUFTO1lBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUztnQkFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUMzQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztZQUNsQixJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssWUFBWSxDQUFDLElBQUksRUFBRTtnQkFDckMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ3JCO1FB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RTtnQkFDbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2FBQ2xDO1NBQ0o7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7U0FDOUI7SUFDTCxDQUFDO0lBOUZnQixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBZ0d6QjtJQUFELFlBQUM7Q0FoR0QsQUFnR0MsSUFBQTtrQkFoR29CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbi8qKuiuoeaXtuWZqOaYvuekuuaooeW8jyAqL1xyXG5leHBvcnQgZW51bSBDTE9DS19VSU1PREUge1xyXG4gICAgbm9uZSwgICAgICAgLy/msqHmnIl1aVxyXG4gICAgc2hvd1Bhc3NlZCwgLy/mmL7npLrntK/orqHml7bpl7RcclxuICAgIHNob3dSZW1haW4gIC8v5pi+56S65Ymp5L2Z5pe26Ze0XHJcbn1cclxuXHJcbi8qKuiuoeaXtuWZqOWPguaVsCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDbG9ja1BhcmFtIHtcclxuICAgIHRvdGFsVGltZTogbnVtYmVyOyAgICAgIC8v5oC75pe26Ze0XHJcbiAgICBjdXJUaW1lPzogbnVtYmVyOyAgICAgICAvL+W9k+WJjee0r+iuoeaXtumXtFxyXG4gICAgaXNSdW5BdEJhY2s/OiBmYWxzZTsgICAgLy/mmK/lkKbog73lnKjlkI7lj7Dov5DooYxcclxuICAgIGNlbGxUaW1lPzogbnVtYmVyOyAgICAgICAvL+WPmOWMlumil+eykuW6piDpu5jorqQwLjA1c1xyXG4gICAgZW5kQ2FsbD86IEZ1bmN0aW9uOyAgICAgIC8v57uT5p2f5Zue6LCDXHJcbn1cclxuXHJcbi8qKuiuoeaXtuWZqHVpICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNsb2NrVmlldyB7XHJcbiAgICB2aWV3TW9kZT86IENMT0NLX1VJTU9ERTsgICAvL+aYvuekuuaooeW8j1xyXG4gICAgcHJvZ3Jlc3M/OiBjYy5Qcm9ncmVzc0JhcjsgIC8v6L+b5bqm5p2hXHJcbiAgICB0aW1lTGFiZWw/OiBjYy5MYWJlbDtcclxufVxyXG5cclxuLyoq6K6h5pe25ZmoICovXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsb2NrIHtcclxuICAgIHByaXZhdGUgdmlld01vZGU6IENMT0NLX1VJTU9ERSA9IENMT0NLX1VJTU9ERS5ub25lO1xyXG4gICAgcHJpdmF0ZSBwcm9ncmVzczogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB0aW1lTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBpc1J1bkF0QmFjazogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBjZWxsVGltZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgZW5kQ2FsbDogRnVuY3Rpb24gPSBudWxsO1xyXG4gICAgLyoq5oC76K6h5pe2ICovXHJcbiAgICBwcml2YXRlIHRvdGFsVGltZTogbnVtYmVyID0gMTA7XHJcbiAgICAvKirlvZPliY3ntK/orqHml7bpl7QgKi9cclxuICAgIHByaXZhdGUgX2N1clRpbWU6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGdldCBjdXJUaW1lKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1clRpbWU7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHNldCBjdXJUaW1lKHY6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh2IDwgMCkgdiA9IDA7XHJcbiAgICAgICAgaWYgKHYgPiB0aGlzLnRvdGFsVGltZSkgdiA9IHRoaXMudG90YWxUaW1lO1xyXG4gICAgICAgIHRoaXMuX2N1clRpbWUgPSB2O1xyXG4gICAgICAgIGlmICh0aGlzLnZpZXdNb2RlICE9PSBDTE9DS19VSU1PREUubm9uZSkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5Yid5aeL5YyW6K6h5pe25ZmoICovXHJcbiAgICBwdWJsaWMgaW5pdChwYXJhbTogSUNsb2NrUGFyYW0pOiBDbG9jayB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NoZWR1bGVyKCkuZW5hYmxlRm9yVGFyZ2V0KHRoaXMpO1xyXG4gICAgICAgIHRoaXMudG90YWxUaW1lID0gcGFyYW0udG90YWxUaW1lO1xyXG4gICAgICAgIHRoaXMuY3VyVGltZSA9IHBhcmFtLmN1clRpbWUgPz8gMDtcclxuICAgICAgICB0aGlzLmlzUnVuQXRCYWNrID0gcGFyYW0uaXNSdW5BdEJhY2sgPz8gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jZWxsVGltZSA9IHBhcmFtLmNlbGxUaW1lID8/IDAuMDU7XHJcbiAgICAgICAgdGhpcy5lbmRDYWxsID0gcGFyYW0uZW5kQ2FsbDtcclxuICAgICAgICB0aGlzLnZpZXdNb2RlID0gQ0xPQ0tfVUlNT0RFLm5vbmU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5Yid5aeL5YyW6K6h5pe25ZmodWkgKi9cclxuICAgIHB1YmxpYyBpbml0VmlldyhwYXJhbTogSUNsb2NrVmlldyk6IENsb2NrIHtcclxuICAgICAgICB0aGlzLnZpZXdNb2RlID0gcGFyYW0udmlld01vZGUgPz8gQ0xPQ0tfVUlNT0RFLm5vbmU7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IHBhcmFtLnByb2dyZXNzO1xyXG4gICAgICAgIHRoaXMudGltZUxhYmVsID0gcGFyYW0udGltZUxhYmVsO1xyXG4gICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKirph43nva7orqHml7YgKi9cclxuICAgIHB1YmxpYyByZXNldCh0b3RhbD86IG51bWJlcik6IENsb2NrIHtcclxuICAgICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgICBpZiAodG90YWwpIHRoaXMudG90YWxUaW1lID0gdG90YWw7XHJcbiAgICAgICAgdGhpcy5jdXJUaW1lID0gMDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKirlvIDlkK/lrprml7blmaggKi9cclxuICAgIHB1YmxpYyBzdGFydCgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2hlZHVsZXIoKS5zY2hlZHVsZSh0aGlzLnN0ZXAsIHRoaXMsIHRoaXMuY2VsbFRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuWBnOatouWumuaXtuWZqCAqL1xyXG4gICAgcHVibGljIHN0b3AoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NoZWR1bGVyKCkudW5zY2hlZHVsZSh0aGlzLnN0ZXAsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuiuoeaXtuWZqOaJp+ihjOWGheWuuSAqL1xyXG4gICAgcHJpdmF0ZSBzdGVwKCkge1xyXG4gICAgICAgIHRoaXMuY3VyVGltZSArPSB0aGlzLmNlbGxUaW1lO1xyXG4gICAgICAgIGlmICh0aGlzLmN1clRpbWUgPj0gdGhpcy50b3RhbFRpbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kQ2FsbCAmJiB0aGlzLmVuZENhbGwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5pu05paw6K6h5pe26KeG5Zu+ICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZVZpZXcoKSB7XHJcbiAgICAgICAgbGV0IHZhbDogbnVtYmVyID0gMDtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMudmlld01vZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBDTE9DS19VSU1PREUuc2hvd1Bhc3NlZDpcclxuICAgICAgICAgICAgICAgIHZhbCA9IHRoaXMuY3VyVGltZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENMT0NLX1VJTU9ERS5zaG93UmVtYWluOlxyXG4gICAgICAgICAgICAgICAgdmFsID0gdGhpcy50b3RhbFRpbWUgLSB0aGlzLmN1clRpbWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudGltZUxhYmVsKSB7XHJcbiAgICAgICAgICAgIGxldCBpbnRTdHIgPSBNYXRoLmZsb29yKHZhbCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGltZUxhYmVsLnN0cmluZyAhPT0gaW50U3RyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVMYWJlbC5zdHJpbmcgPSBpbnRTdHI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICAgbGV0IHIgPSB2YWwgLyB0aGlzLnRvdGFsVGltZTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzcy5wcm9ncmVzcyA9IHI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=