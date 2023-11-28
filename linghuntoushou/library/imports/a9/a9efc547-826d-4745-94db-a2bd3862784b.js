"use strict";
cc._RF.push(module, 'a9efcVHgm1HRZTbor04YnhL', 'Shop');
// customComponents/shop/script/Shop.ts

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
var SoundMgr_1 = require("../../../script/SoundMgr");
var Module_1 = require("../../../script/common/Module");
var NodeFactory_1 = require("../../../script/common/NodeFactory");
var ShopData_1 = require("./ShopData");
var ShopItem_1 = require("./ShopItem");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Shop = /** @class */ (function (_super) {
    __extends(Shop, _super);
    function Shop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.shopItemPre = null;
        _this.shopItemContainer = null;
        _this.closeBtn = null;
        _this.itemFactory = null;
        _this.shopItemList = [];
        return _this;
    }
    Shop.prototype.onLoad = function () {
        this.itemFactory = new NodeFactory_1.NodeFactory().init(this.shopItemPre);
        this.closeBtn.node.on("click", this.onClose, this);
    };
    Shop.prototype.onClose = function () {
        Module_1.default.get(SoundMgr_1.default).playBtnSound();
        this.node.destroy();
    };
    Shop.prototype.onEnable = function () {
        this.initUI();
    };
    Shop.prototype.initUI = function () {
        this.shopItemContainer.removeAllChildren();
        var list = ShopData_1.default.ins.getAllProps();
        for (var i = 0; i < list.length; i++) {
            var data = list[i];
            var node = this.itemFactory.get();
            node.parent = this.shopItemContainer;
            var item = node.getComponent(ShopItem_1.default);
            item.init(data, this);
            this.shopItemList.push(item);
        }
    };
    Shop.prototype.unPickAll = function () {
        for (var _i = 0, _a = this.shopItemList; _i < _a.length; _i++) {
            var item = _a[_i];
            item.setPick(false);
        }
    };
    __decorate([
        property(cc.Prefab)
    ], Shop.prototype, "shopItemPre", void 0);
    __decorate([
        property(cc.Node)
    ], Shop.prototype, "shopItemContainer", void 0);
    __decorate([
        property(cc.Button)
    ], Shop.prototype, "closeBtn", void 0);
    Shop = __decorate([
        ccclass
    ], Shop);
    return Shop;
}(Module_1.default));
exports.default = Shop;

cc._RF.pop();