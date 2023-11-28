"use strict";
cc._RF.push(module, 'da6fef6qh9JsanCBGCab5md', 'Global');
// script/common/Global.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vec2Group = exports.GEvent = exports.SoundPath = exports.ResPath = exports.GConst = exports.Global = void 0;
var LocalData_1 = require("./LocalData");
var ccclass = cc._decorator.ccclass;
var Global = /** @class */ (function () {
    function Global() {
        /**本地存储 */
        this.localData = new LocalData_1.default("game_9011301");
        this.shopPickType = 1; //选中的皮肤
    }
    Global_1 = Global;
    Object.defineProperty(Global, "ins", {
        get: function () {
            if (!this._ins)
                this._ins = new Global_1();
            return this._ins;
        },
        enumerable: false,
        configurable: true
    });
    var Global_1;
    Global._ins = null;
    Global = Global_1 = __decorate([
        ccclass
    ], Global);
    return Global;
}());
exports.Global = Global;
/**常量定义 */
exports.GConst = {
    gridCreatTime: 0.5,
    gridDisappearTime: 0.5,
    gridMoveTime: 0.3,
    scoreAniTime: 0.5,
    topScoreStorage: 'topScoreStorage',
    customCompBundle: "customComponents",
};
/**资源路径 */
exports.ResPath = {
    faceRootPath: 'texture/grid/',
};
/**声音路径 */
exports.SoundPath = {
    bubble: "sound/bubble",
    button: "sound/button",
    fresh: "sound/fresh",
    hitGround: "sound/hitGround",
    task: "sound/task",
};
exports.GEvent = {
    coinChanged: "coinChanged",
};
/**节点转换时使用的临时向量组 结构 */
var Vec2Group = /** @class */ (function () {
    function Vec2Group() {
        this.v2 = cc.v2();
        this.world = cc.v2();
        this.local = cc.v2();
    }
    return Vec2Group;
}());
exports.Vec2Group = Vec2Group;

cc._RF.pop();