"use strict";
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