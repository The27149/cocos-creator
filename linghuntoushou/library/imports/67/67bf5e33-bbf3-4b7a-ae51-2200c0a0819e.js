"use strict";
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