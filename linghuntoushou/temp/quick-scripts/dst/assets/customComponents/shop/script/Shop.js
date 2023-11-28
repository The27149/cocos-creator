
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcY3VzdG9tQ29tcG9uZW50c1xcc2hvcFxcc2NyaXB0XFxTaG9wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFnRDtBQUNoRCx3REFBbUQ7QUFDbkQsa0VBQWlFO0FBQ2pFLHVDQUFrQztBQUNsQyx1Q0FBa0M7QUFHNUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQU07SUFBeEM7UUFBQSxxRUErQ0M7UUE3Q0csaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFHOUIsdUJBQWlCLEdBQVksSUFBSSxDQUFDO1FBR2xDLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFFbkIsaUJBQVcsR0FBZ0IsSUFBSSxDQUFDO1FBQ2hDLGtCQUFZLEdBQWUsRUFBRSxDQUFDOztJQW9DMUMsQ0FBQztJQWxDYSxxQkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVPLHNCQUFPLEdBQWY7UUFDSSxnQkFBTSxDQUFDLEdBQUcsQ0FBQyxrQkFBUSxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRVMsdUJBQVEsR0FBbEI7UUFDSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVPLHFCQUFNLEdBQWQ7UUFDSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUMzQyxJQUFJLElBQUksR0FBRyxrQkFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN0QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNsQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUNyQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFRLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQztJQUVMLENBQUM7SUFFTSx3QkFBUyxHQUFoQjtRQUNJLEtBQWlCLFVBQWlCLEVBQWpCLEtBQUEsSUFBSSxDQUFDLFlBQVksRUFBakIsY0FBaUIsRUFBakIsSUFBaUIsRUFBRTtZQUEvQixJQUFJLElBQUksU0FBQTtZQUNULElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdkI7SUFDTCxDQUFDO0lBM0NEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkNBQ1U7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDZ0I7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzswQ0FDTztJQVJWLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0ErQ3hCO0lBQUQsV0FBQztDQS9DRCxBQStDQyxDQS9DaUMsZ0JBQU0sR0ErQ3ZDO2tCQS9Db0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTb3VuZE1nciBmcm9tIFwiLi4vLi4vLi4vc2NyaXB0L1NvdW5kTWdyXCI7XHJcbmltcG9ydCBNb2R1bGUgZnJvbSBcIi4uLy4uLy4uL3NjcmlwdC9jb21tb24vTW9kdWxlXCI7XHJcbmltcG9ydCB7IE5vZGVGYWN0b3J5IH0gZnJvbSBcIi4uLy4uLy4uL3NjcmlwdC9jb21tb24vTm9kZUZhY3RvcnlcIjtcclxuaW1wb3J0IFNob3BEYXRhIGZyb20gXCIuL1Nob3BEYXRhXCI7XHJcbmltcG9ydCBTaG9wSXRlbSBmcm9tIFwiLi9TaG9wSXRlbVwiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9wIGV4dGVuZHMgTW9kdWxlIHtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzaG9wSXRlbVByZTogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNob3BJdGVtQ29udGFpbmVyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgY2xvc2VCdG46IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBpdGVtRmFjdG9yeTogTm9kZUZhY3RvcnkgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzaG9wSXRlbUxpc3Q6IFNob3BJdGVtW10gPSBbXTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXRlbUZhY3RvcnkgPSBuZXcgTm9kZUZhY3RvcnkoKS5pbml0KHRoaXMuc2hvcEl0ZW1QcmUpO1xyXG4gICAgICAgIHRoaXMuY2xvc2VCdG4ubm9kZS5vbihgY2xpY2tgLCB0aGlzLm9uQ2xvc2UsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25DbG9zZSgpIHtcclxuICAgICAgICBNb2R1bGUuZ2V0KFNvdW5kTWdyKS5wbGF5QnRuU291bmQoKTtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmluaXRVSSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdFVJKCkge1xyXG4gICAgICAgIHRoaXMuc2hvcEl0ZW1Db250YWluZXIucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICBsZXQgbGlzdCA9IFNob3BEYXRhLmlucy5nZXRBbGxQcm9wcygpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IGxpc3RbaV07XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5pdGVtRmFjdG9yeS5nZXQoKTtcclxuICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLnNob3BJdGVtQ29udGFpbmVyO1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IG5vZGUuZ2V0Q29tcG9uZW50KFNob3BJdGVtKTtcclxuICAgICAgICAgICAgaXRlbS5pbml0KGRhdGEsIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3BJdGVtTGlzdC5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVuUGlja0FsbCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuc2hvcEl0ZW1MaXN0KSB7XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0UGljayhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=