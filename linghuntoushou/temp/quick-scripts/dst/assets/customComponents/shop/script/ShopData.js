
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/customComponents/shop/script/ShopData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '67bf54zu/NLeq5RIgDAoIGe', 'ShopData');
// customComponents/shop/script/ShopData.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Global_1 = require("../../../script/common/Global");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShopData = /** @class */ (function () {
    function ShopData() {
        /**道具列表 */
        this.props = null;
        this.key = "shopProps";
    }
    ShopData_1 = ShopData;
    Object.defineProperty(ShopData, "ins", {
        get: function () {
            if (!this._ins) {
                this._ins = new ShopData_1();
                this._ins.init();
            }
            return this._ins;
        },
        enumerable: false,
        configurable: true
    });
    ShopData.prototype.init = function () {
        this.props = Global_1.Global.ins.localData.getData(this.key);
        if (!this.props) {
            this.props = [];
            var config = this.getPropConfig();
            for (var _i = 0, _a = config.props; _i < _a.length; _i++) {
                var item = _a[_i];
                var prop = { type: 0, cost: 0, isLock: false, isPick: false };
                Object.assign(prop, item);
                var isLock = item.cost !== 0;
                prop.isLock = isLock;
                prop.isPick = !isLock;
                this.props.push(prop);
            }
            this.save();
        }
    };
    ShopData.prototype.save = function () {
        Global_1.Global.ins.localData.setData(this.key, this.props);
    };
    ShopData.prototype.getAllProps = function () {
        return this.props;
    };
    ShopData.prototype.getData = function (type) {
        return this.props.find(function (prop) { return prop.type === type; });
    };
    ShopData.prototype.setLock = function (type, state) {
        var data = this.getData(type);
        data.isLock = state;
        this.save();
    };
    ShopData.prototype.setPick = function (type, state) {
        var data = this.getData(type);
        data.isPick = state;
        this.save();
    };
    ShopData.prototype.getPickType = function () {
        return this.props.find(function (prop) { return !prop.isLock && prop.isPick; }).type;
    };
    /**自己的商店配置 */
    ShopData.prototype.getPropConfig = function () {
        return {
            props: [
                {
                    type: 1,
                    cost: 0,
                },
                {
                    type: 2,
                    cost: 20,
                },
                {
                    type: 3,
                    cost: 40,
                },
                {
                    type: 4,
                    cost: 60,
                },
                {
                    type: 5,
                    cost: 80,
                },
            ]
        };
    };
    var ShopData_1;
    ShopData._ins = null;
    ShopData = ShopData_1 = __decorate([
        ccclass
    ], ShopData);
    return ShopData;
}());
exports.default = ShopData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcY3VzdG9tQ29tcG9uZW50c1xcc2hvcFxcc2NyaXB0XFxTaG9wRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdEQUF1RDtBQUdqRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQVM1QztJQUNJO1FBV0EsVUFBVTtRQUNGLFVBQUssR0FBZ0IsSUFBSSxDQUFDO1FBQzFCLFFBQUcsR0FBVyxXQUFXLENBQUM7SUFiVixDQUFDO2lCQURSLFFBQVE7SUFHekIsc0JBQWtCLGVBQUc7YUFBckI7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDWixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksVUFBUSxFQUFFLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDcEI7WUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFPTyx1QkFBSSxHQUFaO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxlQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDaEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ2xDLEtBQWlCLFVBQVksRUFBWixLQUFBLE1BQU0sQ0FBQyxLQUFLLEVBQVosY0FBWSxFQUFaLElBQVksRUFBRTtnQkFBMUIsSUFBSSxJQUFJLFNBQUE7Z0JBQ1QsSUFBSSxJQUFJLEdBQWMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7Z0JBQ3pFLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMxQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3pCO1lBQ0QsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2Y7SUFDTCxDQUFDO0lBRU8sdUJBQUksR0FBWjtRQUNJLGVBQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsOEJBQVcsR0FBWDtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQsMEJBQU8sR0FBUCxVQUFRLElBQVk7UUFDaEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFsQixDQUFrQixDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELDBCQUFPLEdBQVAsVUFBUSxJQUFZLEVBQUUsS0FBYztRQUNoQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsMEJBQU8sR0FBUCxVQUFRLElBQVksRUFBRSxLQUFjO1FBQ2hDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCw4QkFBVyxHQUFYO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxFQUEzQixDQUEyQixDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3JFLENBQUM7SUFHRCxhQUFhO0lBQ0wsZ0NBQWEsR0FBckI7UUFDSSxPQUFPO1lBQ0gsS0FBSyxFQUFFO2dCQUNIO29CQUNJLElBQUksRUFBRSxDQUFDO29CQUNQLElBQUksRUFBRSxDQUFDO2lCQUNWO2dCQUNEO29CQUNJLElBQUksRUFBRSxDQUFDO29CQUNQLElBQUksRUFBRSxFQUFFO2lCQUNYO2dCQUNEO29CQUNJLElBQUksRUFBRSxDQUFDO29CQUNQLElBQUksRUFBRSxFQUFFO2lCQUNYO2dCQUNEO29CQUNJLElBQUksRUFBRSxDQUFDO29CQUNQLElBQUksRUFBRSxFQUFFO2lCQUNYO2dCQUNEO29CQUNJLElBQUksRUFBRSxDQUFDO29CQUNQLElBQUksRUFBRSxFQUFFO2lCQUNYO2FBRUo7U0FDSixDQUFBO0lBQ0wsQ0FBQzs7SUF2RmMsYUFBSSxHQUFhLElBQUksQ0FBQztJQUZwQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBMkY1QjtJQUFELGVBQUM7Q0EzRkQsQUEyRkMsSUFBQTtrQkEzRm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi4vLi4vLi4vc2NyaXB0L2NvbW1vbi9HbG9iYWxcIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wSXRlbSB7XHJcbiAgICB0eXBlOiBudW1iZXI7XHJcbiAgICBjb3N0OiBudW1iZXI7XHJcbiAgICBpc0xvY2s6IGJvb2xlYW47XHJcbiAgICBpc1BpY2s6IGJvb2xlYW47XHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3BEYXRhIHtcclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IH1cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnM6IFNob3BEYXRhID0gbnVsbDtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGlucygpOiBTaG9wRGF0YSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pbnMpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zID0gbmV3IFNob3BEYXRhKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2lucy5pbml0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKumBk+WFt+WIl+ihqCAqL1xyXG4gICAgcHJpdmF0ZSBwcm9wczogSVByb3BJdGVtW10gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBrZXk6IHN0cmluZyA9IGBzaG9wUHJvcHNgO1xyXG5cclxuICAgIHByaXZhdGUgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLnByb3BzID0gR2xvYmFsLmlucy5sb2NhbERhdGEuZ2V0RGF0YSh0aGlzLmtleSk7XHJcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMgPSBbXTtcclxuICAgICAgICAgICAgbGV0IGNvbmZpZyA9IHRoaXMuZ2V0UHJvcENvbmZpZygpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGNvbmZpZy5wcm9wcykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHByb3A6IElQcm9wSXRlbSA9IHsgdHlwZTogMCwgY29zdDogMCwgaXNMb2NrOiBmYWxzZSwgaXNQaWNrOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihwcm9wLCBpdGVtKTtcclxuICAgICAgICAgICAgICAgIGxldCBpc0xvY2sgPSBpdGVtLmNvc3QgIT09IDA7XHJcbiAgICAgICAgICAgICAgICBwcm9wLmlzTG9jayA9IGlzTG9jaztcclxuICAgICAgICAgICAgICAgIHByb3AuaXNQaWNrID0gIWlzTG9jaztcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucHVzaChwcm9wKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNhdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzYXZlKCkge1xyXG4gICAgICAgIEdsb2JhbC5pbnMubG9jYWxEYXRhLnNldERhdGEodGhpcy5rZXksIHRoaXMucHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbFByb3BzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERhdGEodHlwZTogbnVtYmVyKTogSVByb3BJdGVtIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5maW5kKHByb3AgPT4gcHJvcC50eXBlID09PSB0eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRMb2NrKHR5cGU6IG51bWJlciwgc3RhdGU6IGJvb2xlYW4pIHtcclxuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZ2V0RGF0YSh0eXBlKTtcclxuICAgICAgICBkYXRhLmlzTG9jayA9IHN0YXRlO1xyXG4gICAgICAgIHRoaXMuc2F2ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBpY2sodHlwZTogbnVtYmVyLCBzdGF0ZTogYm9vbGVhbikge1xyXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5nZXREYXRhKHR5cGUpO1xyXG4gICAgICAgIGRhdGEuaXNQaWNrID0gc3RhdGU7XHJcbiAgICAgICAgdGhpcy5zYXZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGlja1R5cGUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5maW5kKHByb3AgPT4gIXByb3AuaXNMb2NrICYmIHByb3AuaXNQaWNrKS50eXBlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKiroh6rlt7HnmoTllYblupfphY3nva4gKi9cclxuICAgIHByaXZhdGUgZ2V0UHJvcENvbmZpZygpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHByb3BzOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogMSwgICAgLy/nkIMxXHJcbiAgICAgICAgICAgICAgICAgICAgY29zdDogMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogMiwgICAgIC8v55CDMlxyXG4gICAgICAgICAgICAgICAgICAgIGNvc3Q6IDIwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvc3Q6IDQwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiA0LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvc3Q6IDYwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiA1LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvc3Q6IDgwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==