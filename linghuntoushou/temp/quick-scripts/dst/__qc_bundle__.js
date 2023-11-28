
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/customComponents/rank/scriipt/Rank');
require('./assets/customComponents/rank/scriipt/RankData');
require('./assets/customComponents/shop/script/Shop');
require('./assets/customComponents/shop/script/ShopData');
require('./assets/customComponents/shop/script/ShopItem');
require('./assets/script/Ball');
require('./assets/script/Basket');
require('./assets/script/Clock');
require('./assets/script/CoinMgr');
require('./assets/script/Game');
require('./assets/script/Launch');
require('./assets/script/Main');
require('./assets/script/Settle');
require('./assets/script/SoundMgr');
require('./assets/script/common/EventMgr');
require('./assets/script/common/Global');
require('./assets/script/common/LocalData');
require('./assets/script/common/Module');
require('./assets/script/common/Move');
require('./assets/script/common/NodeFactory');
require('./assets/script/common/Utils');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Basket.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ce79fzDNtlHt5Bt5p5Mgz0Y', 'Basket');
// script/Basket.ts

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
var Game_1 = require("./Game");
var Module_1 = require("./common/Module");
var Utils_1 = require("./common/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Basket = /** @class */ (function (_super) {
    __extends(Basket, _super);
    function Basket() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.basketOut = null;
        _this.game = null;
        _this.posX = 540;
        _this.posYMin = -200;
        _this.posYMax = 400;
        _this.collider1Off = null;
        _this.collider2Off = null;
        _this.collider1 = null;
        _this.collider2 = null;
        _this.basketOutOff = cc.v3();
        return _this;
    }
    Basket.prototype.onLoad = function () {
        this.game = Module_1.default.get(Game_1.default);
        var colliders = this.node.getComponents(cc.PhysicsCollider);
        this.collider1 = colliders.find(function (item) { return item.tag === 1; });
        this.collider2 = colliders.find(function (item) { return item.tag === 2; });
        this.collider1Off = this.collider1.offset;
        this.collider2Off = this.collider2.offset;
        this.node.position.sub(this.basketOut.position, this.basketOutOff);
    };
    /**重置篮筐位置 状态 */
    Basket.prototype.reset = function (direction) {
        var posY = Utils_1.default.randomInt(this.posYMin, this.posYMax), posX = this.posX * direction;
        this.node.setPosition(posX, posY);
        var outOff = this.basketOutOff.clone();
        outOff.x *= -direction;
        var outPos = this.node.position.sub(outOff);
        this.basketOut.setPosition(outPos);
        this.node.scaleX = this.basketOut.scaleX = -direction;
        var temp1 = cc.v2(-direction * this.collider1Off.x, this.collider1Off.y);
        var temp2 = cc.v2(-direction * this.collider2Off.x, this.collider2Off.y);
        this.collider1.offset = temp1;
        this.collider2.offset = temp2;
        this.collider1.apply();
        this.collider2.apply();
    };
    __decorate([
        property(cc.Node)
    ], Basket.prototype, "basketOut", void 0);
    Basket = __decorate([
        ccclass
    ], Basket);
    return Basket;
}(cc.Component));
exports.default = Basket;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxCYXNrZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQTBCO0FBQzFCLDBDQUFxQztBQUNyQyx3Q0FBbUM7QUFHN0IsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUEyQ0M7UUF4Q0csZUFBUyxHQUFZLElBQUksQ0FBQztRQUVsQixVQUFJLEdBQVMsSUFBSSxDQUFDO1FBQ2xCLFVBQUksR0FBVyxHQUFHLENBQUM7UUFDbkIsYUFBTyxHQUFXLENBQUMsR0FBRyxDQUFDO1FBQ3ZCLGFBQU8sR0FBVyxHQUFHLENBQUM7UUFDdEIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFDN0Isa0JBQVksR0FBWSxJQUFJLENBQUM7UUFDN0IsZUFBUyxHQUE2QixJQUFJLENBQUM7UUFDM0MsZUFBUyxHQUE2QixJQUFJLENBQUM7UUFDM0Msa0JBQVksR0FBWSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7O0lBOEI1QyxDQUFDO0lBNUJhLHVCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxnQkFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFJLENBQUMsQ0FBQztRQUM3QixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQWQsQ0FBYyxDQUE2QixDQUFDO1FBQ3BGLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFkLENBQWMsQ0FBNkIsQ0FBQztRQUNwRixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQzFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsZUFBZTtJQUNSLHNCQUFLLEdBQVosVUFBYSxTQUFpQjtRQUMxQixJQUFJLElBQUksR0FBRyxlQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUNsRCxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2xDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdkMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN2QixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFDdEQsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBdENEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ1E7SUFIVCxNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBMkMxQjtJQUFELGFBQUM7Q0EzQ0QsQUEyQ0MsQ0EzQ21DLEVBQUUsQ0FBQyxTQUFTLEdBMkMvQztrQkEzQ29CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZSBmcm9tIFwiLi9HYW1lXCI7XHJcbmltcG9ydCBNb2R1bGUgZnJvbSBcIi4vY29tbW9uL01vZHVsZVwiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vY29tbW9uL1V0aWxzXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2tldCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiYXNrZXRPdXQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgZ2FtZTogR2FtZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHBvc1g6IG51bWJlciA9IDU0MDtcclxuICAgIHByaXZhdGUgcG9zWU1pbjogbnVtYmVyID0gLTIwMDtcclxuICAgIHByaXZhdGUgcG9zWU1heDogbnVtYmVyID0gNDAwO1xyXG4gICAgcHJpdmF0ZSBjb2xsaWRlcjFPZmY6IGNjLlZlYzIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjb2xsaWRlcjJPZmY6IGNjLlZlYzIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjb2xsaWRlcjE6IGNjLlBoeXNpY3NDaXJjbGVDb2xsaWRlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIGNvbGxpZGVyMjogY2MuUGh5c2ljc0NpcmNsZUNvbGxpZGVyID0gbnVsbDtcclxuICAgIHByaXZhdGUgYmFza2V0T3V0T2ZmOiBjYy5WZWMzID0gY2MudjMoKTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IE1vZHVsZS5nZXQoR2FtZSk7XHJcbiAgICAgICAgbGV0IGNvbGxpZGVycyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnRzKGNjLlBoeXNpY3NDb2xsaWRlcik7XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlcjEgPSBjb2xsaWRlcnMuZmluZChpdGVtID0+IGl0ZW0udGFnID09PSAxKSBhcyBjYy5QaHlzaWNzQ2lyY2xlQ29sbGlkZXI7XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlcjIgPSBjb2xsaWRlcnMuZmluZChpdGVtID0+IGl0ZW0udGFnID09PSAyKSBhcyBjYy5QaHlzaWNzQ2lyY2xlQ29sbGlkZXI7XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlcjFPZmYgPSB0aGlzLmNvbGxpZGVyMS5vZmZzZXQ7XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlcjJPZmYgPSB0aGlzLmNvbGxpZGVyMi5vZmZzZXQ7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uLnN1Yih0aGlzLmJhc2tldE91dC5wb3NpdGlvbiwgdGhpcy5iYXNrZXRPdXRPZmYpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKumHjee9ruevruetkOS9jee9riDnirbmgIEgKi9cclxuICAgIHB1YmxpYyByZXNldChkaXJlY3Rpb246IG51bWJlcikge1xyXG4gICAgICAgIGxldCBwb3NZID0gVXRpbHMucmFuZG9tSW50KHRoaXMucG9zWU1pbiwgdGhpcy5wb3NZTWF4KSxcclxuICAgICAgICAgICAgcG9zWCA9IHRoaXMucG9zWCAqIGRpcmVjdGlvbjtcclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24ocG9zWCwgcG9zWSk7XHJcbiAgICAgICAgbGV0IG91dE9mZiA9IHRoaXMuYmFza2V0T3V0T2ZmLmNsb25lKCk7XHJcbiAgICAgICAgb3V0T2ZmLnggKj0gLWRpcmVjdGlvbjtcclxuICAgICAgICBsZXQgb3V0UG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uLnN1YihvdXRPZmYpO1xyXG4gICAgICAgIHRoaXMuYmFza2V0T3V0LnNldFBvc2l0aW9uKG91dFBvcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IHRoaXMuYmFza2V0T3V0LnNjYWxlWCA9IC1kaXJlY3Rpb247XHJcbiAgICAgICAgbGV0IHRlbXAxID0gY2MudjIoLWRpcmVjdGlvbiAqIHRoaXMuY29sbGlkZXIxT2ZmLngsIHRoaXMuY29sbGlkZXIxT2ZmLnkpO1xyXG4gICAgICAgIGxldCB0ZW1wMiA9IGNjLnYyKC1kaXJlY3Rpb24gKiB0aGlzLmNvbGxpZGVyMk9mZi54LCB0aGlzLmNvbGxpZGVyMk9mZi55KTtcclxuICAgICAgICB0aGlzLmNvbGxpZGVyMS5vZmZzZXQgPSB0ZW1wMTtcclxuICAgICAgICB0aGlzLmNvbGxpZGVyMi5vZmZzZXQgPSB0ZW1wMjtcclxuICAgICAgICB0aGlzLmNvbGxpZGVyMS5hcHBseSgpO1xyXG4gICAgICAgIHRoaXMuY29sbGlkZXIyLmFwcGx5KCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Clock.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4e160jp+utJt5rBZ4OaEV1e', 'Clock');
// script/Clock.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLOCK_UIMODE = void 0;
var ccclass = cc._decorator.ccclass;
/**计时器显示模式 */
var CLOCK_UIMODE;
(function (CLOCK_UIMODE) {
    CLOCK_UIMODE[CLOCK_UIMODE["none"] = 0] = "none";
    CLOCK_UIMODE[CLOCK_UIMODE["showPassed"] = 1] = "showPassed";
    CLOCK_UIMODE[CLOCK_UIMODE["showRemain"] = 2] = "showRemain"; //显示剩余时间
})(CLOCK_UIMODE = exports.CLOCK_UIMODE || (exports.CLOCK_UIMODE = {}));
/**计时器 */
var Clock = /** @class */ (function () {
    function Clock() {
        this.viewMode = CLOCK_UIMODE.none;
        this.progress = null;
        this.timeLabel = null;
        this.isRunAtBack = false;
        this.cellTime = 0;
        this.endCall = null;
        /**总计时 */
        this.totalTime = 10;
        /**当前累计时间 */
        this._curTime = 0;
    }
    Object.defineProperty(Clock.prototype, "curTime", {
        get: function () {
            return this._curTime;
        },
        set: function (v) {
            if (v < 0)
                v = 0;
            if (v > this.totalTime)
                v = this.totalTime;
            this._curTime = v;
            if (this.viewMode !== CLOCK_UIMODE.none) {
                this.updateView();
            }
        },
        enumerable: false,
        configurable: true
    });
    /**初始化计时器 */
    Clock.prototype.init = function (param) {
        var _a, _b, _c;
        cc.director.getScheduler().enableForTarget(this);
        this.totalTime = param.totalTime;
        this.curTime = (_a = param.curTime) !== null && _a !== void 0 ? _a : 0;
        this.isRunAtBack = (_b = param.isRunAtBack) !== null && _b !== void 0 ? _b : false;
        this.cellTime = (_c = param.cellTime) !== null && _c !== void 0 ? _c : 0.05;
        this.endCall = param.endCall;
        this.viewMode = CLOCK_UIMODE.none;
        return this;
    };
    /**初始化计时器ui */
    Clock.prototype.initView = function (param) {
        var _a;
        this.viewMode = (_a = param.viewMode) !== null && _a !== void 0 ? _a : CLOCK_UIMODE.none;
        this.progress = param.progress;
        this.timeLabel = param.timeLabel;
        this.reset();
        return this;
    };
    /**重置计时 */
    Clock.prototype.reset = function (total) {
        this.stop();
        if (total)
            this.totalTime = total;
        this.curTime = 0;
        return this;
    };
    /**开启定时器 */
    Clock.prototype.start = function () {
        cc.director.getScheduler().schedule(this.step, this, this.cellTime);
    };
    /**停止定时器 */
    Clock.prototype.stop = function () {
        cc.director.getScheduler().unschedule(this.step, this);
    };
    /**计时器执行内容 */
    Clock.prototype.step = function () {
        this.curTime += this.cellTime;
        if (this.curTime >= this.totalTime) {
            this.stop();
            this.endCall && this.endCall();
        }
    };
    /**更新计时视图 */
    Clock.prototype.updateView = function () {
        var val = 0;
        switch (this.viewMode) {
            case CLOCK_UIMODE.showPassed:
                val = this.curTime;
                break;
            case CLOCK_UIMODE.showRemain:
                val = this.totalTime - this.curTime;
                break;
        }
        if (this.timeLabel) {
            var intStr = Math.floor(val).toString();
            if (this.timeLabel.string !== intStr) {
                this.timeLabel.string = intStr;
            }
        }
        if (this.progress) {
            var r = val / this.totalTime;
            this.progress.progress = r;
        }
    };
    Clock = __decorate([
        ccclass
    ], Clock);
    return Clock;
}());
exports.default = Clock;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxDbG9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUSxJQUFBLE9BQU8sR0FBSyxFQUFFLENBQUMsVUFBVSxRQUFsQixDQUFtQjtBQUVsQyxhQUFhO0FBQ2IsSUFBWSxZQUlYO0FBSkQsV0FBWSxZQUFZO0lBQ3BCLCtDQUFJLENBQUE7SUFDSiwyREFBVSxDQUFBO0lBQ1YsMkRBQVUsQ0FBQSxDQUFFLFFBQVE7QUFDeEIsQ0FBQyxFQUpXLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBSXZCO0FBa0JELFNBQVM7QUFFVDtJQUFBO1FBQ1ksYUFBUSxHQUFpQixZQUFZLENBQUMsSUFBSSxDQUFDO1FBQzNDLGFBQVEsR0FBbUIsSUFBSSxDQUFDO1FBQ2hDLGNBQVMsR0FBYSxJQUFJLENBQUM7UUFHM0IsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0IsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixZQUFPLEdBQWEsSUFBSSxDQUFDO1FBQ2pDLFNBQVM7UUFDRCxjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQy9CLFlBQVk7UUFDSixhQUFRLEdBQVcsQ0FBQyxDQUFDO0lBb0ZqQyxDQUFDO0lBbkZHLHNCQUFZLDBCQUFPO2FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7YUFDRCxVQUFvQixDQUFTO1lBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUztnQkFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUMzQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztZQUNsQixJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssWUFBWSxDQUFDLElBQUksRUFBRTtnQkFDckMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ3JCO1FBQ0wsQ0FBQzs7O09BUkE7SUFVRCxZQUFZO0lBQ0wsb0JBQUksR0FBWCxVQUFZLEtBQWtCOztRQUMxQixFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sU0FBRyxLQUFLLENBQUMsT0FBTyxtQ0FBSSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFdBQVcsU0FBRyxLQUFLLENBQUMsV0FBVyxtQ0FBSSxLQUFLLENBQUM7UUFDOUMsSUFBSSxDQUFDLFFBQVEsU0FBRyxLQUFLLENBQUMsUUFBUSxtQ0FBSSxJQUFJLENBQUM7UUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQztRQUNsQyxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsY0FBYztJQUNQLHdCQUFRLEdBQWYsVUFBZ0IsS0FBaUI7O1FBQzdCLElBQUksQ0FBQyxRQUFRLFNBQUcsS0FBSyxDQUFDLFFBQVEsbUNBQUksWUFBWSxDQUFDLElBQUksQ0FBQztRQUNwRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxVQUFVO0lBQ0gscUJBQUssR0FBWixVQUFhLEtBQWM7UUFDdkIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osSUFBSSxLQUFLO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDakIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELFdBQVc7SUFDSixxQkFBSyxHQUFaO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCxXQUFXO0lBQ0osb0JBQUksR0FBWDtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELGFBQWE7SUFDTCxvQkFBSSxHQUFaO1FBQ0ksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzlCLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNaLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2xDO0lBQ0wsQ0FBQztJQUVELFlBQVk7SUFDSiwwQkFBVSxHQUFsQjtRQUNJLElBQUksR0FBRyxHQUFXLENBQUMsQ0FBQztRQUNwQixRQUFRLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbkIsS0FBSyxZQUFZLENBQUMsVUFBVTtnQkFDeEIsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ25CLE1BQU07WUFDVixLQUFLLFlBQVksQ0FBQyxVQUFVO2dCQUN4QixHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNwQyxNQUFNO1NBQ2I7UUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN4QyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxLQUFLLE1BQU0sRUFBRTtnQkFDbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2FBQ2xDO1NBQ0o7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7U0FDOUI7SUFDTCxDQUFDO0lBOUZnQixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBZ0d6QjtJQUFELFlBQUM7Q0FoR0QsQUFnR0MsSUFBQTtrQkFoR29CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbi8qKuiuoeaXtuWZqOaYvuekuuaooeW8jyAqL1xyXG5leHBvcnQgZW51bSBDTE9DS19VSU1PREUge1xyXG4gICAgbm9uZSwgICAgICAgLy/msqHmnIl1aVxyXG4gICAgc2hvd1Bhc3NlZCwgLy/mmL7npLrntK/orqHml7bpl7RcclxuICAgIHNob3dSZW1haW4gIC8v5pi+56S65Ymp5L2Z5pe26Ze0XHJcbn1cclxuXHJcbi8qKuiuoeaXtuWZqOWPguaVsCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDbG9ja1BhcmFtIHtcclxuICAgIHRvdGFsVGltZTogbnVtYmVyOyAgICAgIC8v5oC75pe26Ze0XHJcbiAgICBjdXJUaW1lPzogbnVtYmVyOyAgICAgICAvL+W9k+WJjee0r+iuoeaXtumXtFxyXG4gICAgaXNSdW5BdEJhY2s/OiBmYWxzZTsgICAgLy/mmK/lkKbog73lnKjlkI7lj7Dov5DooYxcclxuICAgIGNlbGxUaW1lPzogbnVtYmVyOyAgICAgICAvL+WPmOWMlumil+eykuW6piDpu5jorqQwLjA1c1xyXG4gICAgZW5kQ2FsbD86IEZ1bmN0aW9uOyAgICAgIC8v57uT5p2f5Zue6LCDXHJcbn1cclxuXHJcbi8qKuiuoeaXtuWZqHVpICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNsb2NrVmlldyB7XHJcbiAgICB2aWV3TW9kZT86IENMT0NLX1VJTU9ERTsgICAvL+aYvuekuuaooeW8j1xyXG4gICAgcHJvZ3Jlc3M/OiBjYy5Qcm9ncmVzc0JhcjsgIC8v6L+b5bqm5p2hXHJcbiAgICB0aW1lTGFiZWw/OiBjYy5MYWJlbDtcclxufVxyXG5cclxuLyoq6K6h5pe25ZmoICovXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsb2NrIHtcclxuICAgIHByaXZhdGUgdmlld01vZGU6IENMT0NLX1VJTU9ERSA9IENMT0NLX1VJTU9ERS5ub25lO1xyXG4gICAgcHJpdmF0ZSBwcm9ncmVzczogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB0aW1lTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBpc1J1bkF0QmFjazogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBjZWxsVGltZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgZW5kQ2FsbDogRnVuY3Rpb24gPSBudWxsO1xyXG4gICAgLyoq5oC76K6h5pe2ICovXHJcbiAgICBwcml2YXRlIHRvdGFsVGltZTogbnVtYmVyID0gMTA7XHJcbiAgICAvKirlvZPliY3ntK/orqHml7bpl7QgKi9cclxuICAgIHByaXZhdGUgX2N1clRpbWU6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGdldCBjdXJUaW1lKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1clRpbWU7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHNldCBjdXJUaW1lKHY6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh2IDwgMCkgdiA9IDA7XHJcbiAgICAgICAgaWYgKHYgPiB0aGlzLnRvdGFsVGltZSkgdiA9IHRoaXMudG90YWxUaW1lO1xyXG4gICAgICAgIHRoaXMuX2N1clRpbWUgPSB2O1xyXG4gICAgICAgIGlmICh0aGlzLnZpZXdNb2RlICE9PSBDTE9DS19VSU1PREUubm9uZSkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5Yid5aeL5YyW6K6h5pe25ZmoICovXHJcbiAgICBwdWJsaWMgaW5pdChwYXJhbTogSUNsb2NrUGFyYW0pOiBDbG9jayB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NoZWR1bGVyKCkuZW5hYmxlRm9yVGFyZ2V0KHRoaXMpO1xyXG4gICAgICAgIHRoaXMudG90YWxUaW1lID0gcGFyYW0udG90YWxUaW1lO1xyXG4gICAgICAgIHRoaXMuY3VyVGltZSA9IHBhcmFtLmN1clRpbWUgPz8gMDtcclxuICAgICAgICB0aGlzLmlzUnVuQXRCYWNrID0gcGFyYW0uaXNSdW5BdEJhY2sgPz8gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jZWxsVGltZSA9IHBhcmFtLmNlbGxUaW1lID8/IDAuMDU7XHJcbiAgICAgICAgdGhpcy5lbmRDYWxsID0gcGFyYW0uZW5kQ2FsbDtcclxuICAgICAgICB0aGlzLnZpZXdNb2RlID0gQ0xPQ0tfVUlNT0RFLm5vbmU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5Yid5aeL5YyW6K6h5pe25ZmodWkgKi9cclxuICAgIHB1YmxpYyBpbml0VmlldyhwYXJhbTogSUNsb2NrVmlldyk6IENsb2NrIHtcclxuICAgICAgICB0aGlzLnZpZXdNb2RlID0gcGFyYW0udmlld01vZGUgPz8gQ0xPQ0tfVUlNT0RFLm5vbmU7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IHBhcmFtLnByb2dyZXNzO1xyXG4gICAgICAgIHRoaXMudGltZUxhYmVsID0gcGFyYW0udGltZUxhYmVsO1xyXG4gICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKirph43nva7orqHml7YgKi9cclxuICAgIHB1YmxpYyByZXNldCh0b3RhbD86IG51bWJlcik6IENsb2NrIHtcclxuICAgICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgICBpZiAodG90YWwpIHRoaXMudG90YWxUaW1lID0gdG90YWw7XHJcbiAgICAgICAgdGhpcy5jdXJUaW1lID0gMDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKirlvIDlkK/lrprml7blmaggKi9cclxuICAgIHB1YmxpYyBzdGFydCgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2hlZHVsZXIoKS5zY2hlZHVsZSh0aGlzLnN0ZXAsIHRoaXMsIHRoaXMuY2VsbFRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuWBnOatouWumuaXtuWZqCAqL1xyXG4gICAgcHVibGljIHN0b3AoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NoZWR1bGVyKCkudW5zY2hlZHVsZSh0aGlzLnN0ZXAsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuiuoeaXtuWZqOaJp+ihjOWGheWuuSAqL1xyXG4gICAgcHJpdmF0ZSBzdGVwKCkge1xyXG4gICAgICAgIHRoaXMuY3VyVGltZSArPSB0aGlzLmNlbGxUaW1lO1xyXG4gICAgICAgIGlmICh0aGlzLmN1clRpbWUgPj0gdGhpcy50b3RhbFRpbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kQ2FsbCAmJiB0aGlzLmVuZENhbGwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5pu05paw6K6h5pe26KeG5Zu+ICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZVZpZXcoKSB7XHJcbiAgICAgICAgbGV0IHZhbDogbnVtYmVyID0gMDtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMudmlld01vZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBDTE9DS19VSU1PREUuc2hvd1Bhc3NlZDpcclxuICAgICAgICAgICAgICAgIHZhbCA9IHRoaXMuY3VyVGltZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENMT0NLX1VJTU9ERS5zaG93UmVtYWluOlxyXG4gICAgICAgICAgICAgICAgdmFsID0gdGhpcy50b3RhbFRpbWUgLSB0aGlzLmN1clRpbWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudGltZUxhYmVsKSB7XHJcbiAgICAgICAgICAgIGxldCBpbnRTdHIgPSBNYXRoLmZsb29yKHZhbCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGltZUxhYmVsLnN0cmluZyAhPT0gaW50U3RyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVMYWJlbC5zdHJpbmcgPSBpbnRTdHI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICAgbGV0IHIgPSB2YWwgLyB0aGlzLnRvdGFsVGltZTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzcy5wcm9ncmVzcyA9IHI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/Module.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6cfb2iIL69LGorIpl7oWwfg', 'Module');
// script/common/Module.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 可以全局访问的单例组件
 */
