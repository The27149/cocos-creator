
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUEwQjtBQUMxQixtQ0FBOEI7QUFDOUIsaUNBQXVFO0FBQ3ZFLHFDQUFnQztBQUVoQyxtQ0FBOEI7QUFDOUIsdUNBQWtDO0FBQ2xDLDhDQUF5QztBQUN6QywwQ0FBb0Q7QUFDcEQsMENBQXFDO0FBQ3JDLG9EQUFtRDtBQUNuRCx3Q0FBbUM7QUFHN0IsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQU07SUFBeEM7UUFBQSxxRUEyS0M7UUF6S0csY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixjQUFRLEdBQW1CLElBQUksQ0FBQztRQUdoQyxlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRzNCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRzVCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFHMUIsZUFBUyxHQUFhLElBQUksQ0FBQztRQUczQixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUVyQixVQUFJLEdBQVMsSUFBSSxDQUFDO1FBQ2xCLFlBQU0sR0FBVyxJQUFJLENBQUM7UUFDOUIsaUJBQWlCO1FBQ1YscUJBQWUsR0FBVyxDQUFDLENBQUM7UUFDbkMsVUFBVTtRQUNILGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDMUIsV0FBSyxHQUFVLElBQUksQ0FBQztRQUNwQixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixpQkFBVyxHQUFnQixJQUFJLENBQUM7UUFFaEMsWUFBTSxHQUFXLENBQUMsQ0FBQzs7SUFxSS9CLENBQUM7SUFwSUcsc0JBQVksdUJBQUs7YUFBakI7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzthQUNELFVBQWtCLENBQVM7WUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzFDLENBQUM7OztPQUpBO0lBTVMscUJBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLGNBQUksQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsZ0JBQU0sQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsZ0JBQU0sQ0FBQyxHQUFHLENBQUMsZ0JBQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzFCLGtCQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxlQUFNLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVTLHdCQUFTLEdBQW5CO1FBQ0ksa0JBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGVBQU0sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRU0sbUJBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFTSxtQkFBSSxHQUFYO1FBQUEsaUJBS0M7UUFKRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkMsVUFBVSxDQUFDO1lBQ1AsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFTyx3QkFBUyxHQUFqQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRU8sd0JBQVMsR0FBakI7UUFDSSxJQUFJLEtBQUssR0FBZ0I7WUFDckIsU0FBUyxFQUFFLENBQUM7WUFDWixPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3JDLENBQUM7UUFFRixJQUFJLE9BQU8sR0FBZTtZQUN0QixRQUFRLEVBQUUsb0JBQVksQ0FBQyxVQUFVO1lBQ2pDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7U0FDNUIsQ0FBQTtRQUNELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxlQUFLLEVBQUUsQ0FBQztRQUNyQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU0sc0JBQU8sR0FBZDtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUN6QyxDQUFDO0lBRU8seUJBQVUsR0FBbEIsVUFBbUIsQ0FBc0I7UUFDckMsSUFBSSxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU87UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRU8sd0JBQVMsR0FBakI7UUFDSSxnQkFBTSxDQUFDLEdBQUcsQ0FBQyxrQkFBUSxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU87UUFDM0IsSUFBSSxVQUFVLEdBQUcsaUJBQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdkMsSUFBSSxVQUFVLEdBQUcsRUFBRTtZQUFFLE9BQU87UUFDNUIsaUJBQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsVUFBVTtJQUNILDBCQUFXLEdBQWxCO1FBQ0ksZ0JBQU0sQ0FBQyxHQUFHLENBQUMsa0JBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxrQkFBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxlQUFlLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQ3hDLENBQUM7SUFFTyx5QkFBVSxHQUFsQjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxHQUFHLGVBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQzlCLENBQUMsR0FBRyxlQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFTSx3QkFBUyxHQUFoQixVQUFpQixRQUFpQjtRQUM5QixnQkFBTSxDQUFDLEdBQUcsQ0FBQyxrQkFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLGtCQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0IsaUJBQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRU8sNEJBQWEsR0FBckI7UUFDSSxJQUFJLEdBQUcsR0FBRyxpQkFBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFTyx5QkFBVSxHQUFsQixVQUFtQixHQUFXO1FBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRU8sd0JBQVMsR0FBakI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDckMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUN0QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkI7SUFDTCxDQUFDO0lBRU0sdUJBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLGdCQUFNLENBQUMsR0FBRyxDQUFDLGdCQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0wsQ0FBQztJQXZLRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNPO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzswQ0FDTztJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNRO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NENBQ1M7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDVTtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lDQUNNO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ1E7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs0Q0FDUztJQTFCWixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBMkt4QjtJQUFELFdBQUM7Q0EzS0QsQUEyS0MsQ0EzS2lDLGdCQUFNLEdBMkt2QztrQkEzS29CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFsbCBmcm9tIFwiLi9CYWxsXCI7XHJcbmltcG9ydCBCYXNrZXQgZnJvbSBcIi4vQmFza2V0XCI7XHJcbmltcG9ydCBDbG9jaywgeyBDTE9DS19VSU1PREUsIElDbG9ja1BhcmFtLCBJQ2xvY2tWaWV3IH0gZnJvbSBcIi4vQ2xvY2tcIjtcclxuaW1wb3J0IENvaW5NZ3IgZnJvbSBcIi4vQ29pbk1nclwiO1xyXG5pbXBvcnQgTGF1bmNoIGZyb20gXCIuL0xhdW5jaFwiO1xyXG5pbXBvcnQgU2V0dGxlIGZyb20gXCIuL1NldHRsZVwiO1xyXG5pbXBvcnQgU291bmRNZ3IgZnJvbSBcIi4vU291bmRNZ3JcIjtcclxuaW1wb3J0IEV2ZW50TWdyIGZyb20gXCIuL2NvbW1vbi9FdmVudE1nclwiO1xyXG5pbXBvcnQgeyBHRXZlbnQsIFNvdW5kUGF0aCB9IGZyb20gXCIuL2NvbW1vbi9HbG9iYWxcIjtcclxuaW1wb3J0IE1vZHVsZSBmcm9tIFwiLi9jb21tb24vTW9kdWxlXCI7XHJcbmltcG9ydCB7IE5vZGVGYWN0b3J5IH0gZnJvbSBcIi4vY29tbW9uL05vZGVGYWN0b3J5XCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9jb21tb24vVXRpbHNcIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSBleHRlbmRzIE1vZHVsZSB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhbGxOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhc2tldE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Qcm9ncmVzc0JhcilcclxuICAgIHByb2dyZXNzOiBjYy5Qcm9ncmVzc0JhciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgdGltZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgc2NvcmVMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZWZmZWN0TGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzdGFyUHJlOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHN0YXJMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBhZGRUaW1lQnRuOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgYmFsbDogQmFsbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIGJhc2tldDogQmFza2V0ID0gbnVsbDtcclxuICAgIC8qKuW9k+WJjeevruetkOaWueWQkSDlt6botJ/lj7PmraMgKi9cclxuICAgIHB1YmxpYyBiYXNrZXREaXJlY3Rpb246IG51bWJlciA9IDE7XHJcbiAgICAvKirmmK/lkKbnu5PmnZ8gKi9cclxuICAgIHB1YmxpYyBpc1RpbWVFbmQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgY2xvY2s6IENsb2NrID0gbnVsbDtcclxuICAgIHByaXZhdGUgaXNHYW1lT3ZlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBzdGFyRmFjdG9yeTogTm9kZUZhY3RvcnkgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgX3Njb3JlOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBnZXQgc2NvcmUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2NvcmU7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHNldCBzY29yZSh2OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zY29yZSA9IHY7XHJcbiAgICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IHYudG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYmFsbCA9IHRoaXMuYmFsbE5vZGUuZ2V0Q29tcG9uZW50KEJhbGwpO1xyXG4gICAgICAgIHRoaXMuYmFza2V0ID0gdGhpcy5iYXNrZXROb2RlLmdldENvbXBvbmVudChCYXNrZXQpO1xyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRzKCk7XHJcbiAgICAgICAgdGhpcy5pbml0Q2xvY2soKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXIoQ29pbk1nci5pbnMuZ2V0Q29pbigpKTtcclxuICAgICAgICB0aGlzLnN0YXJGYWN0b3J5ID0gbmV3IE5vZGVGYWN0b3J5KCkuaW5pdCh0aGlzLnN0YXJQcmUpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlU3RhcigpO1xyXG4gICAgICAgIE1vZHVsZS5nZXQoU2V0dGxlKS5oaWRlKCk7XHJcbiAgICAgICAgRXZlbnRNZ3IuaW5zLm9uKEdFdmVudC5jb2luQ2hhbmdlZCwgdGhpcy5vbkNvaW5DaGFuZ2VkLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIEV2ZW50TWdyLmlucy5vZmYoR0V2ZW50LmNvaW5DaGFuZ2VkLCB0aGlzLm9uQ29pbkNoYW5nZWQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2MuZmFkZUluKDEpKTtcclxuICAgICAgICB0aGlzLm5ld0dhbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGlkZSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLmZhZGVPdXQoMSkpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRFdmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmFkZFRpbWVCdG4ubm9kZS5vbihgY2xpY2tgLCB0aGlzLm9uQWRkVGltZSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0Q2xvY2soKSB7XHJcbiAgICAgICAgbGV0IHBhcmFtOiBJQ2xvY2tQYXJhbSA9IHtcclxuICAgICAgICAgICAgdG90YWxUaW1lOiA1LFxyXG4gICAgICAgICAgICBlbmRDYWxsOiB0aGlzLm9uVGltZUVuZC5iaW5kKHRoaXMpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbGV0IHVpUGFyYW06IElDbG9ja1ZpZXcgPSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlOiBDTE9DS19VSU1PREUuc2hvd1JlbWFpbixcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6IHRoaXMucHJvZ3Jlc3MsXHJcbiAgICAgICAgICAgIHRpbWVMYWJlbDogdGhpcy50aW1lTGFiZWwsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjbG9jayA9IHRoaXMuY2xvY2sgPSBuZXcgQ2xvY2soKTtcclxuICAgICAgICBjbG9jay5pbml0KHBhcmFtKS5pbml0Vmlldyh1aVBhcmFtKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmV3R2FtZSgpIHtcclxuICAgICAgICB0aGlzLmNsb2NrLnJlc2V0KCk7XHJcbiAgICAgICAgdGhpcy5iYXNrZXREaXJlY3Rpb24gPSAtMTtcclxuICAgICAgICB0aGlzLmJhc2tldC5yZXNldCh0aGlzLmJhc2tldERpcmVjdGlvbik7XHJcbiAgICAgICAgdGhpcy5iYWxsLnJlc2V0KCk7XHJcbiAgICAgICAgdGhpcy5pc1RpbWVFbmQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgICAgICB0aGlzLmlzR2FtZU92ZXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFkZFRpbWVCdG4uaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblRvdWNoRW5kKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1RpbWVFbmQpIHJldHVybjtcclxuICAgICAgICB0aGlzLmJhbGwuanVtcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25BZGRUaW1lKCkge1xyXG4gICAgICAgIE1vZHVsZS5nZXQoU291bmRNZ3IpLnBsYXlCdG5Tb3VuZCgpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzVGltZUVuZCkgcmV0dXJuO1xyXG4gICAgICAgIGxldCByZW1haW5TdGFyID0gQ29pbk1nci5pbnMuZ2V0Q29pbigpO1xyXG4gICAgICAgIGlmIChyZW1haW5TdGFyIDwgMTApIHJldHVybjtcclxuICAgICAgICBDb2luTWdyLmlucy5jaGFuZ2VDb2luKC0xMCk7XHJcbiAgICAgICAgdGhpcy5jbG9jay5yZXNldCgpLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq6L6+5oiQ55uu5qCHICovXHJcbiAgICBwdWJsaWMgb25IaXRCYXNrZXQoKSB7XHJcbiAgICAgICAgTW9kdWxlLmdldChTb3VuZE1ncikucGxheUVmZmVjdChTb3VuZFBhdGguZnJlc2gpO1xyXG4gICAgICAgIHRoaXMuc2NvcmUrKztcclxuICAgICAgICB0aGlzLmJhc2tldERpcmVjdGlvbiAqPSAtMTtcclxuICAgICAgICB0aGlzLmJhc2tldC5yZXNldCh0aGlzLmJhc2tldERpcmVjdGlvbik7XHJcbiAgICAgICAgdGhpcy5jbG9jay5yZXNldCgpLnN0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy5pc1RpbWVFbmQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFkZFRpbWVCdG4uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZVN0YXIoKSB7XHJcbiAgICAgICAgbGV0IHN0YXIgPSB0aGlzLnN0YXJGYWN0b3J5LmdldCgpO1xyXG4gICAgICAgIHN0YXIucGFyZW50ID0gdGhpcy5lZmZlY3RMYXllcjtcclxuICAgICAgICBsZXQgeCA9IFV0aWxzLnJhbmRvbUludCgtMjUwLCAyNTApLFxyXG4gICAgICAgICAgICB5ID0gVXRpbHMucmFuZG9tSW50KC00NTAsIDQ1MCk7XHJcbiAgICAgICAgc3Rhci5zZXRQb3NpdGlvbih4LCB5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25IaXRTdGFyKHN0YXJOb2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgTW9kdWxlLmdldChTb3VuZE1ncikucGxheUVmZmVjdChTb3VuZFBhdGguYnViYmxlKTtcclxuICAgICAgICB0aGlzLnN0YXJGYWN0b3J5LnB1dChzdGFyTm9kZSk7XHJcbiAgICAgICAgQ29pbk1nci5pbnMuY2hhbmdlQ29pbigxKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVN0YXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQ29pbkNoYW5nZWQoKSB7XHJcbiAgICAgICAgbGV0IG51bSA9IENvaW5NZ3IuaW5zLmdldENvaW4oKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXIobnVtKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVN0YXIobnVtOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnN0YXJMYWJlbC5zdHJpbmcgPSBudW0udG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uVGltZUVuZCgpIHtcclxuICAgICAgICB0aGlzLmlzVGltZUVuZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hZGRUaW1lQnRuLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLmJhbGwuaXNPbkdyb3VuZCkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnYW1lT3ZlcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNHYW1lT3Zlcikge1xyXG4gICAgICAgICAgICB0aGlzLmlzR2FtZU92ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICBNb2R1bGUuZ2V0KFNldHRsZSkuc2hvdyh0aGlzLnNjb3JlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==