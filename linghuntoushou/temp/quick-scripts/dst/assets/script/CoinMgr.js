
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/CoinMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '21ac3DcGERFGbSWy50Czk68', 'CoinMgr');
// script/CoinMgr.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var EventMgr_1 = require("./common/EventMgr");
var Global_1 = require("./common/Global");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CoinMgr = /** @class */ (function () {
    function CoinMgr() {
        this.coin = 0;
    }
    CoinMgr_1 = CoinMgr;
    Object.defineProperty(CoinMgr, "ins", {
        get: function () {
            if (!this._ins) {
                this._ins = new CoinMgr_1();
                this._ins.init();
            }
            return this._ins;
        },
        enumerable: false,
        configurable: true
    });
    CoinMgr.prototype.init = function () {
        var num = Global_1.Global.ins.localData.getData(CoinMgr_1.localKey);
        if (num === undefined) {
            num = 0;
            Global_1.Global.ins.localData.setData(CoinMgr_1.localKey, num);
        }
        this.coin = num;
    };
    CoinMgr.prototype.getCoin = function () {
        return this.coin;
    };
    CoinMgr.prototype.changeCoin = function (v) {
        this.coin += v;
        Global_1.Global.ins.localData.setData(CoinMgr_1.localKey, this.coin);
        EventMgr_1.default.ins.emit(Global_1.GEvent.coinChanged);
    };
    var CoinMgr_1;
    /**本地存储key */
    CoinMgr.localKey = "starNum";
    CoinMgr._ins = null;
    CoinMgr = CoinMgr_1 = __decorate([
        ccclass
    ], CoinMgr);
    return CoinMgr;
}());
exports.default = CoinMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxDb2luTWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQXlDO0FBQ3pDLDBDQUFpRDtBQUczQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUdJO1FBVVEsU0FBSSxHQUFXLENBQUMsQ0FBQztJQVZELENBQUM7Z0JBSFIsT0FBTztJQUt4QixzQkFBa0IsY0FBRzthQUFyQjtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNaLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxTQUFPLEVBQUUsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNwQjtZQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUlPLHNCQUFJLEdBQVo7UUFDSSxJQUFJLEdBQUcsR0FBRyxlQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pELElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ1IsZUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDdkQ7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztJQUNwQixDQUFDO0lBRU0seUJBQU8sR0FBZDtRQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRU0sNEJBQVUsR0FBakIsVUFBa0IsQ0FBUztRQUN2QixJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztRQUNmLGVBQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxRCxrQkFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7O0lBL0JELGFBQWE7SUFDQyxnQkFBUSxHQUFXLFNBQVMsQ0FBQztJQUU1QixZQUFJLEdBQVksSUFBSSxDQUFDO0lBSm5CLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FrQzNCO0lBQUQsY0FBQztDQWxDRCxBQWtDQyxJQUFBO2tCQWxDb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFdmVudE1nciBmcm9tIFwiLi9jb21tb24vRXZlbnRNZ3JcIjtcclxuaW1wb3J0IHsgR0V2ZW50LCBHbG9iYWwgfSBmcm9tIFwiLi9jb21tb24vR2xvYmFsXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvaW5NZ3Ige1xyXG4gICAgLyoq5pys5Zyw5a2Y5YKoa2V5ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGxvY2FsS2V5OiBzdHJpbmcgPSBgc3Rhck51bWA7XHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyB9XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zOiBDb2luTWdyID0gbnVsbDtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGlucygpOiBDb2luTWdyIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lucykge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnMgPSBuZXcgQ29pbk1ncigpO1xyXG4gICAgICAgICAgICB0aGlzLl9pbnMuaW5pdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29pbjogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIGluaXQoKSB7XHJcbiAgICAgICAgbGV0IG51bSA9IEdsb2JhbC5pbnMubG9jYWxEYXRhLmdldERhdGEoQ29pbk1nci5sb2NhbEtleSk7XHJcbiAgICAgICAgaWYgKG51bSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIG51bSA9IDA7XHJcbiAgICAgICAgICAgIEdsb2JhbC5pbnMubG9jYWxEYXRhLnNldERhdGEoQ29pbk1nci5sb2NhbEtleSwgbnVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb2luID0gbnVtO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDb2luKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29pbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2hhbmdlQ29pbih2OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmNvaW4gKz0gdjtcclxuICAgICAgICBHbG9iYWwuaW5zLmxvY2FsRGF0YS5zZXREYXRhKENvaW5NZ3IubG9jYWxLZXksIHRoaXMuY29pbik7XHJcbiAgICAgICAgRXZlbnRNZ3IuaW5zLmVtaXQoR0V2ZW50LmNvaW5DaGFuZ2VkKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19