var Module = /** @class */ (function (_super) {
    __extends(Module, _super);
    function Module() {
        var _this = _super.call(this) || this;
        var name = cc.js.getClassName(_this);
        Module_1.map.set(name, _this);
        return _this;
        // if (!Module.map.get(name)) {
        // }
    }
    Module_1 = Module;
    /**获取模块 */
    Module.get = function (cls) {
        var name = cc.js.getClassName(cls);
        var m = Module_1.map.get(name);
        if (!m)
            console.error("\u8981\u83B7\u53D6\u7684\u6A21\u5757:" + name + "\u5E94\u7EE7\u627FModule\u7C7B");
        return m;
    };
    var Module_1;
    Module.map = new Map();
    Module = Module_1 = __decorate([
        ccclass
    ], Module);
    return Module;
}(cc.Component));
exports.default = Module;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb21tb25cXE1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1Qzs7R0FFRztBQUVIO0lBQTZDLDBCQUFZO0lBVXJEO1FBQUEsWUFDSSxpQkFBTyxTQUtWO1FBSkcsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDcEMsUUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUksQ0FBQyxDQUFDOztRQUMzQiwrQkFBK0I7UUFDL0IsSUFBSTtJQUNSLENBQUM7ZUFoQnlCLE1BQU07SUFFaEMsVUFBVTtJQUNJLFVBQUcsR0FBakIsVUFBb0MsR0FBcUI7UUFDckQsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLEdBQUcsUUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLENBQUM7WUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLDBDQUFVLElBQUksbUNBQVksQ0FBQyxDQUFDO1FBQ2xELE9BQU8sQ0FBQyxDQUFBO0lBQ1osQ0FBQzs7SUFQYyxVQUFHLEdBQXFCLElBQUksR0FBRyxFQUFFLENBQUM7SUFEdkIsTUFBTTtRQURuQyxPQUFPO09BQ3NCLE1BQU0sQ0FvQm5DO0lBQUQsYUFBQztDQXBCRCxBQW9CQyxDQXBCNEMsRUFBRSxDQUFDLFNBQVMsR0FvQnhEO2tCQXBCNkIsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG4vKipcclxuICog5Y+v5Lul5YWo5bGA6K6/6Zeu55qE5Y2V5L6L57uE5Lu2XHJcbiAqL1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBNb2R1bGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbWFwOiBNYXA8c3RyaW5nLCBhbnk+ID0gbmV3IE1hcCgpO1xyXG4gICAgLyoq6I635Y+W5qih5Z2XICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldDxUIGV4dGVuZHMgTW9kdWxlPihjbHM6IHsgcHJvdG90eXBlOiBUIH0pOiBUIHwgbnVsbCB7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBjYy5qcy5nZXRDbGFzc05hbWUoY2xzKTtcclxuICAgICAgICBsZXQgbSA9IE1vZHVsZS5tYXAuZ2V0KG5hbWUpO1xyXG4gICAgICAgIGlmICghbSkgY29uc29sZS5lcnJvcihg6KaB6I635Y+W55qE5qih5Z2XOiR7bmFtZX3lupTnu6fmib9Nb2R1bGXnsbtgKTtcclxuICAgICAgICByZXR1cm4gbVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIGxldCBuYW1lID0gY2MuanMuZ2V0Q2xhc3NOYW1lKHRoaXMpO1xyXG4gICAgICAgIE1vZHVsZS5tYXAuc2V0KG5hbWUsIHRoaXMpO1xyXG4gICAgICAgIC8vIGlmICghTW9kdWxlLm1hcC5nZXQobmFtZSkpIHtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ae91dzv/X1IH6tudLXAOXeQ', 'Game');
// script/Game.ts

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
var Ball_1 = require("./Ball");
var Basket_1 = require("./Basket");
var Clock_1 = require("./Clock");
var CoinMgr_1 = require("./CoinMgr");
var Settle_1 = require("./Settle");
var SoundMgr_1 = require("./SoundMgr");
var EventMgr_1 = require("./common/EventMgr");
var Global_1 = require("./common/Global");
var Module_1 = require("./common/Module");
var NodeFactory_1 = require("./common/NodeFactory");
var Utils_1 = require("./common/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ballNode = null;
        _this.basketNode = null;
        _this.progress = null;
        _this.timeLabel = null;
        _this.scoreLabel = null;
        _this.effectLayer = null;
        _this.starPre = null;
        _this.starLabel = null;
        _this.addTimeBtn = null;
        _this.ball = null;
        _this.basket = null;
        /**当前篮筐方向 左负右正 */
        _this.basketDirection = 1;
        /**是否结束 */
        _this.isTimeEnd = false;
        _this.clock = null;
        _this.isGameOver = false;
        _this.starFactory = null;
        _this._score = 0;
        return _this;
    }
    Object.defineProperty(Game.prototype, "score", {
        get: function () {
            return this._score;
        },
        set: function (v) {
            this._score = v;
            this.scoreLabel.string = v.toString();
        },
        enumerable: false,
        configurable: true
    });
    Game.prototype.onLoad = function () {
        this.ball = this.ballNode.getComponent(Ball_1.default);
        this.basket = this.basketNode.getComponent(Basket_1.default);
        this.addEvents();
        this.initClock();
        this.updateStar(CoinMgr_1.default.ins.getCoin());
        this.starFactory = new NodeFactory_1.NodeFactory().init(this.starPre);
        this.createStar();
        Module_1.default.get(Settle_1.default).hide();
        EventMgr_1.default.ins.on(Global_1.GEvent.coinChanged, this.onCoinChanged, this);
    };
    Game.prototype.onDestroy = function () {
        EventMgr_1.default.ins.off(Global_1.GEvent.coinChanged, this.onCoinChanged, this);
    };
    Game.prototype.show = function () {
        this.node.active = true;
        this.node.runAction(cc.fadeIn(1));
        this.newGame();
    };
    Game.prototype.hide = function () {
        var _this = this;
        this.node.runAction(cc.fadeOut(1));
        setTimeout(function () {
            _this.node.active = false;
        }, 1000);
    };
    Game.prototype.addEvents = function () {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.addTimeBtn.node.on("click", this.onAddTime, this);
    };
    Game.prototype.initClock = function () {
        var param = {
            totalTime: 5,
            endCall: this.onTimeEnd.bind(this)
        };
        var uiParam = {
            viewMode: Clock_1.CLOCK_UIMODE.showRemain,
            progress: this.progress,
            timeLabel: this.timeLabel,
        };
        var clock = this.clock = new Clock_1.default();
        clock.init(param).initView(uiParam);
    };
    Game.prototype.newGame = function () {
        this.clock.reset();
        this.basketDirection = -1;
        this.basket.reset(this.basketDirection);
        this.ball.reset();
        this.isTimeEnd = false;
        this.score = 0;
        this.isGameOver = false;
        this.addTimeBtn.interactable = false;
    };
    Game.prototype.onTouchEnd = function (e) {
        if (this.isTimeEnd)
            return;
        this.ball.jump();
    };
    Game.prototype.onAddTime = function () {
        Module_1.default.get(SoundMgr_1.default).playBtnSound();
        if (this.isTimeEnd)
            return;
        var remainStar = CoinMgr_1.default.ins.getCoin();
        if (remainStar < 10)
            return;
        CoinMgr_1.default.ins.changeCoin(-10);
        this.clock.reset().start();
    };
    /**达成目标 */
    Game.prototype.onHitBasket = function () {
        Module_1.default.get(SoundMgr_1.default).playEffect(Global_1.SoundPath.fresh);
        this.score++;
        this.basketDirection *= -1;
        this.basket.reset(this.basketDirection);
        this.clock.reset().start();
        this.isTimeEnd = false;
        this.addTimeBtn.interactable = true;
    };
    Game.prototype.createStar = function () {
        var star = this.starFactory.get();
        star.parent = this.effectLayer;
        var x = Utils_1.default.randomInt(-250, 250), y = Utils_1.default.randomInt(-450, 450);
        star.setPosition(x, y);
    };
    Game.prototype.onHitStar = function (starNode) {
        Module_1.default.get(SoundMgr_1.default).playEffect(Global_1.SoundPath.bubble);
        this.starFactory.put(starNode);
        CoinMgr_1.default.ins.changeCoin(1);
        this.createStar();
    };
    Game.prototype.onCoinChanged = function () {
        var num = CoinMgr_1.default.ins.getCoin();
        this.updateStar(num);
    };
    Game.prototype.updateStar = function (num) {
        this.starLabel.string = num.toString();
    };
    Game.prototype.onTimeEnd = function () {
        this.isTimeEnd = true;
        this.addTimeBtn.interactable = false;
        if (this.ball.isOnGround) {
            this.gameOver();
        }
    };
    Game.prototype.gameOver = function () {
        if (!this.isGameOver) {
            this.isGameOver = true;
            Module_1.default.get(Settle_1.default).show(this.score);
        }
    };
    __decorate([
        property(cc.Node)
    ], Game.prototype, "ballNode", void 0);
    __decorate([
        property(cc.Node)
    ], Game.prototype, "basketNode", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], Game.prototype, "progress", void 0);
    __decorate([
        property(cc.Label)
    ], Game.prototype, "timeLabel", void 0);
    __decorate([
        property(cc.Label)
    ], Game.prototype, "scoreLabel", void 0);
    __decorate([
        property(cc.Node)
    ], Game.prototype, "effectLayer", void 0);
    __decorate([
        property(cc.Prefab)
    ], Game.prototype, "starPre", void 0);
    __decorate([
        property(cc.Label)
    ], Game.prototype, "starLabel", void 0);
    __decorate([
        property(cc.Button)
    ], Game.prototype, "addTimeBtn", void 0);
    Game = __decorate([
        ccclass
    ], Game);
    return Game;
}(Module_1.default));
exports.default = Game;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUEwQjtBQUMxQixtQ0FBOEI7QUFDOUIsaUNBQXVFO0FBQ3ZFLHFDQUFnQztBQUVoQyxtQ0FBOEI7QUFDOUIsdUNBQWtDO0FBQ2xDLDhDQUF5QztBQUN6QywwQ0FBb0Q7QUFDcEQsMENBQXFDO0FBQ3JDLG9EQUFtRDtBQUNuRCx3Q0FBbUM7QUFHN0IsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQU07SUFBeEM7UUFBQSxxRUEyS0M7UUF6S0csY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixjQUFRLEdBQW1CLElBQUksQ0FBQztRQUdoQyxlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRzNCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRzVCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFHMUIsZUFBUyxHQUFhLElBQUksQ0FBQztRQUczQixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUVyQixVQUFJLEdBQVMsSUFBSSxDQUFDO1FBQ2xCLFlBQU0sR0FBVyxJQUFJLENBQUM7UUFDOUIsaUJBQWlCO1FBQ1YscUJBQWUsR0FBVyxDQUFDLENBQUM7UUFDbkMsVUFBVTtRQUNILGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDMUIsV0FBSyxHQUFVLElBQUksQ0FBQztRQUNwQixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixpQkFBVyxHQUFnQixJQUFJLENBQUM7UUFFaEMsWUFBTSxHQUFXLENBQUMsQ0FBQzs7SUFxSS9CLENBQUM7SUFwSUcsc0JBQVksdUJBQUs7YUFBakI7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFD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RzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ1E7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs0Q0FDUztJQTFCWixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBMkt4QjtJQUFELFdBQUM7Q0EzS0QsQUEyS0MsQ0EzS2lDLGdCQUFNLEdBMkt2QztrQkEzS29CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFsbCBmcm9tIFwiLi9CYWxsXCI7XHJcbmltcG9ydCBCYXNrZXQgZnJvbSBcIi4vQmFza2V0XCI7XHJcbmltcG9ydCBDbG9jaywgeyBDTE9DS19VSU1PREUsIElDbG9ja1BhcmFtLCBJQ2xvY2tWaWV3IH0gZnJvbSBcIi4vQ2xvY2tcIjtcclxuaW1wb3J0IENvaW5NZ3IgZnJvbSBcIi4vQ29pbk1nclwiO1xyXG5pbXBvcnQgTGF1bmNoIGZyb20gXCIuL0xhdW5jaFwiO1xyXG5pbXBvcnQgU2V0dGxlIGZyb20gXCIuL1NldHRsZVwiO1xyXG5pbXBvcnQgU291bmRNZ3IgZnJvbSBcIi4vU291bmRNZ3JcIjtcclxuaW1wb3J0IEV2ZW50TWdyIGZyb20gXCIuL2NvbW1vbi9FdmVudE1nclwiO1xyXG5pbXBvcnQgeyBHRXZlbnQsIFNvdW5kUGF0aCB9IGZyb20gXCIuL2NvbW1vbi9HbG9iYWxcIjtcclxuaW1wb3J0IE1vZHVsZSBmcm9tIFwiLi9jb21tb24vTW9kdWxlXCI7XHJcbmltcG9ydCB7IE5vZGVGYWN0b3J5IH0gZnJvbSBcIi4vY29tbW9uL05vZGVGYWN0b3J5XCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9jb21tb24vVXRpbHNcIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSBleHRlbmRzIE1vZHVsZSB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhbGxOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhc2tldE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Qcm9ncmVzc0JhcilcclxuICAgIHByb2dyZXNzOiBjYy5Qcm9ncmVzc0JhciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgdGltZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgc2NvcmVMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZWZmZWN0TGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzdGFyUHJlOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHN0YXJMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBhZGRUaW1lQnRuOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgYmFsbDogQmFsbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIGJhc2tldDogQmFza2V0ID0gbnVsbDtcclxuICAgIC8qKuW9k+WJjeevruetkOaWueWQkSDlt6botJ/lj7PmraMgKi9cclxuICAgIHB1YmxpYyBiYXNrZXREaXJlY3Rpb246IG51bWJlciA9IDE7XHJcbiAgICAvKirmmK/lkKbnu5PmnZ8gKi9cclxuICAgIHB1YmxpYyBpc1RpbWVFbmQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgY2xvY2s6IENsb2NrID0gbnVsbDtcclxuICAgIHByaXZhdGUgaXNHYW1lT3ZlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBzdGFyRmFjdG9yeTogTm9kZUZhY3RvcnkgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgX3Njb3JlOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBnZXQgc2NvcmUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2NvcmU7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHNldCBzY29yZSh2OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zY29yZSA9IHY7XHJcbiAgICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IHYudG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYmFsbCA9IHRoaXMuYmFsbE5vZGUuZ2V0Q29tcG9uZW50KEJhbGwpO1xyXG4gICAgICAgIHRoaXMuYmFza2V0ID0gdGhpcy5iYXNrZXROb2RlLmdldENvbXBvbmVudChCYXNrZXQpO1xyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRzKCk7XHJcbiAgICAgICAgdGhpcy5pbml0Q2xvY2soKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXIoQ29pbk1nci5pbnMuZ2V0Q29pbigpKTtcclxuICAgICAgICB0aGlzLnN0YXJGYWN0b3J5ID0gbmV3IE5vZGVGYWN0b3J5KCkuaW5pdCh0aGlzLnN0YXJQcmUpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlU3RhcigpO1xyXG4gICAgICAgIE1vZHVsZS5nZXQoU2V0dGxlKS5oaWRlKCk7XHJcbiAgICAgICAgRXZlbnRNZ3IuaW5zLm9uKEdFdmVudC5jb2luQ2hhbmdlZCwgdGhpcy5vbkNvaW5DaGFuZ2VkLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIEV2ZW50TWdyLmlucy5vZmYoR0V2ZW50LmNvaW5DaGFuZ2VkLCB0aGlzLm9uQ29pbkNoYW5nZWQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2MuZmFkZUluKDEpKTtcclxuICAgICAgICB0aGlzLm5ld0dhbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGlkZSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLmZhZGVPdXQoMSkpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRFdmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmFkZFRpbWVCdG4ubm9kZS5vbihgY2xpY2tgLCB0aGlzLm9uQWRkVGltZSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0Q2xvY2soKSB7XHJcbiAgICAgICAgbGV0IHBhcmFtOiBJQ2xvY2tQYXJhbSA9IHtcclxuICAgICAgICAgICAgdG90YWxUaW1lOiA1LFxyXG4gICAgICAgICAgICBlbmRDYWxsOiB0aGlzLm9uVGltZUVuZC5iaW5kKHRoaXMpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbGV0IHVpUGFyYW06IElDbG9ja1ZpZXcgPSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlOiBDTE9DS19VSU1PREUuc2hvd1JlbWFpbixcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6IHRoaXMucHJvZ3Jlc3MsXHJcbiAgICAgICAgICAgIHRpbWVMYWJlbDogdGhpcy50aW1lTGFiZWwsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjbG9jayA9IHRoaXMuY2xvY2sgPSBuZXcgQ2xvY2soKTtcclxuICAgICAgICBjbG9jay5pbml0KHBhcmFtKS5pbml0Vmlldyh1aVBhcmFtKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmV3R2FtZSgpIHtcclxuICAgICAgICB0aGlzLmNsb2NrLnJlc2V0KCk7XHJcbiAgICAgICAgdGhpcy5iYXNrZXREaXJlY3Rpb24gPSAtMTtcclxuICAgICAgICB0aGlzLmJhc2tldC5yZXNldCh0aGlzLmJhc2tldERpcmVjdGlvbik7XHJcbiAgICAgICAgdGhpcy5iYWxsLnJlc2V0KCk7XHJcbiAgICAgICAgdGhpcy5pc1RpbWVFbmQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgICAgICB0aGlzLmlzR2FtZU92ZXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFkZFRpbWVCdG4uaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblRvdWNoRW5kKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1RpbWVFbmQpIHJldHVybjtcclxuICAgICAgICB0aGlzLmJhbGwuanVtcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25BZGRUaW1lKCkge1xyXG4gICAgICAgIE1vZHVsZS5nZXQoU291bmRNZ3IpLnBsYXlCdG5Tb3VuZCgpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzVGltZUVuZCkgcmV0dXJuO1xyXG4gICAgICAgIGxldCByZW1haW5TdGFyID0gQ29pbk1nci5pbnMuZ2V0Q29pbigpO1xyXG4gICAgICAgIGlmIChyZW1haW5TdGFyIDwgMTApIHJldHVybjtcclxuICAgICAgICBDb2luTWdyLmlucy5jaGFuZ2VDb2luKC0xMCk7XHJcbiAgICAgICAgdGhpcy5jbG9jay5yZXNldCgpLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq6L6+5oiQ55uu5qCHICovXHJcbiAgICBwdWJsaWMgb25IaXRCYXNrZXQoKSB7XHJcbiAgICAgICAgTW9kdWxlLmdldChTb3VuZE1ncikucGxheUVmZmVjdChTb3VuZFBhdGguZnJlc2gpO1xyXG4gICAgICAgIHRoaXMuc2NvcmUrKztcclxuICAgICAgICB0aGlzLmJhc2tldERpcmVjdGlvbiAqPSAtMTtcclxuICAgICAgICB0aGlzLmJhc2tldC5yZXNldCh0aGlzLmJhc2tldERpcmVjdGlvbik7XHJcbiAgICAgICAgdGhpcy5jbG9jay5yZXNldCgpLnN0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy5pc1RpbWVFbmQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFkZFRpbWVCdG4uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZVN0YXIoKSB7XHJcbiAgICAgICAgbGV0IHN0YXIgPSB0aGlzLnN0YXJGYWN0b3J5LmdldCgpO1xyXG4gICAgICAgIHN0YXIucGFyZW50ID0gdGhpcy5lZmZlY3RMYXllcjtcclxuICAgICAgICBsZXQgeCA9IFV0aWxzLnJhbmRvbUludCgtMjUwLCAyNTApLFxyXG4gICAgICAgICAgICB5ID0gVXRpbHMucmFuZG9tSW50KC00NTAsIDQ1MCk7XHJcbiAgICAgICAgc3Rhci5zZXRQb3NpdGlvbih4LCB5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25IaXRTdGFyKHN0YXJOb2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgTW9kdWxlLmdldChTb3VuZE1ncikucGxheUVmZmVjdChTb3VuZFBhdGguYnViYmxlKTtcclxuICAgICAgICB0aGlzLnN0YXJGYWN0b3J5LnB1dChzdGFyTm9kZSk7XHJcbiAgICAgICAgQ29pbk1nci5pbnMuY2hhbmdlQ29pbigxKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVN0YXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQ29pbkNoYW5nZWQoKSB7XHJcbiAgICAgICAgbGV0IG51bSA9IENvaW5NZ3IuaW5zLmdldENvaW4oKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXIobnVtKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVN0YXIobnVtOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnN0YXJMYWJlbC5zdHJpbmcgPSBudW0udG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uVGltZUVuZCgpIHtcclxuICAgICAgICB0aGlzLmlzVGltZUVuZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hZGRUaW1lQnRuLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLmJhbGwuaXNPbkdyb3VuZCkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnYW1lT3ZlcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNHYW1lT3Zlcikge1xyXG4gICAgICAgICAgICB0aGlzLmlzR2FtZU92ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICBNb2R1bGUuZ2V0KFNldHRsZSkuc2hvdyh0aGlzLnNjb3JlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/SoundMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '09818ewnU5JcrEFsD6ahw2F', 'SoundMgr');
// script/SoundMgr.ts

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
var Global_1 = require("./common/Global");
var Module_1 = require("./common/Module");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SoundMgr = /** @class */ (function (_super) {
    __extends(SoundMgr, _super);
    function SoundMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.audioSource = null;
        _this.soundBtn = null;
        _this.muteNode = null;
        _this.notMuteNode = null;
        /**缓存声音资源 */
        _this.clips = new Map();
        return _this;
    }
    SoundMgr.prototype.onLoad = function () {
        this.soundBtn.node.on('click', this.switchSound, this);
    };
    SoundMgr.prototype.switchSound = function () {
        this.playBtnSound();
        var isMute = this.audioSource.mute = !this.audioSource.mute;
        if (this.muteNode)
            this.muteNode.active = isMute;
        if (this.notMuteNode)
            this.notMuteNode.active = !isMute;
    };
    /**
     * 播放音效文件
     * @param path 音效路径，相对于resources
     */
    SoundMgr.prototype.playEffect = function (path) {
        var _this = this;
        var clip = this.clips.get(path);
        if (clip)
            cc.audioEngine.play(clip, false, 0.5);
        else {
            cc.resources.load(path, cc.AudioClip, function (error, clip) {
                if (!error) {
                    _this.clips.set(path, clip);
                    cc.audioEngine.play(clip, false, 0.5);
                }
            });
        }
    };
    SoundMgr.prototype.playBtnSound = function () {
        this.playEffect(Global_1.SoundPath.button);
    };
    __decorate([
        property(cc.AudioSource)
    ], SoundMgr.prototype, "audioSource", void 0);
    __decorate([
        property(cc.Button)
    ], SoundMgr.prototype, "soundBtn", void 0);
    __decorate([
        property(cc.Node)
    ], SoundMgr.prototype, "muteNode", void 0);
    __decorate([
        property(cc.Node)
    ], SoundMgr.prototype, "notMuteNode", void 0);
    SoundMgr = __decorate([
        ccclass
    ], SoundMgr);
    return SoundMgr;
}(Module_1.default));
exports.default = SoundMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxTb3VuZE1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBNEM7QUFDNUMsMENBQXFDO0FBRy9CLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBTTVDO0lBQXNDLDRCQUFNO0lBQTVDO1FBQUEscUVBZ0RDO1FBOUNHLGlCQUFXLEdBQW1CLElBQUksQ0FBQztRQUduQyxjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRzNCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsWUFBWTtRQUNKLFdBQUssR0FBOEIsSUFBSSxHQUFHLEVBQUUsQ0FBQzs7SUFrQ3pELENBQUM7SUFoQ2EseUJBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVPLDhCQUFXLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDNUQsSUFBSSxJQUFJLENBQUMsUUFBUTtZQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNqRCxJQUFJLElBQUksQ0FBQyxXQUFXO1lBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDNUQsQ0FBQztJQUVEOzs7T0FHRztJQUNJLDZCQUFVLEdBQWpCLFVBQWtCLElBQVk7UUFBOUIsaUJBV0M7UUFWRyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxJQUFJLElBQUk7WUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQzNDO1lBQ0QsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBQyxLQUFLLEVBQUUsSUFBa0I7Z0JBQzVELElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQ1IsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUMzQixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUN6QztZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRU0sK0JBQVksR0FBbkI7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQTVDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO2lEQUNVO0lBR25DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OENBQ087SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNVO0lBWFgsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWdENUI7SUFBRCxlQUFDO0NBaERELEFBZ0RDLENBaERxQyxnQkFBTSxHQWdEM0M7a0JBaERvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU291bmRQYXRoIH0gZnJvbSBcIi4vY29tbW9uL0dsb2JhbFwiO1xyXG5pbXBvcnQgTW9kdWxlIGZyb20gXCIuL2NvbW1vbi9Nb2R1bGVcIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuXHJcblxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU291bmRNZ3IgZXh0ZW5kcyBNb2R1bGUge1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgYXVkaW9Tb3VyY2U6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgc291bmRCdG46IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtdXRlTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBub3RNdXRlTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLyoq57yT5a2Y5aOw6Z+z6LWE5rqQICovXHJcbiAgICBwcml2YXRlIGNsaXBzOiBNYXA8c3RyaW5nLCBjYy5BdWRpb0NsaXA+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zb3VuZEJ0bi5ub2RlLm9uKCdjbGljaycsIHRoaXMuc3dpdGNoU291bmQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3dpdGNoU291bmQoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5QnRuU291bmQoKTtcclxuICAgICAgICBsZXQgaXNNdXRlID0gdGhpcy5hdWRpb1NvdXJjZS5tdXRlID0gIXRoaXMuYXVkaW9Tb3VyY2UubXV0ZTtcclxuICAgICAgICBpZiAodGhpcy5tdXRlTm9kZSkgdGhpcy5tdXRlTm9kZS5hY3RpdmUgPSBpc011dGU7XHJcbiAgICAgICAgaWYgKHRoaXMubm90TXV0ZU5vZGUpIHRoaXMubm90TXV0ZU5vZGUuYWN0aXZlID0gIWlzTXV0ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaSreaUvumfs+aViOaWh+S7tlxyXG4gICAgICogQHBhcmFtIHBhdGgg6Z+z5pWI6Lev5b6E77yM55u45a+55LqOcmVzb3VyY2VzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwbGF5RWZmZWN0KHBhdGg6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGxldCBjbGlwID0gdGhpcy5jbGlwcy5nZXQocGF0aCk7XHJcbiAgICAgICAgaWYgKGNsaXApIGNjLmF1ZGlvRW5naW5lLnBsYXkoY2xpcCwgZmFsc2UsIDAuNSk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHBhdGgsIGNjLkF1ZGlvQ2xpcCwgKGVycm9yLCBjbGlwOiBjYy5BdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaXBzLnNldChwYXRoLCBjbGlwKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KGNsaXAsIGZhbHNlLCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBsYXlCdG5Tb3VuZCgpIHtcclxuICAgICAgICB0aGlzLnBsYXlFZmZlY3QoU291bmRQYXRoLmJ1dHRvbik7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Launch.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
        _this.canStart = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxMYXVuY2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EscUNBQWdDO0FBQ2hDLCtCQUEwQjtBQUMxQix1Q0FBa0M7QUFDbEMsOENBQXlDO0FBQ3pDLDBDQUFpRDtBQUNqRCwwQ0FBcUM7QUFHL0IsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0MsMEJBQU07SUFBMUM7UUFBQSxxRUFzRUM7UUFuRUcsY0FBUSxHQUFjLElBQUksQ0FBQztRQUczQixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRzNCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFFbEIsY0FBUSxHQUFZLElBQUksQ0FBQzs7SUEyRHJDLENBQUM7SUF6RGEsdUJBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JELGtCQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxlQUFNLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFUywwQkFBUyxHQUFuQjtRQUNJLGtCQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFNLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVPLGdDQUFlLEdBQXZCO1FBQ0ksZ0JBQU0sQ0FBQyxHQUFHLENBQUMsa0JBQVEsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU87UUFDM0IsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osZ0JBQU0sQ0FBQyxHQUFHLENBQUMsY0FBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVPLDJCQUFVLEdBQWxCO1FBQ0ksZ0JBQU0sQ0FBQyxHQUFHLENBQUMsa0JBQVEsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRU0scUJBQUksR0FBWDtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLFVBQVUsQ0FBQztZQUNQLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBRU0scUJBQUksR0FBWDtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxVQUFVLENBQUM7WUFDUCxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN6QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBRU8sMkJBQVUsR0FBbEIsVUFBbUIsR0FBVztRQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVPLDhCQUFhLEdBQXJCO1FBQ0ksSUFBSSxHQUFHLEdBQUcsaUJBQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRU8sNEJBQVcsR0FBbkI7UUFBQSxpQkFRQztRQVBHLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLGVBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2hFLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFjO1lBQzNELElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ04sSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDO2FBQzNCO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBbEVEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NENBQ087SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs2Q0FDUTtJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzJDQUNNO0lBVFQsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQXNFMUI7SUFBRCxhQUFDO0NBdEVELEFBc0VDLENBdEVtQyxnQkFBTSxHQXNFekM7a0JBdEVvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBDb2luTWdyIGZyb20gXCIuL0NvaW5NZ3JcIjtcclxuaW1wb3J0IEdhbWUgZnJvbSBcIi4vR2FtZVwiO1xyXG5pbXBvcnQgU291bmRNZ3IgZnJvbSBcIi4vU291bmRNZ3JcIjtcclxuaW1wb3J0IEV2ZW50TWdyIGZyb20gXCIuL2NvbW1vbi9FdmVudE1nclwiO1xyXG5pbXBvcnQgeyBHQ29uc3QsIEdFdmVudCB9IGZyb20gXCIuL2NvbW1vbi9HbG9iYWxcIjtcclxuaW1wb3J0IE1vZHVsZSBmcm9tIFwiLi9jb21tb24vTW9kdWxlXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhdW5jaCBleHRlbmRzIE1vZHVsZSB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHN0YXJ0QnRuOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHN0YXJMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBzaG9wQnRuOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgY2FuU3RhcnQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdGFydEJ0bi5ub2RlLm9uKCdjbGljaycsIHRoaXMub25DbGlja1N0YXJ0QnRuLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnNob3BCdG4ubm9kZS5vbihgY2xpY2tgLCB0aGlzLm9uT3BlblNob3AsIHRoaXMpO1xyXG4gICAgICAgIEV2ZW50TWdyLmlucy5vbihHRXZlbnQuY29pbkNoYW5nZWQsIHRoaXMub25Db2luQ2hhbmdlZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGFyKENvaW5NZ3IuaW5zLmdldENvaW4oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICBFdmVudE1nci5pbnMub2ZmKEdFdmVudC5jb2luQ2hhbmdlZCwgdGhpcy5vbkNvaW5DaGFuZ2VkLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQ2xpY2tTdGFydEJ0bigpIHtcclxuICAgICAgICBNb2R1bGUuZ2V0KFNvdW5kTWdyKS5wbGF5QnRuU291bmQoKTtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuU3RhcnQpIHJldHVybjtcclxuICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICBNb2R1bGUuZ2V0KEdhbWUpLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uT3BlblNob3AoKSB7XHJcbiAgICAgICAgTW9kdWxlLmdldChTb3VuZE1ncikucGxheUJ0blNvdW5kKCk7XHJcbiAgICAgICAgdGhpcy5hZGRTaG9wVmlldygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoaWRlKCkge1xyXG4gICAgICAgIHRoaXMuY2FuU3RhcnQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLmZhZGVPdXQoMSkpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3coKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5mYWRlSW4oMSkpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNhblN0YXJ0ID0gdHJ1ZTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVN0YXIobnVtOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnN0YXJMYWJlbC5zdHJpbmcgPSBudW0udG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQ29pbkNoYW5nZWQoKSB7XHJcbiAgICAgICAgbGV0IG51bSA9IENvaW5NZ3IuaW5zLmdldENvaW4oKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXIobnVtKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZFNob3BWaWV3KCkge1xyXG4gICAgICAgIGxldCBidW5kbGUgPSBjYy5hc3NldE1hbmFnZXIuZ2V0QnVuZGxlKEdDb25zdC5jdXN0b21Db21wQnVuZGxlKTtcclxuICAgICAgICBidW5kbGUubG9hZChgc2hvcC9wcmVmYWIvU2hvcGAsIGNjLlByZWZhYiwgKGVyciwgcHJlOiBjYy5QcmVmYWIpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFlcnIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlKTtcclxuICAgICAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd1a96ycNr1MIrcF/4jN+ueB', 'Main');
