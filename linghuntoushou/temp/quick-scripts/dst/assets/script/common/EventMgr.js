
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/EventMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxFdmVudE1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUNJO0lBQXdCLENBQUM7aUJBRFIsUUFBUTtJQUd6QixzQkFBa0IsZUFBRzthQUFyQjtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNaLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxVQUFRLEVBQUUsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNwQjtZQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUVPLHVCQUFJLEdBQVo7SUFFQSxDQUFDO0lBRU0sdUJBQUksR0FBWCxVQUFZLElBQVk7O1FBQUUsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCw2QkFBYzs7UUFDcEMsQ0FBQSxLQUFBLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQSxDQUFDLElBQUksMkJBQUMsSUFBSSxHQUFLLElBQUksR0FBRTtJQUNoRCxDQUFDO0lBRU0scUJBQUUsR0FBVCxVQUFVLElBQVksRUFBRSxJQUFjLEVBQUUsTUFBVztRQUMvQyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVNLHNCQUFHLEdBQVYsVUFBVyxJQUFZLEVBQUUsSUFBYyxFQUFFLE1BQVc7UUFDaEQsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3BELENBQUM7O0lBdkJjLGFBQUksR0FBYSxJQUFJLENBQUM7SUFGcEIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTBCNUI7SUFBRCxlQUFDO0NBMUJELEFBMEJDLElBQUE7a0JBMUJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRNZ3Ige1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgfVxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luczogRXZlbnRNZ3IgPSBudWxsO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zKCk6IEV2ZW50TWdyIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lucykge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnMgPSBuZXcgRXZlbnRNZ3IoKTtcclxuICAgICAgICAgICAgdGhpcy5faW5zLmluaXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lucztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbWl0KG5hbWU6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcclxuICAgICAgICBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5lbWl0KG5hbWUsIC4uLmFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbihuYW1lOiBzdHJpbmcsIGNhbGw6IEZ1bmN0aW9uLCB0YXJnZXQ6IGFueSkge1xyXG4gICAgICAgIGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLm9uKG5hbWUsIGNhbGwsIHRhcmdldCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9mZihuYW1lOiBzdHJpbmcsIGNhbGw6IEZ1bmN0aW9uLCB0YXJnZXQ6IGFueSkge1xyXG4gICAgICAgIGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLm9mZihuYW1lLCBjYWxsLCB0YXJnZXQpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==