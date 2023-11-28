"use strict";
cc._RF.push(module, 'ffe4aF2g/BDvK2ZSp8NfJeK', 'ShopItem');
// customComponents/shop/script/ShopItem.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var CoinMgr_1 = require("../../../script/CoinMgr");
var Global_1 = require("../../../script/common/Global");
var Utils_1 = require("../../../script/common/Utils");
var ShopData_1 = require("./ShopData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShopItem = /** @class */ (function (_super) {
    __extends(ShopItem, _super);
    function ShopItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.propSp = null;
        _this.costLabel = null;
        _this.lockNode = null;
        _this.pickNode = null;
        _this.isLock = false;
        _this.isPick = false;
        _this.data = null;
        _this.shop = null;
        return _this;
    }
    ShopItem.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    };
    ShopItem.prototype.onTouchEnd = function (e) {
        if (this.isLock) {
            this.buy();
        }
        else {
            this.pick();
        }
    };
    ShopItem.prototype.init = function (data, shop) {
        this.data = data;
        this.shop = shop;
        var path = "shop/texture/ball/lanqiu" + data.type;
        Utils_1.default.dynamicSpriteInBundle(this.propSp, Global_1.GConst.customCompBundle, path);
        this.costLabel.string = data.cost.toString();
        this.setLock(data.isLock);
        this.setPick(data.isPick);
    };
    ShopItem.prototype.setLock = function (state) {
        this.isLock = state;
        this.lockNode.active = state;
        ShopData_1.default.ins.setLock(this.data.type, state);
    };
    ShopItem.prototype.setPick = function (state) {
        this.isPick = state;
        this.pickNode.active = state;
        ShopData_1.default.ins.setPick(this.data.type, state);
        Global_1.Global.ins.shopPickType = this.data.type;
    };
    ShopItem.prototype.buy = function () {
        var coin = CoinMgr_1.default.ins.getCoin();
        if (coin < this.data.cost) {
            Utils_1.default.log("\u661F\u661F\u4E0D\u591F\uFF0C\u4E70\u4E0D\u4E86");
            return;
        }
        else {
            CoinMgr_1.default.ins.changeCoin(-this.data.cost);
            this.setLock(false);
        }
    };
    ShopItem.prototype.pick = function () {
        if (this.isLock)
            return;
        this.shop.unPickAll();
        this.setPick(true);
    };
    __decorate([
        property(cc.Sprite)
    ], ShopItem.prototype, "propSp", void 0);
    __decorate([
        property(cc.Label)
    ], ShopItem.prototype, "costLabel", void 0);
    __decorate([
        property(cc.Node)
    ], ShopItem.prototype, "lockNode", void 0);
    __decorate([
        property(cc.Node)
    ], ShopItem.prototype, "pickNode", void 0);
    ShopItem = __decorate([
        ccclass
    ], ShopItem);
    return ShopItem;
}(cc.Component));
exports.default = ShopItem;

cc._RF.pop();