
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/customComponents/shop/script/Shop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcY3VzdG9tQ29tcG9uZW50c1xcc2hvcFxcc2NyaXB0XFxTaG9wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFnRDtBQUVoRCx3REFBbUQ7QUFDbkQsa0VBQWlFO0FBQ2pFLHVDQUFrQztBQUNsQyx1Q0FBa0M7QUFHNUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQU07SUFBeEM7UUFBQSxxRUErQ0M7UUE3Q0csaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFHOUIsdUJBQWlCLEdBQVksSUFBSSxDQUFDO1FBR2xDLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFFbkIsaUJBQVcsR0FBZ0IsSUFBSSxDQUFDO1FBQ2hDLGtCQUFZLEdBQWUsRUFBRSxDQUFDOztJQW9DMUMsQ0FBQztJQWxDYSxxQkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVPLHNCQUFPLEdBQWY7UUFDSSxnQkFBTSxDQUFDLEdBQUcsQ0FBQyxrQkFBUSxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRVMsdUJBQVEsR0FBbEI7UUFDSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVPLHFCQUFNLEdBQWQ7UUFDSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUMzQyxJQUFJLElBQUksR0FBRyxrQkFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN0QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNsQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUNyQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFRLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQztJQUVMLENBQUM7SUFFTSx3QkFBUyxHQUFoQjtRQUNJLEtBQWlCLFVBQWlCLEVBQWpCLEtBQUEsSUFBSSxDQUFDLFlBQVksRUFBakIsY0FBaUIsRUFBakIsSUFBaUIsRUFBRTtZQUEvQixJQUFJLElBQUksU0FBQTtZQUNULElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdkI7SUFDTCxDQUFDO0lBM0NEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkNBQ1U7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDZ0I7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzswQ0FDTztJQVJWLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0ErQ3hCO0lBQUQsV0FBQztDQS9DRCxBQStDQyxDQS9DaUMsZ0JBQU0sR0ErQ3ZDO2tCQS9Db0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTb3VuZE1nciBmcm9tIFwiLi4vLi4vLi4vc2NyaXB0L1NvdW5kTWdyXCI7XHJcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuLi8uLi8uLi9zY3JpcHQvY29tbW9uL0dsb2JhbFwiO1xyXG5pbXBvcnQgTW9kdWxlIGZyb20gXCIuLi8uLi8uLi9zY3JpcHQvY29tbW9uL01vZHVsZVwiO1xyXG5pbXBvcnQgeyBOb2RlRmFjdG9yeSB9IGZyb20gXCIuLi8uLi8uLi9zY3JpcHQvY29tbW9uL05vZGVGYWN0b3J5XCI7XHJcbmltcG9ydCBTaG9wRGF0YSBmcm9tIFwiLi9TaG9wRGF0YVwiO1xyXG5pbXBvcnQgU2hvcEl0ZW0gZnJvbSBcIi4vU2hvcEl0ZW1cIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvcCBleHRlbmRzIE1vZHVsZSB7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2hvcEl0ZW1QcmU6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzaG9wSXRlbUNvbnRhaW5lcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIGNsb3NlQnRuOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgaXRlbUZhY3Rvcnk6IE5vZGVGYWN0b3J5ID0gbnVsbDtcclxuICAgIHByaXZhdGUgc2hvcEl0ZW1MaXN0OiBTaG9wSXRlbVtdID0gW107XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLml0ZW1GYWN0b3J5ID0gbmV3IE5vZGVGYWN0b3J5KCkuaW5pdCh0aGlzLnNob3BJdGVtUHJlKTtcclxuICAgICAgICB0aGlzLmNsb3NlQnRuLm5vZGUub24oYGNsaWNrYCwgdGhpcy5vbkNsb3NlLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQ2xvc2UoKSB7XHJcbiAgICAgICAgTW9kdWxlLmdldChTb3VuZE1ncikucGxheUJ0blNvdW5kKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pbml0VUkoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRVSSgpIHtcclxuICAgICAgICB0aGlzLnNob3BJdGVtQ29udGFpbmVyLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgbGV0IGxpc3QgPSBTaG9wRGF0YS5pbnMuZ2V0QWxsUHJvcHMoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBsaXN0W2ldO1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuaXRlbUZhY3RvcnkuZ2V0KCk7XHJcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5zaG9wSXRlbUNvbnRhaW5lcjtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBub2RlLmdldENvbXBvbmVudChTaG9wSXRlbSk7XHJcbiAgICAgICAgICAgIGl0ZW0uaW5pdChkYXRhLCB0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5zaG9wSXRlbUxpc3QucHVzaChpdGVtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1blBpY2tBbGwoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLnNob3BJdGVtTGlzdCkge1xyXG4gICAgICAgICAgICBpdGVtLnNldFBpY2soZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19