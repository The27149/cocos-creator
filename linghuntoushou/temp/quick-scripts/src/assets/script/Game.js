"use strict";
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