
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/customComponents/shop/script/ShopItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcY3VzdG9tQ29tcG9uZW50c1xcc2hvcFxcc2NyaXB0XFxTaG9wSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBOEM7QUFDOUMsd0RBQStEO0FBQy9ELHNEQUFpRDtBQUVqRCx1Q0FBaUQ7QUFHM0MsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF1RUM7UUFwRUcsWUFBTSxHQUFjLElBQUksQ0FBQztRQUd6QixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRzNCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUVqQixZQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLFlBQU0sR0FBWSxLQUFLLENBQUM7UUFDeEIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUN2QixVQUFJLEdBQVMsSUFBSSxDQUFDOztJQXNEOUIsQ0FBQztJQXBEYSx5QkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFTyw2QkFBVSxHQUFsQixVQUFtQixDQUFzQjtRQUNyQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDYixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDZDthQUFNO1lBQ0gsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2Y7SUFDTCxDQUFDO0lBRU0sdUJBQUksR0FBWCxVQUFZLElBQWUsRUFBRSxJQUFVO1FBQ25DLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksSUFBSSxHQUFHLDZCQUEyQixJQUFJLENBQUMsSUFBTSxDQUFDO1FBQ2xELGVBQUssQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLGVBQU0sQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFTywwQkFBTyxHQUFmLFVBQWdCLEtBQWM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzdCLGtCQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU0sMEJBQU8sR0FBZCxVQUFlLEtBQWM7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzdCLGtCQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1QyxlQUFNLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUM3QyxDQUFDO0lBRU8sc0JBQUcsR0FBWDtRQUNJLElBQUksSUFBSSxHQUFHLGlCQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ3ZCLGVBQUssQ0FBQyxHQUFHLENBQUMsa0RBQVUsQ0FBQyxDQUFDO1lBQ3RCLE9BQU87U0FDVjthQUFNO1lBQ0gsaUJBQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQztJQUVPLHVCQUFJLEdBQVo7UUFDSSxJQUFJLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQWxFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzRDQUNLO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ1E7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNPO0lBWlIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXVFNUI7SUFBRCxlQUFDO0NBdkVELEFBdUVDLENBdkVxQyxFQUFFLENBQUMsU0FBUyxHQXVFakQ7a0JBdkVvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvaW5NZ3IgZnJvbSBcIi4uLy4uLy4uL3NjcmlwdC9Db2luTWdyXCI7XHJcbmltcG9ydCB7IEdDb25zdCwgR2xvYmFsIH0gZnJvbSBcIi4uLy4uLy4uL3NjcmlwdC9jb21tb24vR2xvYmFsXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vLi4vc2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xyXG5pbXBvcnQgU2hvcCBmcm9tIFwiLi9TaG9wXCI7XHJcbmltcG9ydCBTaG9wRGF0YSwgeyBJUHJvcEl0ZW0gfSBmcm9tIFwiLi9TaG9wRGF0YVwiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9wSXRlbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIHByb3BTcDogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBjb3N0TGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxvY2tOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBpY2tOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGlzTG9jazogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpc1BpY2s6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgZGF0YTogSVByb3BJdGVtID0gbnVsbDtcclxuICAgIHByaXZhdGUgc2hvcDogU2hvcCA9IG51bGw7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Ub3VjaEVuZChlOiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNMb2NrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnV5KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5waWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0KGRhdGE6IElQcm9wSXRlbSwgc2hvcDogU2hvcCkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5zaG9wID0gc2hvcDtcclxuICAgICAgICBsZXQgcGF0aCA9IGBzaG9wL3RleHR1cmUvYmFsbC9sYW5xaXUke2RhdGEudHlwZX1gO1xyXG4gICAgICAgIFV0aWxzLmR5bmFtaWNTcHJpdGVJbkJ1bmRsZSh0aGlzLnByb3BTcCwgR0NvbnN0LmN1c3RvbUNvbXBCdW5kbGUsIHBhdGgpO1xyXG4gICAgICAgIHRoaXMuY29zdExhYmVsLnN0cmluZyA9IGRhdGEuY29zdC50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMuc2V0TG9jayhkYXRhLmlzTG9jayk7XHJcbiAgICAgICAgdGhpcy5zZXRQaWNrKGRhdGEuaXNQaWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldExvY2soc3RhdGU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmlzTG9jayA9IHN0YXRlO1xyXG4gICAgICAgIHRoaXMubG9ja05vZGUuYWN0aXZlID0gc3RhdGU7XHJcbiAgICAgICAgU2hvcERhdGEuaW5zLnNldExvY2sodGhpcy5kYXRhLnR5cGUsIHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0UGljayhzdGF0ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuaXNQaWNrID0gc3RhdGU7XHJcbiAgICAgICAgdGhpcy5waWNrTm9kZS5hY3RpdmUgPSBzdGF0ZTtcclxuICAgICAgICBTaG9wRGF0YS5pbnMuc2V0UGljayh0aGlzLmRhdGEudHlwZSwgc3RhdGUpO1xyXG4gICAgICAgIEdsb2JhbC5pbnMuc2hvcFBpY2tUeXBlID0gdGhpcy5kYXRhLnR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBidXkoKSB7XHJcbiAgICAgICAgbGV0IGNvaW4gPSBDb2luTWdyLmlucy5nZXRDb2luKCk7XHJcbiAgICAgICAgaWYgKGNvaW4gPCB0aGlzLmRhdGEuY29zdCkge1xyXG4gICAgICAgICAgICBVdGlscy5sb2coYOaYn+aYn+S4jeWkn++8jOS5sOS4jeS6hmApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgQ29pbk1nci5pbnMuY2hhbmdlQ29pbigtdGhpcy5kYXRhLmNvc3QpO1xyXG4gICAgICAgICAgICB0aGlzLnNldExvY2soZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBpY2soKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNMb2NrKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5zaG9wLnVuUGlja0FsbCgpO1xyXG4gICAgICAgIHRoaXMuc2V0UGljayh0cnVlKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19