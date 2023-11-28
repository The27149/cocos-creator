"use strict";
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