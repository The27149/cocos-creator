
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/Global.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'da6fef6qh9JsanCBGCab5md', 'Global');
// script/common/Global.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vec2Group = exports.GEvent = exports.SoundPath = exports.ResPath = exports.GConst = exports.Global = void 0;
var LocalData_1 = require("./LocalData");
var ccclass = cc._decorator.ccclass;
var Global = /** @class */ (function () {
    function Global() {
        /**本地存储 */
        this.localData = new LocalData_1.default("game_9011301");
        this.shopPickType = 1; //选中的皮肤
    }
    Global_1 = Global;
    Object.defineProperty(Global, "ins", {
        get: function () {
            if (!this._ins)
                this._ins = new Global_1();
            return this._ins;
        },
        enumerable: false,
        configurable: true
    });
    var Global_1;
    Global._ins = null;
    Global = Global_1 = __decorate([
        ccclass
    ], Global);
    return Global;
}());
exports.Global = Global;
/**常量定义 */
exports.GConst = {
    gridCreatTime: 0.5,
    gridDisappearTime: 0.5,
    gridMoveTime: 0.3,
    scoreAniTime: 0.5,
    topScoreStorage: 'topScoreStorage',
    customCompBundle: "customComponents",
};
/**资源路径 */
exports.ResPath = {
    faceRootPath: 'texture/grid/',
};
/**声音路径 */
exports.SoundPath = {
    bubble: "sound/bubble",
    button: "sound/button",
    fresh: "sound/fresh",
    hitGround: "sound/hitGround",
    task: "sound/task",
};
exports.GEvent = {
    coinChanged: "coinChanged",
};
/**节点转换时使用的临时向量组 结构 */
var Vec2Group = /** @class */ (function () {
    function Vec2Group() {
        this.v2 = cc.v2();
        this.world = cc.v2();
        this.local = cc.v2();
    }
    return Vec2Group;
}());
exports.Vec2Group = Vec2Group;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb21tb25cXEdsb2JhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBb0M7QUFFNUIsSUFBQSxPQUFPLEdBQUssRUFBRSxDQUFDLFVBQVUsUUFBbEIsQ0FBbUI7QUFHbEM7SUFBQTtRQU9JLFVBQVU7UUFDSCxjQUFTLEdBQWMsSUFBSSxtQkFBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3JELGlCQUFZLEdBQVcsQ0FBQyxDQUFDLENBQVksT0FBTztJQUV2RCxDQUFDO2VBWFksTUFBTTtJQUVmLHNCQUFrQixhQUFHO2FBQXJCO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO2dCQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxRQUFNLEVBQUUsQ0FBQztZQUN6QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7O0lBSmMsV0FBSSxHQUFXLElBQUksQ0FBQztJQUQxQixNQUFNO1FBRGxCLE9BQU87T0FDSyxNQUFNLENBV2xCO0lBQUQsYUFBQztDQVhELEFBV0MsSUFBQTtBQVhZLHdCQUFNO0FBY25CLFVBQVU7QUFDRyxRQUFBLE1BQU0sR0FBRztJQUNsQixhQUFhLEVBQUUsR0FBRztJQUNsQixpQkFBaUIsRUFBRSxHQUFHO0lBQ3RCLFlBQVksRUFBRSxHQUFHO0lBQ2pCLFlBQVksRUFBRSxHQUFHO0lBQ2pCLGVBQWUsRUFBRSxpQkFBaUI7SUFDbEMsZ0JBQWdCLEVBQUUsa0JBQWtCO0NBQ3ZDLENBQUE7QUFFRCxVQUFVO0FBQ0csUUFBQSxPQUFPLEdBQUc7SUFDbkIsWUFBWSxFQUFFLGVBQWU7Q0FDaEMsQ0FBQTtBQUVELFVBQVU7QUFDRyxRQUFBLFNBQVMsR0FBRztJQUNyQixNQUFNLEVBQUUsY0FBYztJQUN0QixNQUFNLEVBQUUsY0FBYztJQUN0QixLQUFLLEVBQUUsYUFBYTtJQUNwQixTQUFTLEVBQUUsaUJBQWlCO0lBQzVCLElBQUksRUFBRSxZQUFZO0NBQ3JCLENBQUE7QUFFWSxRQUFBLE1BQU0sR0FBRztJQUNsQixXQUFXLEVBQUUsYUFBYTtDQUM3QixDQUFBO0FBR0Qsc0JBQXNCO0FBQ3RCO0lBQUE7UUFDVyxPQUFFLEdBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ3RCLFVBQUssR0FBWSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDekIsVUFBSyxHQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUpBLEFBSUMsSUFBQTtBQUpZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvY2FsRGF0YSBmcm9tIFwiLi9Mb2NhbERhdGFcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBHbG9iYWwge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luczogR2xvYmFsID0gbnVsbDtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGlucygpOiBHbG9iYWwge1xyXG4gICAgICAgIGlmICghdGhpcy5faW5zKSB0aGlzLl9pbnMgPSBuZXcgR2xvYmFsKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lucztcclxuICAgIH1cclxuXHJcbiAgICAvKirmnKzlnLDlrZjlgqggKi9cclxuICAgIHB1YmxpYyBsb2NhbERhdGE6IExvY2FsRGF0YSA9IG5ldyBMb2NhbERhdGEoYGdhbWVfOTAxMTMwMWApO1xyXG4gICAgcHVibGljIHNob3BQaWNrVHlwZTogbnVtYmVyID0gMTsgICAgICAgICAgICAvL+mAieS4reeahOearuiCpFxyXG5cclxufVxyXG5cclxuXHJcbi8qKuW4uOmHj+WumuS5iSAqL1xyXG5leHBvcnQgY29uc3QgR0NvbnN0ID0ge1xyXG4gICAgZ3JpZENyZWF0VGltZTogMC41LFxyXG4gICAgZ3JpZERpc2FwcGVhclRpbWU6IDAuNSxcclxuICAgIGdyaWRNb3ZlVGltZTogMC4zLFxyXG4gICAgc2NvcmVBbmlUaW1lOiAwLjUsXHJcbiAgICB0b3BTY29yZVN0b3JhZ2U6ICd0b3BTY29yZVN0b3JhZ2UnLFxyXG4gICAgY3VzdG9tQ29tcEJ1bmRsZTogYGN1c3RvbUNvbXBvbmVudHNgLFxyXG59XHJcblxyXG4vKirotYTmupDot6/lvoQgKi9cclxuZXhwb3J0IGNvbnN0IFJlc1BhdGggPSB7XHJcbiAgICBmYWNlUm9vdFBhdGg6ICd0ZXh0dXJlL2dyaWQvJywgICAgICAgICAgLy/moLzlrZDlm77niYfmoLnot6/lvoRcclxufVxyXG5cclxuLyoq5aOw6Z+z6Lev5b6EICovXHJcbmV4cG9ydCBjb25zdCBTb3VuZFBhdGggPSB7XHJcbiAgICBidWJibGU6IGBzb3VuZC9idWJibGVgLFxyXG4gICAgYnV0dG9uOiBgc291bmQvYnV0dG9uYCxcclxuICAgIGZyZXNoOiBgc291bmQvZnJlc2hgLFxyXG4gICAgaGl0R3JvdW5kOiBgc291bmQvaGl0R3JvdW5kYCxcclxuICAgIHRhc2s6IGBzb3VuZC90YXNrYCxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFdmVudCA9IHtcclxuICAgIGNvaW5DaGFuZ2VkOiBgY29pbkNoYW5nZWRgLCAgICAgICAgICAgICAvL+mHkeW4geaUueWKqFxyXG59XHJcblxyXG5cclxuLyoq6IqC54K56L2s5o2i5pe25L2/55So55qE5Li05pe25ZCR6YeP57uEIOe7k+aehCAqL1xyXG5leHBvcnQgY2xhc3MgVmVjMkdyb3VwIHtcclxuICAgIHB1YmxpYyB2MjogY2MuVmVjMiA9IGNjLnYyKCk7XHJcbiAgICBwdWJsaWMgd29ybGQ6IGNjLlZlYzIgPSBjYy52MigpO1xyXG4gICAgcHVibGljIGxvY2FsOiBjYy5WZWMyID0gY2MudjIoKTtcclxufVxyXG4iXX0=