// script/Main.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = require("./Game");
var Launch_1 = require("./Launch");
var Global_1 = require("./common/Global");
var Module_1 = require("./common/Module");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.onLoad = function () {
        this.init();
    };
    Main.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadBundle()];
                    case 1:
                        _a.sent();
                        cc.director.getPhysicsManager().enabled = true;
                        cc.director.getCollisionManager().enabled = true;
                        // cc.director.getPhysicsManager().debugDrawFlags = 1;
                        // cc.director.getCollisionManager().enabledDebugDraw = true;
                        // cc.director.getCollisionManager().enabledDrawBoundingBox = true;
                        Module_1.default.get(Game_1.default).hide();
                        Module_1.default.get(Launch_1.default).show();
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadBundle = function () {
        return new Promise(function (resolve, reject) {
            cc.assetManager.loadBundle(Global_1.GConst.customCompBundle, function (err, bundle) {
                if (!err) {
                    resolve();
                }
                else {
                    reject();
                }
            });
        });
    };
    Main = __decorate([
        ccclass
    ], Main);
    return Main;
}(cc.Component));
exports.default = Main;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxNYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUEwQjtBQUMxQixtQ0FBOEI7QUFDOUIsMENBQXlDO0FBQ3pDLDBDQUFxQztBQUcvQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFrQyx3QkFBWTtJQUE5Qzs7SUE4QkEsQ0FBQztJQTNCYSxxQkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRWEsbUJBQUksR0FBbEI7Ozs7NEJBQ0kscUJBQU0sSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFBOzt3QkFBdkIsU0FBdUIsQ0FBQzt3QkFDeEIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7d0JBQy9DLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO3dCQUNqRCxzREFBc0Q7d0JBQ3RELDZEQUE2RDt3QkFDN0QsbUVBQW1FO3dCQUNuRSxnQkFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDeEIsZ0JBQU0sQ0FBQyxHQUFHLENBQUMsZ0JBQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDOzs7OztLQUU3QjtJQUVPLHlCQUFVLEdBQWxCO1FBQ0ksT0FBTyxJQUFJLE9BQU8sQ0FBTyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ3JDLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLGVBQU0sQ0FBQyxnQkFBZ0IsRUFBRSxVQUFDLEdBQUcsRUFBRSxNQUFNO2dCQUM1RCxJQUFJLENBQUMsR0FBRyxFQUFFO29CQUNOLE9BQU8sRUFBRSxDQUFDO2lCQUNiO3FCQUFNO29CQUNILE1BQU0sRUFBRSxDQUFDO2lCQUNaO1lBQ0wsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUE3QmdCLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0E4QnhCO0lBQUQsV0FBQztDQTlCRCxBQThCQyxDQTlCaUMsRUFBRSxDQUFDLFNBQVMsR0E4QjdDO2tCQTlCb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lIGZyb20gXCIuL0dhbWVcIjtcclxuaW1wb3J0IExhdW5jaCBmcm9tIFwiLi9MYXVuY2hcIjtcclxuaW1wb3J0IHsgR0NvbnN0IH0gZnJvbSBcIi4vY29tbW9uL0dsb2JhbFwiO1xyXG5pbXBvcnQgTW9kdWxlIGZyb20gXCIuL2NvbW1vbi9Nb2R1bGVcIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBpbml0KCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMubG9hZEJ1bmRsZSgpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZGVidWdEcmF3RmxhZ3MgPSAxO1xyXG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkRGVidWdEcmF3ID0gdHJ1ZTtcclxuICAgICAgICAvLyBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZERyYXdCb3VuZGluZ0JveCA9IHRydWU7XHJcbiAgICAgICAgTW9kdWxlLmdldChHYW1lKS5oaWRlKCk7XHJcbiAgICAgICAgTW9kdWxlLmdldChMYXVuY2gpLnNob3coKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkQnVuZGxlKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkQnVuZGxlKEdDb25zdC5jdXN0b21Db21wQnVuZGxlLCAoZXJyLCBidW5kbGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Ball.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ace8bQtzCZAUZ8MtpATmFlM', 'Ball');
// script/Ball.ts

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
var Game_1 = require("./Game");
var SoundMgr_1 = require("./SoundMgr");
var Global_1 = require("./common/Global");
var Module_1 = require("./common/Module");
var Utils_1 = require("./common/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**单个格子 */
var Ball = /** @class */ (function (_super) {
    __extends(Ball, _super);
    function Ball() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ballSp = null;
        _this.Game = null;
        _this.rigid = null;
        _this.posGroup = null;
        _this.speed = cc.v2();
        _this.isEffectHit = false; //篮框碰撞开始是否有效
        /**跳跃时球的速度标量 */
        _this.jumpSpeedX = 500;
        _this.jumpSpeedY = 1800;
        _this.isOnGround = false; //球在地上
        return _this;
    }
    Ball.prototype.onLoad = function () {
        this.Game = Module_1.default.get(Game_1.default);
        this.rigid = this.node.getComponent(cc.RigidBody);
        this.posGroup = new Global_1.Vec2Group();
    };
    /**重置到初始状态，暂停物理组件 */
    Ball.prototype.reset = function () {
        this.rigid.type = cc.RigidBodyType.Static;
        this.setSpeed(0, 0);
        this.node.setPosition(0, 0);
        this.isEffectHit = false;
        var path = "shop/texture/ball/lanqiu" + Global_1.Global.ins.shopPickType;
        Utils_1.default.dynamicSpriteInBundle(this.ballSp, Global_1.GConst.customCompBundle, path);
    };
    /**触发跳跃 */
    Ball.prototype.jump = function () {
        if (this.rigid.type === cc.RigidBodyType.Static)
            this.rigid.type = cc.RigidBodyType.Dynamic;
        this.setSpeed(this.jumpSpeedX * this.Game.basketDirection, this.jumpSpeedY);
    };
    Ball.prototype.update = function (dt) {
        var pos = this.node.position;
        if (pos.x < -640) {
            this.node.x += 1280;
        }
        else if (pos.x > 640) {
            this.node.x -= 1280;
        }
    };
    /**设置速度 */
    Ball.prototype.setSpeed = function (x, y) {
        this.speed.x = x;
        this.speed.y = y;
        this.rigid.linearVelocity = this.speed;
    };
    /**获取速度 */
    Ball.prototype.getSpeed = function () {
        return this.rigid.linearVelocity;
    };
    Ball.prototype.onCollisionEnter = function (other, self) {
        if (other.node.group === 'basket') {
            var isDown = this.getSpeed().y < 0;
            this.isEffectHit = isDown;
        }
        if (other.node.group === "ground") {
            Module_1.default.get(SoundMgr_1.default).playEffect(Global_1.SoundPath.hitGround);
            this.isOnGround = true;
            if (this.Game.isTimeEnd)
                this.Game.gameOver();
        }
        if (other.node.group === "star") {
            this.Game.onHitStar(other.node);
        }
    };
    Ball.prototype.onCollisionExit = function (other, self) {
        if (other.node.group === 'basket' && this.isEffectHit) {
            this.isEffectHit = false;
            var isDown = this.getSpeed().y < 0;
            if (isDown) {
                this.Game.onHitBasket();
            }
        }
        if (other.node.group === "ground") {
            this.isOnGround = false;
        }
    };
    __decorate([
        property(cc.Sprite)
    ], Ball.prototype, "ballSp", void 0);
    Ball = __decorate([
        ccclass
    ], Ball);
    return Ball;
}(cc.Component));
exports.default = Ball;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxCYWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUEwQjtBQUMxQix1Q0FBa0M7QUFDbEMsMENBQXVFO0FBQ3ZFLDBDQUFxQztBQUNyQyx3Q0FBbUM7QUFJN0IsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsVUFBVTtBQUVWO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBd0ZDO1FBckZHLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFFakIsVUFBSSxHQUFTLElBQUksQ0FBQztRQUNsQixXQUFLLEdBQWlCLElBQUksQ0FBQztRQUMzQixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBQzNCLFdBQUssR0FBWSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDekIsaUJBQVcsR0FBWSxLQUFLLENBQUMsQ0FBSSxZQUFZO1FBQ3JELGVBQWU7UUFDUixnQkFBVSxHQUFXLEdBQUcsQ0FBQztRQUN6QixnQkFBVSxHQUFXLElBQUksQ0FBQztRQUMxQixnQkFBVSxHQUFZLEtBQUssQ0FBQyxDQUFRLE1BQU07O0lBMkVyRCxDQUFDO0lBekVhLHFCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxnQkFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFJLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksa0JBQVMsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxvQkFBb0I7SUFDYixvQkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFD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QyxXQUFXLEVBQUU7WUFDbkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDekIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkMsSUFBSSxNQUFNLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUMzQjtTQUNKO1FBQ0QsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7U0FDM0I7SUFDTCxDQUFDO0lBbEZEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7d0NBQ0s7SUFIUixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBd0Z4QjtJQUFELFdBQUM7Q0F4RkQsQUF3RkMsQ0F4RmlDLEVBQUUsQ0FBQyxTQUFTLEdBd0Y3QztrQkF4Rm9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZSBmcm9tIFwiLi9HYW1lXCI7XHJcbmltcG9ydCBTb3VuZE1nciBmcm9tIFwiLi9Tb3VuZE1nclwiO1xyXG5pbXBvcnQgeyBHQ29uc3QsIEdsb2JhbCwgU291bmRQYXRoLCBWZWMyR3JvdXAgfSBmcm9tIFwiLi9jb21tb24vR2xvYmFsXCI7XHJcbmltcG9ydCBNb2R1bGUgZnJvbSBcIi4vY29tbW9uL01vZHVsZVwiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vY29tbW9uL1V0aWxzXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG4vKirljZXkuKrmoLzlrZAgKi9cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFsbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGJhbGxTcDogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIEdhbWU6IEdhbWUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSByaWdpZDogY2MuUmlnaWRCb2R5ID0gbnVsbDtcclxuICAgIHByaXZhdGUgcG9zR3JvdXA6IFZlYzJHcm91cCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHNwZWVkOiBjYy5WZWMyID0gY2MudjIoKTtcclxuICAgIHByaXZhdGUgaXNFZmZlY3RIaXQ6IGJvb2xlYW4gPSBmYWxzZTsgICAgLy/nr67moYbnorDmkp7lvIDlp4vmmK/lkKbmnInmlYhcclxuICAgIC8qKui3s+i3g+aXtueQg+eahOmAn+W6puagh+mHjyAqL1xyXG4gICAgcHVibGljIGp1bXBTcGVlZFg6IG51bWJlciA9IDUwMDtcclxuICAgIHB1YmxpYyBqdW1wU3BlZWRZOiBudW1iZXIgPSAxODAwO1xyXG4gICAgcHVibGljIGlzT25Hcm91bmQ6IGJvb2xlYW4gPSBmYWxzZTsgICAgICAgIC8v55CD5Zyo5Zyw5LiKXHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLkdhbWUgPSBNb2R1bGUuZ2V0KEdhbWUpO1xyXG4gICAgICAgIHRoaXMucmlnaWQgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgdGhpcy5wb3NHcm91cCA9IG5ldyBWZWMyR3JvdXAoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirph43nva7liLDliJ3lp4vnirbmgIHvvIzmmoLlgZzniannkIbnu4Tku7YgKi9cclxuICAgIHB1YmxpYyByZXNldCgpIHtcclxuICAgICAgICB0aGlzLnJpZ2lkLnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLlN0YXRpYztcclxuICAgICAgICB0aGlzLnNldFNwZWVkKDAsIDApO1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuICAgICAgICB0aGlzLmlzRWZmZWN0SGl0ID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IHBhdGggPSBgc2hvcC90ZXh0dXJlL2JhbGwvbGFucWl1JHtHbG9iYWwuaW5zLnNob3BQaWNrVHlwZX1gO1xyXG4gICAgICAgIFV0aWxzLmR5bmFtaWNTcHJpdGVJbkJ1bmRsZSh0aGlzLmJhbGxTcCwgR0NvbnN0LmN1c3RvbUNvbXBCdW5kbGUsIHBhdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuinpuWPkei3s+i3gyAqL1xyXG4gICAgcHVibGljIGp1bXAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucmlnaWQudHlwZSA9PT0gY2MuUmlnaWRCb2R5VHlwZS5TdGF0aWMpXHJcbiAgICAgICAgICAgIHRoaXMucmlnaWQudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuRHluYW1pYztcclxuICAgICAgICB0aGlzLnNldFNwZWVkKHRoaXMuanVtcFNwZWVkWCAqIHRoaXMuR2FtZS5iYXNrZXREaXJlY3Rpb24sIHRoaXMuanVtcFNwZWVkWSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMubm9kZS5wb3NpdGlvbjtcclxuICAgICAgICBpZiAocG9zLnggPCAtNjQwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IDEyODA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwb3MueCA+IDY0MCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUueCAtPSAxMjgwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKirorr7nva7pgJ/luqYgKi9cclxuICAgIHByaXZhdGUgc2V0U3BlZWQoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNwZWVkLnggPSB4O1xyXG4gICAgICAgIHRoaXMuc3BlZWQueSA9IHk7XHJcbiAgICAgICAgdGhpcy5yaWdpZC5saW5lYXJWZWxvY2l0eSA9IHRoaXMuc3BlZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq6I635Y+W6YCf5bqmICovXHJcbiAgICBwcml2YXRlIGdldFNwZWVkKCk6IGNjLlZlYzIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJpZ2lkLmxpbmVhclZlbG9jaXR5O1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpIHtcclxuICAgICAgICBpZiAob3RoZXIubm9kZS5ncm91cCA9PT0gJ2Jhc2tldCcpIHtcclxuICAgICAgICAgICAgbGV0IGlzRG93biA9IHRoaXMuZ2V0U3BlZWQoKS55IDwgMDtcclxuICAgICAgICAgICAgdGhpcy5pc0VmZmVjdEhpdCA9IGlzRG93bjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG90aGVyLm5vZGUuZ3JvdXAgPT09IGBncm91bmRgKSB7XHJcbiAgICAgICAgICAgIE1vZHVsZS5nZXQoU291bmRNZ3IpLnBsYXlFZmZlY3QoU291bmRQYXRoLmhpdEdyb3VuZCk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNPbkdyb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLkdhbWUuaXNUaW1lRW5kKSB0aGlzLkdhbWUuZ2FtZU92ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG90aGVyLm5vZGUuZ3JvdXAgPT09IGBzdGFyYCkge1xyXG4gICAgICAgICAgICB0aGlzLkdhbWUub25IaXRTdGFyKG90aGVyLm5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNvbGxpc2lvbkV4aXQob3RoZXIsIHNlbGYpIHtcclxuICAgICAgICBpZiAob3RoZXIubm9kZS5ncm91cCA9PT0gJ2Jhc2tldCcgJiYgdGhpcy5pc0VmZmVjdEhpdCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzRWZmZWN0SGl0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCBpc0Rvd24gPSB0aGlzLmdldFNwZWVkKCkueSA8IDA7XHJcbiAgICAgICAgICAgIGlmIChpc0Rvd24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZS5vbkhpdEJhc2tldCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvdGhlci5ub2RlLmdyb3VwID09PSBgZ3JvdW5kYCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzT25Hcm91bmQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Settle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '21ae56ierhF3LaZnmYra6VP', 'Settle');
// script/Settle.ts

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
var Game_1 = require("./Game");
var Launch_1 = require("./Launch");
var SoundMgr_1 = require("./SoundMgr");
var Module_1 = require("./common/Module");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Settle = /** @class */ (function (_super) {
    __extends(Settle, _super);
    function Settle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scoreLabel = null;
        _this.backBtn = null;
        _this.againBtn = null;
        return _this;
    }
    Settle.prototype.onLoad = function () {
        this.backBtn.node.on("click", this.onBack, this);
        this.againBtn.node.on("click", this.onAgain, this);
    };
    Settle.prototype.onBack = function () {
        Module_1.default.get(SoundMgr_1.default).playBtnSound();
        this.hide();
        Module_1.default.get(Game_1.default).hide();
        Module_1.default.get(Launch_1.default).show();
    };
    Settle.prototype.onAgain = function () {
        Module_1.default.get(SoundMgr_1.default).playBtnSound();
        this.hide();
        Module_1.default.get(Game_1.default).newGame();
    };
    Settle.prototype.show = function (score) {
        this.node.active = true;
        this.scoreLabel.string = score.toString();
    };
    Settle.prototype.hide = function () {
        this.node.active = false;
    };
    __decorate([
        property(cc.Label)
    ], Settle.prototype, "scoreLabel", void 0);
    __decorate([
        property(cc.Button)
    ], Settle.prototype, "backBtn", void 0);
    __decorate([
        property(cc.Button)
    ], Settle.prototype, "againBtn", void 0);
    Settle = __decorate([
        ccclass
    ], Settle);
    return Settle;
}(Module_1.default));
exports.default = Settle;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxTZXR0bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQTBCO0FBQzFCLG1DQUE4QjtBQUM5Qix1Q0FBa0M7QUFDbEMsMENBQXFDO0FBRy9CLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFNO0lBQTFDO1FBQUEscUVBc0NDO1FBbkNHLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRzVCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFHMUIsY0FBUSxHQUFjLElBQUksQ0FBQzs7SUE2Qi9CLENBQUM7SUEzQmEsdUJBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFTyx1QkFBTSxHQUFkO1FBQ0ksZ0JBQU0sQ0FBQyxHQUFHLENBQUMsa0JBQVEsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLGdCQUFNLENBQUMsR0FBRyxDQUFDLGNBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hCLGdCQUFNLENBQUMsR0FBRyxDQUFDLGdCQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRU8sd0JBQU8sR0FBZjtRQUNJLGdCQUFNLENBQUMsR0FBRyxDQUFDLGtCQUFRLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWixnQkFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRU0scUJBQUksR0FBWCxVQUFZLEtBQWE7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBRU0scUJBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBakNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OENBQ1M7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsyQ0FDTTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzRDQUNPO0lBVFYsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQXNDMUI7SUFBRCxhQUFDO0NBdENELEFBc0NDLENBdENtQyxnQkFBTSxHQXNDekM7a0JBdENvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWUgZnJvbSBcIi4vR2FtZVwiO1xyXG5pbXBvcnQgTGF1bmNoIGZyb20gXCIuL0xhdW5jaFwiO1xyXG5pbXBvcnQgU291bmRNZ3IgZnJvbSBcIi4vU291bmRNZ3JcIjtcclxuaW1wb3J0IE1vZHVsZSBmcm9tIFwiLi9jb21tb24vTW9kdWxlXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRsZSBleHRlbmRzIE1vZHVsZSB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgc2NvcmVMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBiYWNrQnRuOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBhZ2FpbkJ0bjogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYmFja0J0bi5ub2RlLm9uKGBjbGlja2AsIHRoaXMub25CYWNrLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmFnYWluQnRuLm5vZGUub24oYGNsaWNrYCwgdGhpcy5vbkFnYWluLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQmFjaygpIHtcclxuICAgICAgICBNb2R1bGUuZ2V0KFNvdW5kTWdyKS5wbGF5QnRuU291bmQoKTtcclxuICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICBNb2R1bGUuZ2V0KEdhbWUpLmhpZGUoKTtcclxuICAgICAgICBNb2R1bGUuZ2V0KExhdW5jaCkuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25BZ2FpbigpIHtcclxuICAgICAgICBNb2R1bGUuZ2V0KFNvdW5kTWdyKS5wbGF5QnRuU291bmQoKTtcclxuICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICBNb2R1bGUuZ2V0KEdhbWUpLm5ld0dhbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvdyhzY29yZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IHNjb3JlLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhpZGUoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/Move.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '32119R+QKNDIa9awVzD61/M', 'Move');
// script/common/Move.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pool = /** @class */ (function () {
    function Pool() {
        this.pool = [];
    }
    Object.defineProperty(Pool.prototype, "size", {
        get: function () {
            return this.pool.length;
        },
        enumerable: false,
        configurable: true
    });
    Pool.prototype.get = function () {
        return this.pool.shift();
    };
    Pool.prototype.put = function (item) {
        this.pool.push(item);
    };
    return Pool;
}());
/**
 * 自定义位移动画
 */
