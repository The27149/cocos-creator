
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/customComponents/rank/scriipt/RankData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b1d05Bg4y1Dr79CWx+UiA1m', 'RankData');
// components/rank/scriipt/RankData.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RankData = /** @class */ (function () {
    function RankData() {
        /**rankList */
        this.list = [];
    }
    RankData_1 = RankData;
    Object.defineProperty(RankData, "ins", {
        get: function () {
            if (!this._ins)
                this._ins = new RankData_1();
            return this._ins;
        },
        enumerable: false,
        configurable: true
    });
    RankData.prototype.init = function () {
    };
    var RankData_1;
    RankData._ins = null;
    RankData = RankData_1 = __decorate([
        ccclass
    ], RankData);
    return RankData;
}());
exports.default = RankData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcY29tcG9uZW50c1xccmFua1xcc2NyaWlwdFxcUmFua0RhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQVM1QztJQUNJO1FBT0EsY0FBYztRQUNOLFNBQUksR0FBVSxFQUFFLENBQUM7SUFSRCxDQUFDO2lCQURSLFFBQVE7SUFHekIsc0JBQWtCLGVBQUc7YUFBckI7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7Z0JBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFVBQVEsRUFBRSxDQUFDO1lBQzNDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUtPLHVCQUFJLEdBQVo7SUFFQSxDQUFDOztJQVhjLGFBQUksR0FBYSxJQUFJLENBQUM7SUFGcEIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWU1QjtJQUFELGVBQUM7Q0FmRCxBQWVDLElBQUE7a0JBZm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElSYW5rRGF0YUl0ZW0ge1xyXG4gICAgbmljazogc3RyaW5nXHJcbiAgICBzY29yZTogbnVtYmVyXHJcbiAgICByYW5rOiBudW1iZXJcclxufVxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFua0RhdGEge1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgfVxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luczogUmFua0RhdGEgPSBudWxsO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zKCk6IFJhbmtEYXRhIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lucykgdGhpcy5faW5zID0gbmV3IFJhbmtEYXRhKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lucztcclxuICAgIH1cclxuXHJcbiAgICAvKipyYW5rTGlzdCAqL1xyXG4gICAgcHJpdmF0ZSBsaXN0OiBhbnlbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgaW5pdCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==