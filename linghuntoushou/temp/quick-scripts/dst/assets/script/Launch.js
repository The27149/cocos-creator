
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
        _this.canStart = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxMYXVuY2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EscUNBQWdDO0FBQ2hDLCtCQUEwQjtBQUMxQix1Q0FBa0M7QUFDbEMsOENBQXlDO0FBQ3pDLDBDQUFpRDtBQUNqRCwwQ0FBcUM7QUFHL0IsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0MsMEJBQU07SUFBMUM7UUFBQSxxRUFzRUM7UUFuRUcsY0FBUSxHQUFjLElBQUksQ0FBQztRQUczQixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRzNCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFFbEIsY0FBUSxHQUFZLEtBQUssQ0FBQzs7SUEyRHRDLENBQUM7SUF6RGEsdUJBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JELGtCQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxlQUFNLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFUywwQkFBUyxHQUFuQjtRQUNJLGtCQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFNLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVPLGdDQUFlLEdBQXZCO1FBQ0ksZ0JBQU0sQ0FBQyxHQUFHLENBQUMsa0JBQVEsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU87UUFDM0IsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osZ0JBQU0sQ0FBQyxHQUFHLENBQUMsY0FBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVPLDJCQUFVLEdBQWxCO1FBQ0ksZ0JBQU0sQ0FBQyxHQUFHLENBQUMsa0JBQVEsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRU0scUJBQUksR0FBWDtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLFVBQVUsQ0FBQztZQUNQLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBRU0scUJBQUksR0FBWDtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxVQUFVLENBQUM7WUFDUCxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN6QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBRU8sMkJBQVUsR0FBbEIsVUFBbUIsR0FBVztRQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVPLDhCQUFhLEdBQXJCO1FBQ0ksSUFBSSxHQUFHLEdBQUcsaUJBQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRU8sNEJBQVcsR0FBbkI7UUFBQSxpQkFRQztRQVBHLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLGVBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2hFLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFjO1lBQzNELElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ04sSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDO2FBQzNCO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBbEVEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NENBQ087SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs2Q0FDUTtJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzJDQUNNO0lBVFQsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQXNFMUI7SUFBRCxhQUFDO0NBdEVELEFBc0VDLENBdEVtQyxnQkFBTSxHQXNFekM7a0JBdEVvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBDb2luTWdyIGZyb20gXCIuL0NvaW5NZ3JcIjtcclxuaW1wb3J0IEdhbWUgZnJvbSBcIi4vR2FtZVwiO1xyXG5pbXBvcnQgU291bmRNZ3IgZnJvbSBcIi4vU291bmRNZ3JcIjtcclxuaW1wb3J0IEV2ZW50TWdyIGZyb20gXCIuL2NvbW1vbi9FdmVudE1nclwiO1xyXG5pbXBvcnQgeyBHQ29uc3QsIEdFdmVudCB9IGZyb20gXCIuL2NvbW1vbi9HbG9iYWxcIjtcclxuaW1wb3J0IE1vZHVsZSBmcm9tIFwiLi9jb21tb24vTW9kdWxlXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhdW5jaCBleHRlbmRzIE1vZHVsZSB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHN0YXJ0QnRuOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHN0YXJMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBzaG9wQnRuOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgY2FuU3RhcnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3RhcnRCdG4ubm9kZS5vbignY2xpY2snLCB0aGlzLm9uQ2xpY2tTdGFydEJ0biwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5zaG9wQnRuLm5vZGUub24oYGNsaWNrYCwgdGhpcy5vbk9wZW5TaG9wLCB0aGlzKTtcclxuICAgICAgICBFdmVudE1nci5pbnMub24oR0V2ZW50LmNvaW5DaGFuZ2VkLCB0aGlzLm9uQ29pbkNoYW5nZWQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhcihDb2luTWdyLmlucy5nZXRDb2luKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgRXZlbnRNZ3IuaW5zLm9mZihHRXZlbnQuY29pbkNoYW5nZWQsIHRoaXMub25Db2luQ2hhbmdlZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkNsaWNrU3RhcnRCdG4oKSB7XHJcbiAgICAgICAgTW9kdWxlLmdldChTb3VuZE1ncikucGxheUJ0blNvdW5kKCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhblN0YXJ0KSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgTW9kdWxlLmdldChHYW1lKS5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbk9wZW5TaG9wKCkge1xyXG4gICAgICAgIE1vZHVsZS5nZXQoU291bmRNZ3IpLnBsYXlCdG5Tb3VuZCgpO1xyXG4gICAgICAgIHRoaXMuYWRkU2hvcFZpZXcoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGlkZSgpIHtcclxuICAgICAgICB0aGlzLmNhblN0YXJ0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5mYWRlT3V0KDEpKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2MuZmFkZUluKDEpKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jYW5TdGFydCA9IHRydWU7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVTdGFyKG51bTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zdGFyTGFiZWwuc3RyaW5nID0gbnVtLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkNvaW5DaGFuZ2VkKCkge1xyXG4gICAgICAgIGxldCBudW0gPSBDb2luTWdyLmlucy5nZXRDb2luKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGFyKG51bSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRTaG9wVmlldygpIHtcclxuICAgICAgICBsZXQgYnVuZGxlID0gY2MuYXNzZXRNYW5hZ2VyLmdldEJ1bmRsZShHQ29uc3QuY3VzdG9tQ29tcEJ1bmRsZSk7XHJcbiAgICAgICAgYnVuZGxlLmxvYWQoYHNob3AvcHJlZmFiL1Nob3BgLCBjYy5QcmVmYWIsIChlcnIsIHByZTogY2MuUHJlZmFiKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZSk7XHJcbiAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuIl19