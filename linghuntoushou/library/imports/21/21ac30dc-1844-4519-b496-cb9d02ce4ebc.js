"use strict";
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