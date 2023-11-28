"use strict";
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