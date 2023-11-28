"use strict";
cc._RF.push(module, '6866coF48JIQJjS1RsnZxWO', 'EventMgr');
// script/EventMgr.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var EventMgr = /** @class */ (function () {
    function EventMgr() {
    }
    EventMgr_1 = EventMgr;
    Object.defineProperty(EventMgr, "ins", {
        get: function () {
            if (!this._ins) {
                this._ins = new EventMgr_1();
                this._ins.init();
            }
            return this._ins;
        },
        enumerable: false,
        configurable: true
    });
    EventMgr.prototype.init = function () {
    };
    EventMgr.prototype.emit = function (name) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (_a = cc.Canvas.instance.node).emit.apply(_a, __spreadArrays([name], args));
    };
    EventMgr.prototype.on = function (name, call, target) {
        cc.Canvas.instance.node.on(name, call, target);
    };
    EventMgr.prototype.off = function (name, call, target) {
        cc.Canvas.instance.node.off(name, call, target);
    };
    var EventMgr_1;
    EventMgr._ins = null;
    EventMgr = EventMgr_1 = __decorate([
        ccclass
    ], EventMgr);
    return EventMgr;
}());
exports.default = EventMgr;

cc._RF.pop();