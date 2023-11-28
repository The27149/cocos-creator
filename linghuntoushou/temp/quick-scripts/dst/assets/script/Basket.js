
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