var Move = /** @class */ (function () {
    function Move() {
        this.target = null;
        //private container: cc.Node = null;
        this.startNode = null;
        this.endNode = null;
        //运动时间 ms
        this.duration = 1000;
        //最新调用的动画
        this.animation = 0;
        this.startTime = 0;
        this.endTime = 0;
        this.startPos = null;
        this.endPos = null;
        this.p0 = cc.v2(0, 0); //起点
        this.p1 = cc.v2(0, 0); //相对终点
        this.c1 = undefined; //控制点1参数 
        this.c2 = undefined; //控制点2参数 
        this.pc1 = cc.v2(0, 0); //控制点1 实际坐标
        this.pc2 = cc.v2(0, 0); //控制点2 实际坐标
        this.isAbsoluteCtrl = false; //控制点是否使用绝对坐标
        this.isFirstFrame = true;
        this.setPos = null;
        this.onComplete = null;
        this.isMoveComplete = false;
        this.timeout = 0; //检验动作是否完成定时器
    }
    /**
     * 获取一个运动实例
     */
    Move.getInstance = function () {
        var move = null;
        move = this.movePool.size > 0 ? this.movePool.get() : new Move();
        move.init();
        return move;
    };
    /**
     * 回收一个运动实例
     */
    Move.putInstance = function (item) {
        item.onNotUse();
        this.movePool.put(item);
    };
    Move.prototype.init = function () {
        // game.EventManager.getInstance().addEventListener(game.Const.mess_windowResize, this.onResize, this);
    };
    Move.prototype.onNotUse = function () {
        // game.EventManager.getInstance().removeEventListener(game.Const.mess_windowResize, this.onResize, this);
    };
    Move.prototype.onResize = function () {
        this.updateAllPosition();
    };
    /**
     * 设置运动参数
     * @param target        运动主体
     * @param startNode     起点
     * @param endNode       终点
     * @param duration      运动时间 ms
     * @param isAbsoluteCtrl 控制点类型：绝对坐标/相对距离的比例 （默认选用比例来表示控制点）
     * @param c1            贝塞尔曲线控制点1   分量小于1时表示 起点到终点的比例
     * @param c2            贝塞尔曲线控制点2   分量小于1时表示 起点到终点的比例
     * @returns
     */
    Move.prototype.setParams = function (target, startNode, endNode, duration, isAbsoluteCtrl, c1, c2) {
        this.target = target;
        this.startNode = startNode;
        this.endNode = endNode;
        this.duration = duration;
        this.isAbsoluteCtrl = isAbsoluteCtrl;
        this.c1 = c1;
        this.c2 = c2;
        return this;
    };
    Move.prototype.run = function (call) {
        var _this = this;
        //切后台情况下 用定时器同步目标位置 加50ms为了保证正常情况下优先走正常流程
        this.timeout = setTimeout(function () {
            if (!_this.isMoveComplete) {
                _this.setPos(1);
                _this.stop();
            }
        }, this.duration + 50);
        this.isMoveComplete = false;
        //未被计算位置时第一帧隐藏
        this.target.active = false;
        this.isFirstFrame = true;
        this.startTime = Date.now();
        this.endTime = this.startTime + this.duration;
        this.updateAllPosition();
        this.setPos = this.c1 ? this.c2 ? this.setPosByBezier3.bind(this) : this.setPosByBezier2.bind(this) : this.setPosByLine.bind(this);
        this.animation = requestAnimationFrame(this.loop.bind(this));
        if (call)
            this.onComplete = call;
        return this;
    };
    /**
     * 停止这个动作
     * @param DoComplete
     */
    Move.prototype.stop = function (DoComplete) {
        if (DoComplete === void 0) { DoComplete = true; }
        this.isMoveComplete = true;
        this.target.active = true;
        cancelAnimationFrame(this.animation);
        Move.putInstance(this);
        if (DoComplete && this.onComplete) {
            this.onComplete();
            this.onComplete = null;
        }
    };
    /**
     * 更新起始点位置
     */
    Move.prototype.updateAllPosition = function () {
        if (!(this.startNode && this.endNode && this.target.parent))
            return;
        this.startPos = this.startNode.convertToWorldSpaceAR(cc.v2(0, 0));
        this.endPos = this.endNode.convertToWorldSpaceAR(cc.v2(0, 0));
        this.startPos = this.target.parent.convertToNodeSpaceAR(this.startPos);
        this.endPos = this.target.parent.convertToNodeSpaceAR(this.endPos);
        this.p1 = this.endPos.sub(this.startPos);
        if (this.c1) {
            var rad = this.p1.angle(cc.v2(1, 0)); //0-pi
            if (this.p1.y < 0)
                rad = -rad;
            var len = this.p1.len();
            this.unifyPos(this.pc1, this.c1, len);
            this.pc1.rotateSelf(rad);
            if (this.c2) {
                this.unifyPos(this.pc2, this.c2, len);
                this.pc2.rotateSelf(rad);
            }
        }
    };
    Move.prototype.loop = function (time) {
        if (this.isMoveComplete)
            return;
        var now = Date.now();
        if (now > this.endTime) {
            this.setPos(1);
            this.stop();
            clearTimeout(this.timeout);
            return;
        }
        if (this.isFirstFrame) {
            this.isFirstFrame = false;
            this.target.active = true;
        }
        var t = (now - this.startTime) / this.duration;
        this.setPos(t);
        this.animation = requestAnimationFrame(this.loop.bind(this));
    };
    //一次曲线（直线）计算位置
    Move.prototype.setPosByLine = function (t) {
        var tempX = t * this.p1.x, tempY = t * this.p1.y;
        this.target.x = this.startPos.x + tempX;
        this.target.y = this.startPos.y + tempY;
    };
    //二次曲线计算位置
    Move.prototype.setPosByBezier2 = function (t) {
        var b = 2 * t * (1 - t), c = Math.pow(t, 2);
        var tempX = b * this.pc1.x + c * this.p1.x, tempY = b * this.pc1.y + c * this.p1.y;
        this.target.x = this.startPos.x + tempX;
        this.target.y = this.startPos.y + tempY;
    };
    //三次曲线计算位置
    Move.prototype.setPosByBezier3 = function (t) {
        var b = 3 * t * Math.pow((1 - t), 2), c = 3 * (1 - t) * Math.pow(t, 2), d = Math.pow(t, 3);
        var tempX = b * this.pc1.x + c * this.pc2.x + d * this.p1.x, tempY = b * this.pc1.y + c * this.pc2.y + d * this.p1.y;
        this.target.x = this.startPos.x + tempX;
        this.target.y = this.startPos.y + tempY;
    };
    /**
     * 统一坐标
     * @param target 要改造的向量
     * @param v 比例参数
     * @param len 比例参考长度
     */
    Move.prototype.unifyPos = function (target, v, len) {
        var ratio = this.isAbsoluteCtrl ? 1 : len;
        target.x = v.x * ratio;
        target.y = v.y * ratio;
    };
    Move.movePool = new Pool();
    return Move;
}());
exports.default = Move;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb21tb25cXE1vdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO1FBQ1ksU0FBSSxHQUFVLEVBQUUsQ0FBQztJQWE3QixDQUFDO0lBWEcsc0JBQVcsc0JBQUk7YUFBZjtZQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFFTSxrQkFBRyxHQUFWO1FBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFTSxrQkFBRyxHQUFWLFVBQVcsSUFBUztRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0wsV0FBQztBQUFELENBZEEsQUFjQyxJQUFBO0FBR0Q7O0dBRUc7QUFDSDtJQUFBO1FBd0JZLFdBQU0sR0FBWSxJQUFJLENBQUM7UUFDL0Isb0NBQW9DO1FBQzVCLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsWUFBTyxHQUFZLElBQUksQ0FBQztRQUNoQyxTQUFTO1FBQ0QsYUFBUSxHQUFXLElBQUksQ0FBQztRQUVoQyxTQUFTO1FBQ0QsY0FBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLFlBQU8sR0FBVyxDQUFDLENBQUM7UUFFcEIsYUFBUSxHQUFZLElBQUksQ0FBQztRQUN6QixXQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLE9BQUUsR0FBWSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFNLElBQUk7UUFDcEMsT0FBRSxHQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQU0sTUFBTTtRQUN0QyxPQUFFLEdBQVksU0FBUyxDQUFDLENBQWEsU0FBUztRQUM5QyxPQUFFLEdBQVksU0FB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QUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDNUMsQ0FBQztJQUVELFVBQVU7SUFDRiw4QkFBZSxHQUF2QixVQUF3QixDQUFTO1FBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ25CLENBQUMsR0FBRyxTQUFBLENBQUMsRUFBSSxDQUFDLENBQUEsQ0FBQztRQUNmLElBQUksS0FBSyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ3RDLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDNUMsQ0FBQztJQUVELFVBQVU7SUFDRiw4QkFBZSxHQUF2QixVQUF3QixDQUFTO1FBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBQSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBSSxDQUFDLENBQUEsRUFDeEIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxTQUFBLENBQUMsRUFBSSxDQUFDLENBQUEsRUFDeEIsQ0FBQyxHQUFHLFNBQUEsQ0FBQyxFQUFJLENBQUMsQ0FBQSxDQUFDO1FBQ2YsSUFBSSxLQUFLLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ3ZELEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQzVDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNLLHVCQUFRLEdBQWhCLFVBQWlCLE1BQWUsRUFBRSxDQUFVLEVBQUUsR0FBVztRQUNyRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUMxQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQWhOYyxhQUFRLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQWtOL0MsV0FBQztDQW5ORCxBQW1OQyxJQUFBO2tCQW5Ob0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBvb2wge1xyXG4gICAgcHJpdmF0ZSBwb29sOiBhbnlbXSA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgc2l6ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb29sLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9vbC5zaGlmdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwdXQoaXRlbTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5wb29sLnB1c2goaXRlbSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKipcclxuICog6Ieq5a6a5LmJ5L2N56e75Yqo55S7XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIG1vdmVQb29sOiBQb29sID0gbmV3IFBvb2woKTtcclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5LiA5Liq6L+Q5Yqo5a6e5L6LXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogTW92ZSB7XHJcbiAgICAgICAgbGV0IG1vdmU6IE1vdmUgPSBudWxsO1xyXG4gICAgICAgIG1vdmUgPSB0aGlzLm1vdmVQb29sLnNpemUgPiAwID8gdGhpcy5tb3ZlUG9vbC5nZXQoKSA6IG5ldyBNb3ZlKCk7XHJcbiAgICAgICAgbW92ZS5pbml0KCk7XHJcbiAgICAgICAgcmV0dXJuIG1vdmU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlm57mlLbkuIDkuKrov5Dliqjlrp7kvotcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcHV0SW5zdGFuY2UoaXRlbTogTW92ZSkge1xyXG4gICAgICAgIGl0ZW0ub25Ob3RVc2UoKTtcclxuICAgICAgICB0aGlzLm1vdmVQb29sLnB1dChpdGVtKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSB0YXJnZXQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLy9wcml2YXRlIGNvbnRhaW5lcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHN0YXJ0Tm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGVuZE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLy/ov5Dliqjml7bpl7QgbXNcclxuICAgIHByaXZhdGUgZHVyYXRpb246IG51bWJlciA9IDEwMDA7XHJcblxyXG4gICAgLy/mnIDmlrDosIPnlKjnmoTliqjnlLtcclxuICAgIHByaXZhdGUgYW5pbWF0aW9uOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBzdGFydFRpbWU6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGVuZFRpbWU6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGFydFBvczogY2MuVmVjMiA9IG51bGw7XHJcbiAgICBwcml2YXRlIGVuZFBvczogY2MuVmVjMiA9IG51bGw7XHJcblxyXG5cclxuICAgIHByaXZhdGUgcDA6IGNjLlZlYzIgPSBjYy52MigwLCAwKTsgICAgICAvL+i1t+eCuVxyXG4gICAgcHJpdmF0ZSBwMTogY2MuVmVjMiA9IGNjLnYyKDAsIDApOyAgICAgIC8v55u45a+557uI54K5XHJcbiAgICBwcml2YXRlIGMxOiBjYy5WZWMyID0gdW5kZWZpbmVkOyAgICAgICAgICAgICAvL+aOp+WItueCuTHlj4LmlbAgXHJcbiAgICBwcml2YXRlIGMyOiBjYy5WZWMyID0gdW5kZWZpbmVkOyAgICAgICAgICAgICAvL+aOp+WItueCuTLlj4LmlbAgXHJcbiAgICBwcml2YXRlIHBjMTogY2MuVmVjMiA9IGNjLnYyKDAsIDApOyAgICAgICAgICAvL+aOp+WItueCuTEg5a6e6ZmF5Z2Q5qCHXHJcbiAgICBwcml2YXRlIHBjMjogY2MuVmVjMiA9IGNjLnYyKDAsIDApOyAgICAgICAgICAvL+aOp+WItueCuTIg5a6e6ZmF5Z2Q5qCHXHJcbiAgICBwcml2YXRlIGlzQWJzb2x1dGVDdHJsOiBib29sZWFuID0gZmFsc2U7ICAgICAvL+aOp+WItueCueaYr+WQpuS9v+eUqOe7neWvueWdkOagh1xyXG5cclxuICAgIHByaXZhdGUgaXNGaXJzdEZyYW1lOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBwcml2YXRlIHNldFBvczogRnVuY3Rpb24gPSBudWxsO1xyXG4gICAgcHVibGljIG9uQ29tcGxldGU6IEZ1bmN0aW9uID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGlzTW92ZUNvbXBsZXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHRpbWVvdXQ6IG51bWJlciA9IDA7ICAgICAgICAgICAgLy/mo4DpqozliqjkvZzmmK/lkKblrozmiJDlrprml7blmahcclxuXHJcbiAgICBwcml2YXRlIGluaXQoKSB7XHJcbiAgICAgICAgLy8gZ2FtZS5FdmVudE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5hZGRFdmVudExpc3RlbmVyKGdhbWUuQ29uc3QubWVzc193aW5kb3dSZXNpemUsIHRoaXMub25SZXNpemUsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Ob3RVc2UoKSB7XHJcbiAgICAgICAgLy8gZ2FtZS5FdmVudE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5yZW1vdmVFdmVudExpc3RlbmVyKGdhbWUuQ29uc3QubWVzc193aW5kb3dSZXNpemUsIHRoaXMub25SZXNpemUsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25SZXNpemUoKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVBbGxQb3NpdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u6L+Q5Yqo5Y+C5pWwXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0ICAgICAgICDov5DliqjkuLvkvZNcclxuICAgICAqIEBwYXJhbSBzdGFydE5vZGUgICAgIOi1t+eCuVxyXG4gICAgICogQHBhcmFtIGVuZE5vZGUgICAgICAg57uI54K5XHJcbiAgICAgKiBAcGFyYW0gZHVyYXRpb24gICAgICDov5Dliqjml7bpl7QgbXMgXHJcbiAgICAgKiBAcGFyYW0gaXNBYnNvbHV0ZUN0cmwg5o6n5Yi254K557G75Z6L77ya57ud5a+55Z2Q5qCHL+ebuOWvuei3neemu+eahOavlOS+iyDvvIjpu5jorqTpgInnlKjmr5TkvovmnaXooajnpLrmjqfliLbngrnvvIlcclxuICAgICAqIEBwYXJhbSBjMSAgICAgICAgICAgIOi0neWhnuWwlOabsue6v+aOp+WItueCuTEgICDliIbph4/lsI/kuo4x5pe26KGo56S6IOi1t+eCueWIsOe7iOeCueeahOavlOS+i1xyXG4gICAgICogQHBhcmFtIGMyICAgICAgICAgICAg6LSd5aGe5bCU5puy57q/5o6n5Yi254K5MiAgIOWIhumHj+Wwj+S6jjHml7booajnpLog6LW354K55Yiw57uI54K555qE5q+U5L6LXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldFBhcmFtcyh0YXJnZXQ6IGNjLk5vZGUsIHN0YXJ0Tm9kZTogY2MuTm9kZSwgZW5kTm9kZTogY2MuTm9kZSwgZHVyYXRpb246IG51bWJlciwgaXNBYnNvbHV0ZUN0cmw/OiBib29sZWFuLCBjMT86IGNjLlZlYzIsIGMyPzogY2MuVmVjMik6IE1vdmUge1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgICAgIHRoaXMuc3RhcnROb2RlID0gc3RhcnROb2RlO1xyXG4gICAgICAgIHRoaXMuZW5kTm9kZSA9IGVuZE5vZGU7XHJcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xyXG4gICAgICAgIHRoaXMuaXNBYnNvbHV0ZUN0cmwgPSBpc0Fic29sdXRlQ3RybDtcclxuICAgICAgICB0aGlzLmMxID0gYzE7XHJcbiAgICAgICAgdGhpcy5jMiA9IGMyO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBydW4oY2FsbD86IEZ1bmN0aW9uKTogTW92ZSB7XHJcbiAgICAgICAgLy/liIflkI7lj7Dmg4XlhrXkuIsg55So5a6a5pe25Zmo5ZCM5q2l55uu5qCH5L2N572uIOWKoDUwbXPkuLrkuobkv53or4HmraPluLjmg4XlhrXkuIvkvJjlhYjotbDmraPluLjmtYHnqItcclxuICAgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzTW92ZUNvbXBsZXRlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBvcygxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcy5kdXJhdGlvbiArIDUwKTtcclxuICAgICAgICB0aGlzLmlzTW92ZUNvbXBsZXRlID0gZmFsc2U7XHJcbiAgICAgICAgLy/mnKrooqvorqHnrpfkvY3nva7ml7bnrKzkuIDluKfpmpDol49cclxuICAgICAgICB0aGlzLnRhcmdldC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzRmlyc3RGcmFtZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuZW5kVGltZSA9IHRoaXMuc3RhcnRUaW1lICsgdGhpcy5kdXJhdGlvbjtcclxuICAgICAgICB0aGlzLnVwZGF0ZUFsbFBvc2l0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5zZXRQb3MgPSB0aGlzLmMxID8gdGhpcy5jMiA/IHRoaXMuc2V0UG9zQnlCZXppZXIzLmJpbmQodGhpcykgOiB0aGlzLnNldFBvc0J5QmV6aWVyMi5iaW5kKHRoaXMpIDogdGhpcy5zZXRQb3NCeUxpbmUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxvb3AuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgaWYgKGNhbGwpIHRoaXMub25Db21wbGV0ZSA9IGNhbGw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlgZzmraLov5nkuKrliqjkvZxcclxuICAgICAqIEBwYXJhbSBEb0NvbXBsZXRlIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RvcChEb0NvbXBsZXRlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXNNb3ZlQ29tcGxldGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb24pO1xyXG4gICAgICAgIE1vdmUucHV0SW5zdGFuY2UodGhpcyk7XHJcbiAgICAgICAgaWYgKERvQ29tcGxldGUgJiYgdGhpcy5vbkNvbXBsZXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25Db21wbGV0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLm9uQ29tcGxldGUgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsOi1t+Wni+eCueS9jee9rlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdXBkYXRlQWxsUG9zaXRpb24oKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCEodGhpcy5zdGFydE5vZGUgJiYgdGhpcy5lbmROb2RlICYmIHRoaXMudGFyZ2V0LnBhcmVudCkpIHJldHVybjtcclxuICAgICAgICB0aGlzLnN0YXJ0UG9zID0gdGhpcy5zdGFydE5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcclxuICAgICAgICB0aGlzLmVuZFBvcyA9IHRoaXMuZW5kTm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRQb3MgPSB0aGlzLnRhcmdldC5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIodGhpcy5zdGFydFBvcyk7XHJcbiAgICAgICAgdGhpcy5lbmRQb3MgPSB0aGlzLnRhcmdldC5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIodGhpcy5lbmRQb3MpO1xyXG4gICAgICAgIHRoaXMucDEgPSB0aGlzLmVuZFBvcy5zdWIodGhpcy5zdGFydFBvcyk7XHJcbiAgICAgICAgaWYgKHRoaXMuYzEpIHtcclxuICAgICAgICAgICAgbGV0IHJhZCA9IHRoaXMucDEuYW5nbGUoY2MudjIoMSwgMCkpOyAgICAgICAvLzAtcGlcclxuICAgICAgICAgICAgaWYgKHRoaXMucDEueSA8IDApIHJhZCA9IC1yYWQ7XHJcbiAgICAgICAgICAgIGxldCBsZW4gPSB0aGlzLnAxLmxlbigpO1xyXG4gICAgICAgICAgICB0aGlzLnVuaWZ5UG9zKHRoaXMucGMxLCB0aGlzLmMxLCBsZW4pO1xyXG4gICAgICAgICAgICB0aGlzLnBjMS5yb3RhdGVTZWxmKHJhZCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmMyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVuaWZ5UG9zKHRoaXMucGMyLCB0aGlzLmMyLCBsZW4pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYzIucm90YXRlU2VsZihyYWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBsb29wKHRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTW92ZUNvbXBsZXRlKSByZXR1cm47XHJcbiAgICAgICAgbGV0IG5vdyA9IERhdGUubm93KCk7XHJcbiAgICAgICAgaWYgKG5vdyA+IHRoaXMuZW5kVGltZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFBvcygxKTtcclxuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzRmlyc3RGcmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzRmlyc3RGcmFtZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdCA9IChub3cgLSB0aGlzLnN0YXJ0VGltZSkgLyB0aGlzLmR1cmF0aW9uO1xyXG4gICAgICAgIHRoaXMuc2V0UG9zKHQpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy/kuIDmrKHmm7Lnur/vvIjnm7Tnur/vvInorqHnrpfkvY3nva5cclxuICAgIHByaXZhdGUgc2V0UG9zQnlMaW5lKHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGxldCB0ZW1wWCA9IHQgKiB0aGlzLnAxLngsXHJcbiAgICAgICAgICAgIHRlbXBZID0gdCAqIHRoaXMucDEueTtcclxuICAgICAgICB0aGlzLnRhcmdldC54ID0gdGhpcy5zdGFydFBvcy54ICsgdGVtcFg7XHJcbiAgICAgICAgdGhpcy50YXJnZXQueSA9IHRoaXMuc3RhcnRQb3MueSArIHRlbXBZO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5LqM5qyh5puy57q/6K6h566X5L2N572uXHJcbiAgICBwcml2YXRlIHNldFBvc0J5QmV6aWVyMih0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBsZXQgYiA9IDIgKiB0ICogKDEgLSB0KSxcclxuICAgICAgICAgICAgYyA9IHQgKiogMjtcclxuICAgICAgICBsZXQgdGVtcFggPSBiICogdGhpcy5wYzEueCArIGMgKiB0aGlzLnAxLngsXHJcbiAgICAgICAgICAgIHRlbXBZID0gYiAqIHRoaXMucGMxLnkgKyBjICogdGhpcy5wMS55O1xyXG4gICAgICAgIHRoaXMudGFyZ2V0LnggPSB0aGlzLnN0YXJ0UG9zLnggKyB0ZW1wWDtcclxuICAgICAgICB0aGlzLnRhcmdldC55ID0gdGhpcy5zdGFydFBvcy55ICsgdGVtcFk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/kuInmrKHmm7Lnur/orqHnrpfkvY3nva5cclxuICAgIHByaXZhdGUgc2V0UG9zQnlCZXppZXIzKHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGxldCBiID0gMyAqIHQgKiAoMSAtIHQpICoqIDIsXHJcbiAgICAgICAgICAgIGMgPSAzICogKDEgLSB0KSAqIHQgKiogMixcclxuICAgICAgICAgICAgZCA9IHQgKiogMztcclxuICAgICAgICBsZXQgdGVtcFggPSBiICogdGhpcy5wYzEueCArIGMgKiB0aGlzLnBjMi54ICsgZCAqIHRoaXMucDEueCxcclxuICAgICAgICAgICAgdGVtcFkgPSBiICogdGhpcy5wYzEueSArIGMgKiB0aGlzLnBjMi55ICsgZCAqIHRoaXMucDEueTtcclxuICAgICAgICB0aGlzLnRhcmdldC54ID0gdGhpcy5zdGFydFBvcy54ICsgdGVtcFg7XHJcbiAgICAgICAgdGhpcy50YXJnZXQueSA9IHRoaXMuc3RhcnRQb3MueSArIHRlbXBZO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog57uf5LiA5Z2Q5qCHIFxyXG4gICAgICogQHBhcmFtIHRhcmdldCDopoHmlLnpgKDnmoTlkJHph49cclxuICAgICAqIEBwYXJhbSB2IOavlOS+i+WPguaVsFxyXG4gICAgICogQHBhcmFtIGxlbiDmr5Tkvovlj4LogIPplb/luqZcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1bmlmeVBvcyh0YXJnZXQ6IGNjLlZlYzIsIHY6IGNjLlZlYzIsIGxlbjogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHJhdGlvID0gdGhpcy5pc0Fic29sdXRlQ3RybCA/IDEgOiBsZW47XHJcbiAgICAgICAgdGFyZ2V0LnggPSB2LnggKiByYXRpbztcclxuICAgICAgICB0YXJnZXQueSA9IHYueSAqIHJhdGlvO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/NodeFactory.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9cf3bFfdHRD94txvaJfe8hY', 'NodeFactory');
// script/common/NodeFactory.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeFactory = void 0;
var ccclass = cc._decorator.ccclass;
/**再次封装节点池 */
var NodeFactory = /** @class */ (function () {
    function NodeFactory() {
        this.pre = null;
        this.pool = null;
    }
    NodeFactory.prototype.init = function (pre) {
        this.pre = pre;
        this.pool = new cc.NodePool();
        return this;
    };
    // private parent: cc.Node = null;
    NodeFactory.prototype.get = function () {
        var node = null;
        if (this.pool.size() > 0)
            node = this.pool.get();
        else
            node = cc.instantiate(this.pre);
        node.setPosition(0);
        return node;
    };
    NodeFactory.prototype.put = function (node) {
        this.pool.put(node);
    };
    NodeFactory = __decorate([
        ccclass('NodeFactory')
    ], NodeFactory);
    return NodeFactory;
}());
exports.NodeFactory = NodeFactory;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb21tb25cXE5vZGVGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNRLElBQUEsT0FBTyxHQUFLLEVBQUUsQ0FBQyxVQUFVLFFBQWxCLENBQW1CO0FBQ2xDLGFBQWE7QUFFYjtJQUFBO1FBUVksUUFBRyxHQUFjLElBQUksQ0FBQztRQUN0QixTQUFJLEdBQWdCLElBQUksQ0FBQztJQWNyQyxDQUFDO0lBckJVLDBCQUFJLEdBQVgsVUFBWSxHQUFjO1FBQ3RCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM5QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBSUQsa0NBQWtDO0lBRTNCLHlCQUFHLEdBQVY7UUFDSSxJQUFJLElBQUksR0FBWSxJQUFJLENBQUM7UUFDekIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7WUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQTs7WUFDM0MsSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLHlCQUFHLEdBQVYsVUFBVyxJQUFhO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUF0QlEsV0FBVztRQUR2QixPQUFPLENBQUMsYUFBYSxDQUFDO09BQ1YsV0FBVyxDQXVCdkI7SUFBRCxrQkFBQztDQXZCRCxBQXVCQyxJQUFBO0FBdkJZLGtDQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCB7IGNjY2xhc3MgfSA9IGNjLl9kZWNvcmF0b3I7XG4vKirlho3mrKHlsIHoo4XoioLngrnmsaAgKi9cbkBjY2NsYXNzKCdOb2RlRmFjdG9yeScpXG5leHBvcnQgY2xhc3MgTm9kZUZhY3Rvcnkge1xuXG4gICAgcHVibGljIGluaXQocHJlOiBjYy5QcmVmYWIpIHtcbiAgICAgICAgdGhpcy5wcmUgPSBwcmU7XG4gICAgICAgIHRoaXMucG9vbCA9IG5ldyBjYy5Ob2RlUG9vbCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwcml2YXRlIHByZTogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBwcml2YXRlIHBvb2w6IGNjLk5vZGVQb29sID0gbnVsbDtcbiAgICAvLyBwcml2YXRlIHBhcmVudDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBwdWJsaWMgZ2V0KCk6IGNjLk5vZGUge1xuICAgICAgICBsZXQgbm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLnBvb2wuc2l6ZSgpID4gMCkgbm9kZSA9IHRoaXMucG9vbC5nZXQoKVxuICAgICAgICBlbHNlIG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZSk7XG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oMCk7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIHB1YmxpYyBwdXQobm9kZTogY2MuTm9kZSkge1xuICAgICAgICB0aGlzLnBvb2wucHV0KG5vZGUpO1xuICAgIH1cbn1cblxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/Global.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'da6fef6qh9JsanCBGCab5md', 'Global');
// script/common/Global.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vec2Group = exports.GEvent = exports.SoundPath = exports.ResPath = exports.GConst = exports.Global = void 0;
var LocalData_1 = require("./LocalData");
var ccclass = cc._decorator.ccclass;
var Global = /** @class */ (function () {
    function Global() {
        /**本地存储 */
        this.localData = new LocalData_1.default("game_9011301");
        this.shopPickType = 1; //选中的皮肤
    }
    Global_1 = Global;
    Object.defineProperty(Global, "ins", {
        get: function () {
            if (!this._ins)
                this._ins = new Global_1();
            return this._ins;
        },
        enumerable: false,
        configurable: true
    });
    var Global_1;
    Global._ins = null;
    Global = Global_1 = __decorate([
        ccclass
    ], Global);
    return Global;
}());
exports.Global = Global;
/**常量定义 */
exports.GConst = {
    gridCreatTime: 0.5,
    gridDisappearTime: 0.5,
    gridMoveTime: 0.3,
    scoreAniTime: 0.5,
    topScoreStorage: 'topScoreStorage',
    customCompBundle: "customComponents",
};
/**资源路径 */
exports.ResPath = {
    faceRootPath: 'texture/grid/',
};
/**声音路径 */
exports.SoundPath = {
    bubble: "sound/bubble",
    button: "sound/button",
    fresh: "sound/fresh",
    hitGround: "sound/hitGround",
    task: "sound/task",
};
exports.GEvent = {
    coinChanged: "coinChanged",
};
/**节点转换时使用的临时向量组 结构 */
var Vec2Group = /** @class */ (function () {
    function Vec2Group() {
        this.v2 = cc.v2();
        this.world = cc.v2();
        this.local = cc.v2();
    }
    return Vec2Group;
}());
exports.Vec2Group = Vec2Group;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb21tb25cXEdsb2JhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBb0M7QUFFNUIsSUFBQSxPQUFPLEdBQUssRUFBRSxDQUFDLFVBQVUsUUFBbEIsQ0FBbUI7QUFHbEM7SUFBQTtRQU9JLFVBQVU7UUFDSCxjQUFTLEdBQWMsSUFBSSxtQkFBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3JELGlCQUFZLEdBQVcsQ0FBQyxDQUFDLENBQVksT0FBTztJQUV2RCxDQUFDO2VBWFksTUFBTTtJQUVmLHNCQUFrQixhQUFHO2FBQXJCO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO2dCQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxRQUFNLEVBQUUsQ0FBQztZQUN6QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7O0lBSmMsV0FBSSxHQUFXLElBQUksQ0FBQztJQUQxQixNQUFNO1FBRGxCLE9BQU87T0FDSyxNQUFNLENBV2xCO0lBQUQsYUFBQztDQVhELEFBV0MsSUFBQTtBQVhZLHdCQUFNO0FBY25CLFVBQVU7QUFDRyxRQUFBLE1BQU0sR0FBRztJQUNsQixhQUFhLEVBQUUsR0FBRztJQUNsQixpQkFBaUIsRUFBRSxHQUFHO0lBQ3RCLFlBQVksRUFBRSxHQUFHO0lBQ2pCLFlBQVksRUFBRSxHQUFHO0lBQ2pCLGVBQWUsRUFBRSxpQkFBaUI7SUFDbEMsZ0JBQWdCLEVBQUUsa0JBQWtCO0NBQ3ZDLENBQUE7QUFFRCxVQUFVO0FBQ0csUUFBQSxPQUFPLEdBQUc7SUFDbkIsWUFBWSxFQUFFLGVBQWU7Q0FDaEMsQ0FBQTtBQUVELFVBQVU7QUFDRyxRQUFBLFNBQVMsR0FBRztJQUNyQixNQUFNLEVBQUUsY0FBYztJQUN0QixNQUFNLEVBQUUsY0FBYztJQUN0QixLQUFLLEVBQUUsYUFBYTtJQUNwQixTQUFTLEVBQUUsaUJBQWlCO0lBQzVCLElBQUksRUFBRSxZQUFZO0NBQ3JCLENBQUE7QUFFWSxRQUFBLE1BQU0sR0FBRztJQUNsQixXQUFXLEVBQUUsYUFBYTtDQUM3QixDQUFBO0FBR0Qsc0JBQXNCO0FBQ3RCO0lBQUE7UUFDVyxPQUFFLEdBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ3RCLFVBQUssR0FBWSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDekIsVUFBSyxHQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUpBLEFBSUMsSUFBQTtBQUpZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvY2FsRGF0YSBmcm9tIFwiLi9Mb2NhbERhdGFcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBHbG9iYWwge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luczogR2xvYmFsID0gbnVsbDtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGlucygpOiBHbG9iYWwge1xyXG4gICAgICAgIGlmICghdGhpcy5faW5zKSB0aGlzLl9pbnMgPSBuZXcgR2xvYmFsKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lucztcclxuICAgIH1cclxuXHJcbiAgICAvKirmnKzlnLDlrZjlgqggKi9cclxuICAgIHB1YmxpYyBsb2NhbERhdGE6IExvY2FsRGF0YSA9IG5ldyBMb2NhbERhdGEoYGdhbWVfOTAxMTMwMWApO1xyXG4gICAgcHVibGljIHNob3BQaWNrVHlwZTogbnVtYmVyID0gMTsgICAgICAgICAgICAvL+mAieS4reeahOearuiCpFxyXG5cclxufVxyXG5cclxuXHJcbi8qKuW4uOmHj+WumuS5iSAqL1xyXG5leHBvcnQgY29uc3QgR0NvbnN0ID0ge1xyXG4gICAgZ3JpZENyZWF0VGltZTogMC41LFxyXG4gICAgZ3JpZERpc2FwcGVhclRpbWU6IDAuNSxcclxuICAgIGdyaWRNb3ZlVGltZTogMC4zLFxyXG4gICAgc2NvcmVBbmlUaW1lOiAwLjUsXHJcbiAgICB0b3BTY29yZVN0b3JhZ2U6ICd0b3BTY29yZVN0b3JhZ2UnLFxyXG4gICAgY3VzdG9tQ29tcEJ1bmRsZTogYGN1c3RvbUNvbXBvbmVudHNgLFxyXG59XHJcblxyXG4vKirotYTmupDot6/lvoQgKi9cclxuZXhwb3J0IGNvbnN0IFJlc1BhdGggPSB7XHJcbiAgICBmYWNlUm9vdFBhdGg6ICd0ZXh0dXJlL2dyaWQvJywgICAgICAgICAgLy/moLzlrZDlm77niYfmoLnot6/lvoRcclxufVxyXG5cclxuLyoq5aOw6Z+z6Lev5b6EICovXHJcbmV4cG9ydCBjb25zdCBTb3VuZFBhdGggPSB7XHJcbiAgICBidWJibGU6IGBzb3VuZC9idWJibGVgLFxyXG4gICAgYnV0dG9uOiBgc291bmQvYnV0dG9uYCxcclxuICAgIGZyZXNoOiBgc291bmQvZnJlc2hgLFxyXG4gICAgaGl0R3JvdW5kOiBgc291bmQvaGl0R3JvdW5kYCxcclxuICAgIHRhc2s6IGBzb3VuZC90YXNrYCxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFdmVudCA9IHtcclxuICAgIGNvaW5DaGFuZ2VkOiBgY29pbkNoYW5nZWRgLCAgICAgICAgICAgICAvL+mHkeW4geaUueWKqFxyXG59XHJcblxyXG5cclxuLyoq6IqC54K56L2s5o2i5pe25L2/55So55qE5Li05pe25ZCR6YeP57uEIOe7k+aehCAqL1xyXG5leHBvcnQgY2xhc3MgVmVjMkdyb3VwIHtcclxuICAgIHB1YmxpYyB2MjogY2MuVmVjMiA9IGNjLnYyKCk7XHJcbiAgICBwdWJsaWMgd29ybGQ6IGNjLlZlYzIgPSBjYy52MigpO1xyXG4gICAgcHVibGljIGxvY2FsOiBjYy5WZWMyID0gY2MudjIoKTtcclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/Utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0b34dqoVcxGf4f329CNcAr1', 'Utils');
// script/common/Utils.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils_1 = Utils;
    Utils.log = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        console.log.apply(console, __spreadArrays(['%c >>>>>>>>>>>', 'color: orange'], params));
    };
    /**随机整数 */
    Utils.randomInt = function () {
        var nums = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nums[_i] = arguments[_i];
        }
        var min = Math.floor(Math.min.apply(Math, nums));
        var max = Math.floor(Math.max.apply(Math, nums));
        return Math.floor(Math.random() * (++max - min)) + min;
    };
    /**从数组中随机取出一项 */
    Utils.randomFromArray = function (list) {
        var idx = Utils_1.randomInt(0, list.length - 1);
        return list[idx];
    };
    /**
     * 动态显示图片
     * @param target
     * @param path
     * @param call
     */
    Utils.dynamicSprite = function (target, path, call) {
        if (target instanceof cc.Node)
            target = target.getComponent(cc.Sprite) || target.addComponent(cc.Sprite);
        cc.resources.load(path, cc.SpriteFrame, function (err, frame) {
            if (!err) {
                target.spriteFrame = frame;
                call && call(frame);
            }
            else {
                Utils_1.log('加载图片错误', path, err);
            }
        });
    };
    /**
     * 动态显示图片(指定bundle)
     * @param target
     * @param path
     * @param call
     */
    Utils.dynamicSpriteInBundle = function (target, bundleName, path, call) {
        var bundle = cc.assetManager.getBundle(bundleName);
        if (!bundle) {
            cc.assetManager.loadBundle(bundleName, show);
        }
        else
            show();
        function show() {
            bundle = cc.assetManager.getBundle(bundleName);
            if (target instanceof cc.Node)
                target = target.getComponent(cc.Sprite) || target.addComponent(cc.Sprite);
            bundle.load(path, cc.SpriteFrame, function (err, frame) {
                if (!err) {
                    target.spriteFrame = frame;
                    call && call(frame);
                }
                else {
                    Utils_1.log('加载图片错误', path, err);
                }
            });
        }
    };
    /**扁平化一层数组 */
    Utils.flat = function (list) {
        return list.reduce(function (pre, item) {
            var _a;
            (_a = pre).push.apply(_a, item);
            return pre;
        }, []);
    };
    /**计算距离 */
    Utils.getDistance = function (p1, p2) {
        return Math.sqrt(Math.pow((p1.x - p2.x), 2) + Math.pow((p1.y - p2.y), 2));
    };
    var Utils_1;
    Utils = Utils_1 = __decorate([
        ccclass
    ], Utils);
    return Utils;
}());
exports.default = Utils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb21tb25cXFV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQUE7SUE0RUEsQ0FBQztjQTVFb0IsS0FBSztJQUVSLFNBQUcsR0FBakI7UUFBa0IsZ0JBQVM7YUFBVCxVQUFTLEVBQVQscUJBQVMsRUFBVCxJQUFTO1lBQVQsMkJBQVM7O1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLE9BQVgsT0FBTyxrQkFBSyxnQkFBZ0IsRUFBRSxlQUFlLEdBQUssTUFBTSxHQUFFO0lBQzlELENBQUM7SUFFRCxVQUFVO0lBQ0ksZUFBUyxHQUF2QjtRQUF3QixjQUFpQjthQUFqQixVQUFpQixFQUFqQixxQkFBaUIsRUFBakIsSUFBaUI7WUFBakIseUJBQWlCOztRQUNyQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQVIsSUFBSSxFQUFRLElBQUksRUFBRSxDQUFDO1FBQ3hDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBUixJQUFJLEVBQVEsSUFBSSxFQUFFLENBQUM7UUFDeEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQzNELENBQUM7SUFFRCxnQkFBZ0I7SUFDVCxxQkFBZSxHQUF0QixVQUEwQixJQUFTO1FBQy9CLElBQUksR0FBRyxHQUFHLE9BQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDOUMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFD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a0JBNUVvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWxzIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGxvZyguLi5wYXJhbXMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnJWMgPj4+Pj4+Pj4+Pj4nLCAnY29sb3I6IG9yYW5nZScsIC4uLnBhcmFtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq6ZqP5py65pW05pWwICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJhbmRvbUludCguLi5udW1zOiBudW1iZXJbXSkge1xyXG4gICAgICAgIGxldCBtaW4gPSBNYXRoLmZsb29yKE1hdGgubWluKC4uLm51bXMpKTtcclxuICAgICAgICBsZXQgbWF4ID0gTWF0aC5mbG9vcihNYXRoLm1heCguLi5udW1zKSk7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgrK21heCAtIG1pbikpICsgbWluO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuS7juaVsOe7hOS4remaj+acuuWPluWHuuS4gOmhuSAqL1xyXG4gICAgc3RhdGljIHJhbmRvbUZyb21BcnJheTxUPihsaXN0OiBUW10pOiBUIHtcclxuICAgICAgICBsZXQgaWR4ID0gVXRpbHMucmFuZG9tSW50KDAsIGxpc3QubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgcmV0dXJuIGxpc3RbaWR4XTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKqOaAgeaYvuekuuWbvueJh1xyXG4gICAgICogQHBhcmFtIHRhcmdldCBcclxuICAgICAqIEBwYXJhbSBwYXRoIFxyXG4gICAgICogQHBhcmFtIGNhbGwgXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBkeW5hbWljU3ByaXRlKHRhcmdldDogY2MuTm9kZSB8IGNjLlNwcml0ZSwgcGF0aDogc3RyaW5nLCBjYWxsPzogRnVuY3Rpb24pIHtcclxuICAgICAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgY2MuTm9kZSkgdGFyZ2V0ID0gdGFyZ2V0LmdldENvbXBvbmVudChjYy5TcHJpdGUpIHx8IHRhcmdldC5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChwYXRoLCBjYy5TcHJpdGVGcmFtZSwgKGVycjogRXJyb3IsIGZyYW1lOiBjYy5TcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWVycikge1xyXG4gICAgICAgICAgICAgICAgKHRhcmdldCBhcyBjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gZnJhbWU7XHJcbiAgICAgICAgICAgICAgICBjYWxsICYmIGNhbGwoZnJhbWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgVXRpbHMubG9nKCfliqDovb3lm77niYfplJnor68nLCBwYXRoLCBlcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKqOaAgeaYvuekuuWbvueJhyjmjIflrppidW5kbGUpXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IFxyXG4gICAgICogQHBhcmFtIHBhdGggXHJcbiAgICAgKiBAcGFyYW0gY2FsbCBcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGR5bmFtaWNTcHJpdGVJbkJ1bmRsZSh0YXJnZXQ6IGNjLk5vZGUgfCBjYy5TcHJpdGUsIGJ1bmRsZU5hbWU6IHN0cmluZywgcGF0aDogc3RyaW5nLCBjYWxsPzogRnVuY3Rpb24pIHtcclxuICAgICAgICBsZXQgYnVuZGxlID0gY2MuYXNzZXRNYW5hZ2VyLmdldEJ1bmRsZShidW5kbGVOYW1lKTtcclxuICAgICAgICBpZiAoIWJ1bmRsZSkge1xyXG4gICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZEJ1bmRsZShidW5kbGVOYW1lLCBzaG93KTtcclxuICAgICAgICB9IGVsc2Ugc2hvdygpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBzaG93KCkge1xyXG4gICAgICAgICAgICBidW5kbGUgPSBjYy5hc3NldE1hbmFnZXIuZ2V0QnVuZGxlKGJ1bmRsZU5hbWUpO1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgY2MuTm9kZSkgdGFyZ2V0ID0gdGFyZ2V0LmdldENvbXBvbmVudChjYy5TcHJpdGUpIHx8IHRhcmdldC5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICAgICAgYnVuZGxlLmxvYWQocGF0aCwgY2MuU3ByaXRlRnJhbWUsIChlcnI6IEVycm9yLCBmcmFtZTogY2MuU3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgKHRhcmdldCBhcyBjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gZnJhbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbCAmJiBjYWxsKGZyYW1lKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVXRpbHMubG9nKCfliqDovb3lm77niYfplJnor68nLCBwYXRoLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKirmiYHlubPljJbkuIDlsYLmlbDnu4QgKi9cclxuICAgIHN0YXRpYyBmbGF0PFQ+KGxpc3Q6IFRbXVtdKTogVFtdIHtcclxuICAgICAgICByZXR1cm4gbGlzdC5yZWR1Y2UoKHByZSwgaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAocHJlIGFzIEFycmF5PFQ+KS5wdXNoKC4uLml0ZW0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcHJlO1xyXG4gICAgICAgIH0sIFtdKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirorqHnrpfot53nprsgKi9cclxuICAgIHN0YXRpYyBnZXREaXN0YW5jZShwMTogY2MuVmVjMiwgcDI6IGNjLlZlYzIpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KChwMS54IC0gcDIueCkgKiogMiArIChwMS55IC0gcDIueSkgKiogMik7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/LocalData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '93f1fLpuMpPRr9/GFw+sA5T', 'LocalData');
// script/common/LocalData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LocalData = /** @class */ (function () {
    function LocalData(name) {
        this.libName = name;
        this.syncFromLocalStorage();
        if (!this.data) {
            this.data = {};
            this.syncToLocalStorage();
        }
    }
    /**数据同步到localStorage */
    LocalData.prototype.syncToLocalStorage = function () {
        var data = JSON.stringify(this.data);
        cc.sys.localStorage.setItem(this.libName, data);
    };
    /**数据从localStorage更新*/
    LocalData.prototype.syncFromLocalStorage = function () {
        var str = cc.sys.localStorage.getItem(this.libName);
        this.data = JSON.parse(str);
    };
    /**存入数据 */
    LocalData.prototype.setData = function (key, value) {
        this.data[key] = value;
        this.syncToLocalStorage();
    };
    /**获取数据 */
    LocalData.prototype.getData = function (key) {
        return this.data[key];
    };
    return LocalData;
}());
exports.default = LocalData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb21tb25cXExvY2FsRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0lBTUksbUJBQVksSUFBWTtRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNaLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDN0I7SUFDTCxDQUFDO0lBRUQsdUJBQXVCO0lBQ2Ysc0NBQWtCLEdBQTFCO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELHNCQUFzQjtJQUNkLHdDQUFvQixHQUE1QjtRQUNJLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxVQUFVO0lBQ0gsMkJBQU8sR0FBZCxVQUFlLEdBQVcsRUFBRSxLQUFVO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCxVQUFVO0lBQ0gsMkJBQU8sR0FBZCxVQUFlLEdBQVc7UUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDTCxnQkFBQztBQUFELENBckNBLEFBcUNDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYWxEYXRhIHtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBsaWJOYW1lOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGRhdGE6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmxpYk5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuc3luY0Zyb21Mb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgICBpZiAoIXRoaXMuZGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSB7fTtcclxuICAgICAgICAgICAgdGhpcy5zeW5jVG9Mb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5pWw5o2u5ZCM5q2l5YiwbG9jYWxTdG9yYWdlICovXHJcbiAgICBwcml2YXRlIHN5bmNUb0xvY2FsU3RvcmFnZSgpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSk7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubGliTmFtZSwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5pWw5o2u5LuObG9jYWxTdG9yYWdl5pu05pawKi9cclxuICAgIHByaXZhdGUgc3luY0Zyb21Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICAgICAgbGV0IHN0ciA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmxpYk5hbWUpO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IEpTT04ucGFyc2Uoc3RyKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirlrZjlhaXmlbDmja4gKi9cclxuICAgIHB1YmxpYyBzZXREYXRhKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5kYXRhW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnN5bmNUb0xvY2FsU3RvcmFnZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuiOt+WPluaVsOaNriAqL1xyXG4gICAgcHVibGljIGdldERhdGEoa2V5OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFba2V5XTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/customComponents/rank/scriipt/Rank.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0adc0pmO4FJrJIAo/on8QVI', 'Rank');
// components/rank/scriipt/Rank.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Rank = /** @class */ (function (_super) {
    __extends(Rank, _super);
    function Rank() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rank = __decorate([
        ccclass
    ], Rank);
    return Rank;
}(cc.Component));
exports.default = Rank;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcY29tcG9uZW50c1xccmFua1xcc2NyaWlwdFxcUmFuay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFrQyx3QkFBWTtJQUE5Qzs7SUFFQSxDQUFDO0lBRm9CLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0FFeEI7SUFBRCxXQUFDO0NBRkQsQUFFQyxDQUZpQyxFQUFFLENBQUMsU0FBUyxHQUU3QztrQkFGb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbmsgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/customComponents/rank/scriipt/RankData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b1d05Bg4y1Dr79CWx+UiA1m', 'RankData');
// components/rank/scriipt/RankData.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RankData = /** @class */ (function () {
    function RankData() {
        /**rankList */
        this.list = [];
    }
    RankData_1 = RankData;
    Object.defineProperty(RankData, "ins", {
        get: function () {
            if (!this._ins)
                this._ins = new RankData_1();
            return this._ins;
        },
        enumerable: false,
        configurable: true
    });
    RankData.prototype.init = function () {
    };
    var RankData_1;
    RankData._ins = null;
    RankData = RankData_1 = __decorate([
        ccclass
    ], RankData);
    return RankData;
}());
exports.default = RankData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcY29tcG9uZW50c1xccmFua1xcc2NyaWlwdFxcUmFua0RhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQVM1QztJQUNJO1FBT0EsY0FBYztRQUNOLFNBQUksR0FBVSxFQUFFLENBQUM7SUFSRCxDQUFDO2lCQURSLFFBQVE7SUFHekIsc0JBQWtCLGVBQUc7YUFBckI7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7Z0JBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFVBQVEsRUFBRSxDQUFDO1lBQzNDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUtPLHVCQUFJLEdBQVo7SUFFQSxDQUFDOztJQVhjLGFBQUksR0FBYSxJQUFJLENBQUM7SUFGcEIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWU1QjtJQUFELGVBQUM7Q0FmRCxBQWVDLElBQUE7a0JBZm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElSYW5rRGF0YUl0ZW0ge1xyXG4gICAgbmljazogc3RyaW5nXHJcbiAgICBzY29yZTogbnVtYmVyXHJcbiAgICByYW5rOiBudW1iZXJcclxufVxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFua0RhdGEge1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgfVxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luczogUmFua0RhdGEgPSBudWxsO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zKCk6IFJhbmtEYXRhIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lucykgdGhpcy5faW5zID0gbmV3IFJhbmtEYXRhKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lucztcclxuICAgIH1cclxuXHJcbiAgICAvKipyYW5rTGlzdCAqL1xyXG4gICAgcHJpdmF0ZSBsaXN0OiBhbnlbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgaW5pdCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/CoinMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxDb2luTWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQXlDO0FBQ3pDLDBDQUFpRDtBQUczQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUdJO1FBVVEsU0FBSSxHQUFXLENBQUMsQ0FBQztJQVZELENBQUM7Z0JBSFIsT0FBTztJQUt4QixzQkFBa0IsY0FBRzthQUFyQjtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNaLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxTQUFPLEVBQUUsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNwQjtZQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUlPLHNCQUFJLEdBQVo7UUFDSSxJQUFJLEdBQUcsR0FBRyxlQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pELElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ1IsZUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDdkQ7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztJQUNwQixDQUFDO0lBRU0seUJBQU8sR0FBZDtRQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRU0sNEJBQVUsR0FBakIsVUFBa0IsQ0FBUztRQUN2QixJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztRQUNmLGVBQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxRCxrQkFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7O0lBL0JELGFBQWE7SUFDQyxnQkFBUSxHQUFXLFNBQVMsQ0FBQztJQUU1QixZQUFJLEdBQVksSUFBSSxDQUFDO0lBSm5CLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FrQzNCO0lBQUQsY0FBQztDQWxDRCxBQWtDQyxJQUFBO2tCQWxDb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFdmVudE1nciBmcm9tIFwiLi9jb21tb24vRXZlbnRNZ3JcIjtcclxuaW1wb3J0IHsgR0V2ZW50LCBHbG9iYWwgfSBmcm9tIFwiLi9jb21tb24vR2xvYmFsXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvaW5NZ3Ige1xyXG4gICAgLyoq5pys5Zyw5a2Y5YKoa2V5ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGxvY2FsS2V5OiBzdHJpbmcgPSBgc3Rhck51bWA7XHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyB9XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zOiBDb2luTWdyID0gbnVsbDtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGlucygpOiBDb2luTWdyIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lucykge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnMgPSBuZXcgQ29pbk1ncigpO1xyXG4gICAgICAgICAgICB0aGlzLl9pbnMuaW5pdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29pbjogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIGluaXQoKSB7XHJcbiAgICAgICAgbGV0IG51bSA9IEdsb2JhbC5pbnMubG9jYWxEYXRhLmdldERhdGEoQ29pbk1nci5sb2NhbEtleSk7XHJcbiAgICAgICAgaWYgKG51bSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIG51bSA9IDA7XHJcbiAgICAgICAgICAgIEdsb2JhbC5pbnMubG9jYWxEYXRhLnNldERhdGEoQ29pbk1nci5sb2NhbEtleSwgbnVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb2luID0gbnVtO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDb2luKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29pbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2hhbmdlQ29pbih2OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmNvaW4gKz0gdjtcclxuICAgICAgICBHbG9iYWwuaW5zLmxvY2FsRGF0YS5zZXREYXRhKENvaW5NZ3IubG9jYWxLZXksIHRoaXMuY29pbik7XHJcbiAgICAgICAgRXZlbnRNZ3IuaW5zLmVtaXQoR0V2ZW50LmNvaW5DaGFuZ2VkKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/EventMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6866coF48JIQJjS1RsnZxWO', 'EventMgr');
// script/EventMgr.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var EventMgr = /** @class */ (function () {
    function EventMgr() {
    }
    EventMgr_1 = EventMgr;
    Object.defineProperty(EventMgr, "ins", {
        get: function () {
            if (!this._ins) {
                this._ins = new EventMgr_1();
                this._ins.init();
            }
            return this._ins;
        },
        enumerable: false,
        configurable: true
    });
    EventMgr.prototype.init = function () {
    };
    EventMgr.prototype.emit = function (name) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (_a = cc.Canvas.instance.node).emit.apply(_a, __spreadArrays([name], args));
    };
    EventMgr.prototype.on = function (name, call, target) {
        cc.Canvas.instance.node.on(name, call, target);
    };
    EventMgr.prototype.off = function (name, call, target) {
        cc.Canvas.instance.node.off(name, call, target);
    };
    var EventMgr_1;
    EventMgr._ins = null;
    EventMgr = EventMgr_1 = __decorate([
        ccclass
    ], EventMgr);
    return EventMgr;
}());
exports.default = EventMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxFdmVudE1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUNJO0lBQXdCLENBQUM7aUJBRFIsUUFBUTtJQUd6QixzQkFBa0IsZUFBRzthQUFyQjtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNaLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxVQUFRLEVBQUUsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNwQjtZQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUVPLHVCQUFJLEdBQVo7SUFFQSxDQUFDO0lBRU0sdUJBQUksR0FBWCxVQUFZLElBQVk7O1FBQUUsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCw2QkFBYzs7UUFDcEMsQ0FBQSxLQUFBLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQSxDQUFDLElBQUksMkJBQUMsSUFBSSxHQUFLLElBQUksR0FBRTtJQUNoRCxDQUFDO0lBRU0scUJBQUUsR0FBVCxVQUFVLElBQVksRUFBRSxJQUFjLEVBQUUsTUFBVztRQUMvQyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVNLHNCQUFHLEdBQVYsVUFBVyxJQUFZLEVBQUUsSUFBYyxFQUFFLE1BQVc7UUFDaEQsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3BELENBQUM7O0lBdkJjLGFBQUksR0FBYSxJQUFJLENBQUM7SUFGcEIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTBCNUI7SUFBRCxlQUFDO0NBMUJELEFBMEJDLElBQUE7a0JBMUJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRNZ3Ige1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgfVxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luczogRXZlbnRNZ3IgPSBudWxsO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zKCk6IEV2ZW50TWdyIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lucykge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnMgPSBuZXcgRXZlbnRNZ3IoKTtcclxuICAgICAgICAgICAgdGhpcy5faW5zLmluaXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lucztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbWl0KG5hbWU6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcclxuICAgICAgICBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5lbWl0KG5hbWUsIC4uLmFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbihuYW1lOiBzdHJpbmcsIGNhbGw6IEZ1bmN0aW9uLCB0YXJnZXQ6IGFueSkge1xyXG4gICAgICAgIGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLm9uKG5hbWUsIGNhbGwsIHRhcmdldCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9mZihuYW1lOiBzdHJpbmcsIGNhbGw6IEZ1bmN0aW9uLCB0YXJnZXQ6IGFueSkge1xyXG4gICAgICAgIGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLm9mZihuYW1lLCBjYWxsLCB0YXJnZXQpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
