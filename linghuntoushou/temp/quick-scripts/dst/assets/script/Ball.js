
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