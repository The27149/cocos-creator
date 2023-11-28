
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