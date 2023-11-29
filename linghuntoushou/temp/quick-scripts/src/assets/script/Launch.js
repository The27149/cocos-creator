"use strict";
cc._RF.push(module, 'b8e5brnirNBUoF0vsSQbFql', 'Launch');
// script/Launch.ts

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
var CoinMgr_1 = require("./CoinMgr");
var Game_1 = require("./Game");
var SoundMgr_1 = require("./SoundMgr");
var EventMgr_1 = require("./common/EventMgr");
var Global_1 = require("./common/Global");
var Module_1 = require("./common/Module");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Launch = /** @class */ (function (_super) {
    __extends(Launch, _super);
    function Launch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startBtn = null;
        _this.starLabel = null;
        _this.shopBtn = null;
        _this.canStart = false;
        return _this;
    }
    Launch.prototype.onLoad = function () {
        this.startBtn.node.on('click', this.onClickStartBtn, this);
        this.shopBtn.node.on("click", this.onOpenShop, this);
        EventMgr_1.default.ins.on(Global_1.GEvent.coinChanged, this.onCoinChanged, this);
        this.updateStar(CoinMgr_1.default.ins.getCoin());
    };
    Launch.prototype.onDestroy = function () {
        EventMgr_1.default.ins.off(Global_1.GEvent.coinChanged, this.onCoinChanged, this);
    };
    Launch.prototype.onClickStartBtn = function () {
        Module_1.default.get(SoundMgr_1.default).playBtnSound();
        if (!this.canStart)
            return;
        this.hide();
        Module_1.default.get(Game_1.default).show();
    };
    Launch.prototype.onOpenShop = function () {
        Module_1.default.get(SoundMgr_1.default).playBtnSound();
        this.addShopView();
    };
    Launch.prototype.hide = function () {
        var _this = this;
        this.canStart = false;
        this.node.runAction(cc.fadeOut(1));
        setTimeout(function () {
            _this.node.active = false;
        }, 1000);
    };
    Launch.prototype.show = function () {
        var _this = this;
        this.node.active = true;
        this.node.runAction(cc.fadeIn(1));
        setTimeout(function () {
            _this.canStart = true;
        }, 1000);
    };
    Launch.prototype.updateStar = function (num) {
        this.starLabel.string = num.toString();
    };
    Launch.prototype.onCoinChanged = function () {
        var num = CoinMgr_1.default.ins.getCoin();
        this.updateStar(num);
    };
    Launch.prototype.addShopView = function () {
        var _this = this;
        var bundle = cc.assetManager.getBundle(Global_1.GConst.customCompBundle);
        bundle.load("shop/prefab/Shop", cc.Prefab, function (err, pre) {
            if (!err) {
                var node = cc.instantiate(pre);
                node.parent = _this.node;
            }
        });
    };
    __decorate([
        property(cc.Button)
    ], Launch.prototype, "startBtn", void 0);
    __decorate([
        property(cc.Label)
    ], Launch.prototype, "starLabel", void 0);
    __decorate([
        property(cc.Button)
    ], Launch.prototype, "shopBtn", void 0);
    Launch = __decorate([
        ccclass
    ], Launch);
    return Launch;
}(Module_1.default));
exports.default = Launch;

cc._RF.pop();