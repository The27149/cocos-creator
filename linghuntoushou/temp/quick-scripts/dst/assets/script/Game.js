
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
        this.initPickType();
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
    Game.prototype.initPickType = function () {
        var key = "shopProps";
        var localData = Global_1.Global.ins.localData.getData(key);
        var type = 1;
        if (localData) {
            type = localData.find(function (item) { return !item.isLock && item.isPick; }).type;
        }
        Global_1.Global.ins.shopPickType = type;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLCtCQUEwQjtBQUMxQixtQ0FBOEI7QUFDOUIsaUNBQXVFO0FBQ3ZFLHFDQUFnQztBQUVoQyxtQ0FBOEI7QUFDOUIsdUNBQWtDO0FBQ2xDLDhDQUF5QztBQUN6QywwQ0FBNEQ7QUFDNUQsMENBQXFDO0FBQ3JDLG9EQUFtRDtBQUNuRCx3Q0FBbUM7QUFHN0IsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQU07SUFBeEM7UUFBQSxxRUFzTEM7UUFwTEcsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixjQUFRLEdBQW1CLElBQUksQ0FBQztRQUdoQyxlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRzNCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRzVCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFHMUIsZUFBUyxHQUFhLElBQUksQ0FBQztRQUczQixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUVyQixVQUFJLEdBQVMsSUFBSSxDQUFDO1FBQ2xCLFlBQU0sR0FBVyxJQUFJLENBQUM7UUFDOUIsaUJBQWlCO1FBQ1YscUJBQWUsR0FBVyxDQUFDLENBQUM7UUFDbkMsVUFBVTtRQUNILGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDMUIsV0FBSyxHQUFVLElBQUksQ0FBQztRQUNwQixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixpQkFBVyxHQUFnQixJQUFJLENBQUM7UUFFaEMsWUFBTSxHQUFXLENBQUMsQ0FBQzs7SUFnSi9CLENBQUM7SUEvSUcsc0JBQVksdUJBQUs7YUFBakI7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFD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TSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QztJQUNMLENBQUM7SUFsTEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDTztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNTO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7MENBQ087SUFHaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDUTtJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzRDQUNTO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ1U7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5Q0FDTTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNRO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NENBQ1M7SUExQlosSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQXNMeEI7SUFBRCxXQUFDO0NBdExELEFBc0xDLENBdExpQyxnQkFBTSxHQXNMdkM7a0JBdExvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBCYWxsIGZyb20gXCIuL0JhbGxcIjtcclxuaW1wb3J0IEJhc2tldCBmcm9tIFwiLi9CYXNrZXRcIjtcclxuaW1wb3J0IENsb2NrLCB7IENMT0NLX1VJTU9ERSwgSUNsb2NrUGFyYW0sIElDbG9ja1ZpZXcgfSBmcm9tIFwiLi9DbG9ja1wiO1xyXG5pbXBvcnQgQ29pbk1nciBmcm9tIFwiLi9Db2luTWdyXCI7XHJcbmltcG9ydCBMYXVuY2ggZnJvbSBcIi4vTGF1bmNoXCI7XHJcbmltcG9ydCBTZXR0bGUgZnJvbSBcIi4vU2V0dGxlXCI7XHJcbmltcG9ydCBTb3VuZE1nciBmcm9tIFwiLi9Tb3VuZE1nclwiO1xyXG5pbXBvcnQgRXZlbnRNZ3IgZnJvbSBcIi4vY29tbW9uL0V2ZW50TWdyXCI7XHJcbmltcG9ydCB7IEdFdmVudCwgR2xvYmFsLCBTb3VuZFBhdGggfSBmcm9tIFwiLi9jb21tb24vR2xvYmFsXCI7XHJcbmltcG9ydCBNb2R1bGUgZnJvbSBcIi4vY29tbW9uL01vZHVsZVwiO1xyXG5pbXBvcnQgeyBOb2RlRmFjdG9yeSB9IGZyb20gXCIuL2NvbW1vbi9Ob2RlRmFjdG9yeVwiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vY29tbW9uL1V0aWxzXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUgZXh0ZW5kcyBNb2R1bGUge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiYWxsTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiYXNrZXROb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXHJcbiAgICBwcm9ncmVzczogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHRpbWVMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHNjb3JlTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVmZmVjdExheWVyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc3RhclByZTogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBzdGFyTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgYWRkVGltZUJ0bjogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGJhbGw6IEJhbGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBiYXNrZXQ6IEJhc2tldCA9IG51bGw7XHJcbiAgICAvKirlvZPliY3nr67nrZDmlrnlkJEg5bem6LSf5Y+z5q2jICovXHJcbiAgICBwdWJsaWMgYmFza2V0RGlyZWN0aW9uOiBudW1iZXIgPSAxO1xyXG4gICAgLyoq5piv5ZCm57uT5p2fICovXHJcbiAgICBwdWJsaWMgaXNUaW1lRW5kOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGNsb2NrOiBDbG9jayA9IG51bGw7XHJcbiAgICBwcml2YXRlIGlzR2FtZU92ZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgc3RhckZhY3Rvcnk6IE5vZGVGYWN0b3J5ID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIF9zY29yZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgZ2V0IHNjb3JlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Njb3JlO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzZXQgc2NvcmUodjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2NvcmUgPSB2O1xyXG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSB2LnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJhbGwgPSB0aGlzLmJhbGxOb2RlLmdldENvbXBvbmVudChCYWxsKTtcclxuICAgICAgICB0aGlzLmJhc2tldCA9IHRoaXMuYmFza2V0Tm9kZS5nZXRDb21wb25lbnQoQmFza2V0KTtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuaW5pdENsb2NrKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGFyKENvaW5NZ3IuaW5zLmdldENvaW4oKSk7XHJcbiAgICAgICAgdGhpcy5zdGFyRmFjdG9yeSA9IG5ldyBOb2RlRmFjdG9yeSgpLmluaXQodGhpcy5zdGFyUHJlKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVN0YXIoKTtcclxuICAgICAgICB0aGlzLmluaXRQaWNrVHlwZSgpO1xyXG4gICAgICAgIE1vZHVsZS5nZXQoU2V0dGxlKS5oaWRlKCk7XHJcbiAgICAgICAgRXZlbnRNZ3IuaW5zLm9uKEdFdmVudC5jb2luQ2hhbmdlZCwgdGhpcy5vbkNvaW5DaGFuZ2VkLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIEV2ZW50TWdyLmlucy5vZmYoR0V2ZW50LmNvaW5DaGFuZ2VkLCB0aGlzLm9uQ29pbkNoYW5nZWQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2MuZmFkZUluKDEpKTtcclxuICAgICAgICB0aGlzLm5ld0dhbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGlkZSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLmZhZGVPdXQoMSkpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRFdmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmFkZFRpbWVCdG4ubm9kZS5vbihgY2xpY2tgLCB0aGlzLm9uQWRkVGltZSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0Q2xvY2soKSB7XHJcbiAgICAgICAgbGV0IHBhcmFtOiBJQ2xvY2tQYXJhbSA9IHtcclxuICAgICAgICAgICAgdG90YWxUaW1lOiA1LFxyXG4gICAgICAgICAgICBlbmRDYWxsOiB0aGlzLm9uVGltZUVuZC5iaW5kKHRoaXMpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbGV0IHVpUGFyYW06IElDbG9ja1ZpZXcgPSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlOiBDTE9DS19VSU1PREUuc2hvd1JlbWFpbixcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6IHRoaXMucHJvZ3Jlc3MsXHJcbiAgICAgICAgICAgIHRpbWVMYWJlbDogdGhpcy50aW1lTGFiZWwsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjbG9jayA9IHRoaXMuY2xvY2sgPSBuZXcgQ2xvY2soKTtcclxuICAgICAgICBjbG9jay5pbml0KHBhcmFtKS5pbml0Vmlldyh1aVBhcmFtKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRQaWNrVHlwZSgpIHtcclxuICAgICAgICBsZXQga2V5ID0gYHNob3BQcm9wc2A7XHJcbiAgICAgICAgbGV0IGxvY2FsRGF0YSA9IEdsb2JhbC5pbnMubG9jYWxEYXRhLmdldERhdGEoa2V5KTtcclxuICAgICAgICBsZXQgdHlwZSA9IDE7XHJcbiAgICAgICAgaWYgKGxvY2FsRGF0YSkge1xyXG4gICAgICAgICAgICB0eXBlID0gbG9jYWxEYXRhLmZpbmQoaXRlbSA9PiAhaXRlbS5pc0xvY2sgJiYgaXRlbS5pc1BpY2spLnR5cGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEdsb2JhbC5pbnMuc2hvcFBpY2tUeXBlID0gdHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmV3R2FtZSgpIHtcclxuICAgICAgICB0aGlzLmNsb2NrLnJlc2V0KCk7XHJcbiAgICAgICAgdGhpcy5iYXNrZXREaXJlY3Rpb24gPSAtMTtcclxuICAgICAgICB0aGlzLmJhc2tldC5yZXNldCh0aGlzLmJhc2tldERpcmVjdGlvbik7XHJcbiAgICAgICAgdGhpcy5iYWxsLnJlc2V0KCk7XHJcbiAgICAgICAgdGhpcy5pc1RpbWVFbmQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgICAgICB0aGlzLmlzR2FtZU92ZXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFkZFRpbWVCdG4uaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblRvdWNoRW5kKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1RpbWVFbmQpIHJldHVybjtcclxuICAgICAgICB0aGlzLmJhbGwuanVtcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25BZGRUaW1lKCkge1xyXG4gICAgICAgIE1vZHVsZS5nZXQoU291bmRNZ3IpLnBsYXlCdG5Tb3VuZCgpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzVGltZUVuZCkgcmV0dXJuO1xyXG4gICAgICAgIGxldCByZW1haW5TdGFyID0gQ29pbk1nci5pbnMuZ2V0Q29pbigpO1xyXG4gICAgICAgIGlmIChyZW1haW5TdGFyIDwgMTApIHJldHVybjtcclxuICAgICAgICBDb2luTWdyLmlucy5jaGFuZ2VDb2luKC0xMCk7XHJcbiAgICAgICAgdGhpcy5jbG9jay5yZXNldCgpLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq6L6+5oiQ55uu5qCHICovXHJcbiAgICBwdWJsaWMgb25IaXRCYXNrZXQoKSB7XHJcbiAgICAgICAgTW9kdWxlLmdldChTb3VuZE1ncikucGxheUVmZmVjdChTb3VuZFBhdGguZnJlc2gpO1xyXG4gICAgICAgIHRoaXMuc2NvcmUrKztcclxuICAgICAgICB0aGlzLmJhc2tldERpcmVjdGlvbiAqPSAtMTtcclxuICAgICAgICB0aGlzLmJhc2tldC5yZXNldCh0aGlzLmJhc2tldERpcmVjdGlvbik7XHJcbiAgICAgICAgdGhpcy5jbG9jay5yZXNldCgpLnN0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy5pc1RpbWVFbmQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFkZFRpbWVCdG4uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZVN0YXIoKSB7XHJcbiAgICAgICAgbGV0IHN0YXIgPSB0aGlzLnN0YXJGYWN0b3J5LmdldCgpO1xyXG4gICAgICAgIHN0YXIucGFyZW50ID0gdGhpcy5lZmZlY3RMYXllcjtcclxuICAgICAgICBsZXQgeCA9IFV0aWxzLnJhbmRvbUludCgtMjUwLCAyNTApLFxyXG4gICAgICAgICAgICB5ID0gVXRpbHMucmFuZG9tSW50KC00NTAsIDQ1MCk7XHJcbiAgICAgICAgc3Rhci5zZXRQb3NpdGlvbih4LCB5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25IaXRTdGFyKHN0YXJOb2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgTW9kdWxlLmdldChTb3VuZE1ncikucGxheUVmZmVjdChTb3VuZFBhdGguYnViYmxlKTtcclxuICAgICAgICB0aGlzLnN0YXJGYWN0b3J5LnB1dChzdGFyTm9kZSk7XHJcbiAgICAgICAgQ29pbk1nci5pbnMuY2hhbmdlQ29pbigxKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVN0YXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQ29pbkNoYW5nZWQoKSB7XHJcbiAgICAgICAgbGV0IG51bSA9IENvaW5NZ3IuaW5zLmdldENvaW4oKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXIobnVtKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVN0YXIobnVtOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnN0YXJMYWJlbC5zdHJpbmcgPSBudW0udG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uVGltZUVuZCgpIHtcclxuICAgICAgICB0aGlzLmlzVGltZUVuZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hZGRUaW1lQnRuLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLmJhbGwuaXNPbkdyb3VuZCkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnYW1lT3ZlcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNHYW1lT3Zlcikge1xyXG4gICAgICAgICAgICB0aGlzLmlzR2FtZU92ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICBNb2R1bGUuZ2V0KFNldHRsZSkuc2hvdyh0aGlzLnNjb3JlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==