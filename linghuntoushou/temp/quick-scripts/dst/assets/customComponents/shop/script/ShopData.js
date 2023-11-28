
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
var LocalData_1 = require("../../../script/common/LocalData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShopData = /** @class */ (function () {
    function ShopData() {
        /**本地永久存储副本 */
        this.localShopData = null;
        /**道具列表 */
        this.props = null;
        this.key = "props";
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
        this.localShopData = new LocalData_1.default("9011301_shop");
        this.props = this.localShopData.getData(this.key);
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
        this.localShopData.setData(this.key, this.props);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcY3VzdG9tQ29tcG9uZW50c1xcc2hvcFxcc2NyaXB0XFxTaG9wRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhEQUF5RDtBQUduRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQVM1QztJQUNJO1FBVUEsY0FBYztRQUNOLGtCQUFhLEdBQWMsSUFBSSxDQUFDO1FBQ3hDLFVBQVU7UUFDRixVQUFLLEdBQWdCLElBQUksQ0FBQztRQUMxQixRQUFHLEdBQVcsT0FBTyxDQUFDO0lBZE4sQ0FBQztpQkFEUixRQUFRO0lBR3pCLHNCQUFrQixlQUFHO2FBQXJCO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFVBQVEsRUFBRSxDQUFDO2dCQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3BCO1lBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBUU8sdUJBQUksR0FBWjtRQUNJLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxtQkFBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDaEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ2xDLEtBQWlCLFVBQVksRUFBWixLQUFBLE1BQU0sQ0FBQyxLQUFLLEVBQVosY0FBWSxFQUFaLElBQVksRUFBRTtnQkFBMUIsSUFBSSxJQUFJLFNBQUE7Z0JBQ1QsSUFBSSxJQUFJLEdBQWMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7Z0JBQ3pFLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMxQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3pCO1lBQ0QsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2Y7SUFDTCxDQUFDO0lBRU8sdUJBQUksR0FBWjtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCw4QkFBVyxHQUFYO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRCwwQkFBTyxHQUFQLFVBQVEsSUFBWTtRQUNoQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQWxCLENBQWtCLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsMEJBQU8sR0FBUCxVQUFRLElBQVksRUFBRSxLQUFjO1FBQ2hDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCwwQkFBTyxHQUFQLFVBQVEsSUFBWSxFQUFFLEtBQWM7UUFDaEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUdELGFBQWE7SUFDTCxnQ0FBYSxHQUFyQjtRQUNJLE9BQU87WUFDSCxLQUFLLEVBQUU7Z0JBQ0g7b0JBQ0ksSUFBSSxFQUFFLENBQUM7b0JBQ1AsSUFBSSxFQUFFLENBQUM7aUJBQ1Y7Z0JBQ0Q7b0JBQ0ksSUFBSSxFQUFFLENBQUM7b0JBQ1AsSUFBSSxFQUFFLEVBQUU7aUJBQ1g7Z0JBQ0Q7b0JBQ0ksSUFBSSxFQUFFLENBQUM7b0JBQ1AsSUFBSSxFQUFFLEVBQUU7aUJBQ1g7Z0JBQ0Q7b0JBQ0ksSUFBSSxFQUFFLENBQUM7b0JBQ1AsSUFBSSxFQUFFLEVBQUU7aUJBQ1g7Z0JBQ0Q7b0JBQ0ksSUFBSSxFQUFFLENBQUM7b0JBQ1AsSUFBSSxFQUFFLEVBQUU7aUJBQ1g7YUFFSjtTQUNKLENBQUE7SUFDTCxDQUFDOztJQXJGYyxhQUFJLEdBQWEsSUFBSSxDQUFDO0lBRnBCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F5RjVCO0lBQUQsZUFBQztDQXpGRCxBQXlGQyxJQUFBO2tCQXpGb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2NhbERhdGEgZnJvbSBcIi4uLy4uLy4uL3NjcmlwdC9jb21tb24vTG9jYWxEYXRhXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuZXhwb3J0IGludGVyZmFjZSBJUHJvcEl0ZW0ge1xyXG4gICAgdHlwZTogbnVtYmVyO1xyXG4gICAgY29zdDogbnVtYmVyO1xyXG4gICAgaXNMb2NrOiBib29sZWFuO1xyXG4gICAgaXNQaWNrOiBib29sZWFuO1xyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9wRGF0YSB7XHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyB9XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zOiBTaG9wRGF0YSA9IG51bGw7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnMoKTogU2hvcERhdGEge1xyXG4gICAgICAgIGlmICghdGhpcy5faW5zKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lucyA9IG5ldyBTaG9wRGF0YSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9pbnMuaW5pdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuacrOWcsOawuOS5heWtmOWCqOWJr+acrCAqL1xyXG4gICAgcHJpdmF0ZSBsb2NhbFNob3BEYXRhOiBMb2NhbERhdGEgPSBudWxsO1xyXG4gICAgLyoq6YGT5YW35YiX6KGoICovXHJcbiAgICBwcml2YXRlIHByb3BzOiBJUHJvcEl0ZW1bXSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGtleTogc3RyaW5nID0gYHByb3BzYDtcclxuXHJcbiAgICBwcml2YXRlIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5sb2NhbFNob3BEYXRhID0gbmV3IExvY2FsRGF0YShgOTAxMTMwMV9zaG9wYCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHRoaXMubG9jYWxTaG9wRGF0YS5nZXREYXRhKHRoaXMua2V5KTtcclxuICAgICAgICBpZiAoIXRoaXMucHJvcHMpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcyA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgY29uZmlnID0gdGhpcy5nZXRQcm9wQ29uZmlnKCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgY29uZmlnLnByb3BzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcHJvcDogSVByb3BJdGVtID0geyB0eXBlOiAwLCBjb3N0OiAwLCBpc0xvY2s6IGZhbHNlLCBpc1BpY2s6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHByb3AsIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgbGV0IGlzTG9jayA9IGl0ZW0uY29zdCAhPT0gMDtcclxuICAgICAgICAgICAgICAgIHByb3AuaXNMb2NrID0gaXNMb2NrO1xyXG4gICAgICAgICAgICAgICAgcHJvcC5pc1BpY2sgPSAhaXNMb2NrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wdXNoKHByb3ApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNhdmUoKSB7XHJcbiAgICAgICAgdGhpcy5sb2NhbFNob3BEYXRhLnNldERhdGEodGhpcy5rZXksIHRoaXMucHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbFByb3BzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERhdGEodHlwZTogbnVtYmVyKTogSVByb3BJdGVtIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5maW5kKHByb3AgPT4gcHJvcC50eXBlID09PSB0eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRMb2NrKHR5cGU6IG51bWJlciwgc3RhdGU6IGJvb2xlYW4pIHtcclxuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZ2V0RGF0YSh0eXBlKTtcclxuICAgICAgICBkYXRhLmlzTG9jayA9IHN0YXRlO1xyXG4gICAgICAgIHRoaXMuc2F2ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBpY2sodHlwZTogbnVtYmVyLCBzdGF0ZTogYm9vbGVhbikge1xyXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5nZXREYXRhKHR5cGUpO1xyXG4gICAgICAgIGRhdGEuaXNQaWNrID0gc3RhdGU7XHJcbiAgICAgICAgdGhpcy5zYXZlKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKuiHquW3seeahOWVhuW6l+mFjee9riAqL1xyXG4gICAgcHJpdmF0ZSBnZXRQcm9wQ29uZmlnKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJvcHM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAxLCAgICAvL+eQgzFcclxuICAgICAgICAgICAgICAgICAgICBjb3N0OiAwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAyLCAgICAgLy/nkIMyXHJcbiAgICAgICAgICAgICAgICAgICAgY29zdDogMjAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgY29zdDogNDAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgY29zdDogNjAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29zdDogODAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19