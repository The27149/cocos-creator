"use strict";
cc._RF.push(module, '6cfb2iIL69LGorIpl7oWwfg', 'Module');
// script/common/Module.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 可以全局访问的单例组件
 */
var Module = /** @class */ (function (_super) {
    __extends(Module, _super);
    function Module() {
        var _this = _super.call(this) || this;
        var name = cc.js.getClassName(_this);
        Module_1.map.set(name, _this);
        return _this;
        // if (!Module.map.get(name)) {
        // }
    }
    Module_1 = Module;
    /**获取模块 */
    Module.get = function (cls) {
        var name = cc.js.getClassName(cls);
        var m = Module_1.map.get(name);
        if (!m)
            console.error("\u8981\u83B7\u53D6\u7684\u6A21\u5757:" + name + "\u5E94\u7EE7\u627FModule\u7C7B");
        return m;
    };
    var Module_1;
    Module.map = new Map();
    Module = Module_1 = __decorate([
        ccclass
    ], Module);
    return Module;
}(cc.Component));
exports.default = Module;

cc._RF.pop();