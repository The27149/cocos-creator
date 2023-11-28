
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/Module.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb21tb25cXE1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1Qzs7R0FFRztBQUVIO0lBQTZDLDBCQUFZO0lBVXJEO1FBQUEsWUFDSSxpQkFBTyxTQUtWO1FBSkcsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDcEMsUUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUksQ0FBQyxDQUFDOztRQUMzQiwrQkFBK0I7UUFDL0IsSUFBSTtJQUNSLENBQUM7ZUFoQnlCLE1BQU07SUFFaEMsVUFBVTtJQUNJLFVBQUcsR0FBakIsVUFBb0MsR0FBcUI7UUFDckQsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLEdBQUcsUUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLENBQUM7WUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLDBDQUFVLElBQUksbUNBQVksQ0FBQyxDQUFDO1FBQ2xELE9BQU8sQ0FBQyxDQUFBO0lBQ1osQ0FBQzs7SUFQYyxVQUFHLEdBQXFCLElBQUksR0FBRyxFQUFFLENBQUM7SUFEdkIsTUFBTTtRQURuQyxPQUFPO09BQ3NCLE1BQU0sQ0FvQm5DO0lBQUQsYUFBQztDQXBCRCxBQW9CQyxDQXBCNEMsRUFBRSxDQUFDLFNBQVMsR0FvQnhEO2tCQXBCNkIsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG4vKipcclxuICog5Y+v5Lul5YWo5bGA6K6/6Zeu55qE5Y2V5L6L57uE5Lu2XHJcbiAqL1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBNb2R1bGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbWFwOiBNYXA8c3RyaW5nLCBhbnk+ID0gbmV3IE1hcCgpO1xyXG4gICAgLyoq6I635Y+W5qih5Z2XICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldDxUIGV4dGVuZHMgTW9kdWxlPihjbHM6IHsgcHJvdG90eXBlOiBUIH0pOiBUIHwgbnVsbCB7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBjYy5qcy5nZXRDbGFzc05hbWUoY2xzKTtcclxuICAgICAgICBsZXQgbSA9IE1vZHVsZS5tYXAuZ2V0KG5hbWUpO1xyXG4gICAgICAgIGlmICghbSkgY29uc29sZS5lcnJvcihg6KaB6I635Y+W55qE5qih5Z2XOiR7bmFtZX3lupTnu6fmib9Nb2R1bGXnsbtgKTtcclxuICAgICAgICByZXR1cm4gbVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIGxldCBuYW1lID0gY2MuanMuZ2V0Q2xhc3NOYW1lKHRoaXMpO1xyXG4gICAgICAgIE1vZHVsZS5tYXAuc2V0KG5hbWUsIHRoaXMpO1xyXG4gICAgICAgIC8vIGlmICghTW9kdWxlLm1hcC5nZXQobmFtZSkpIHtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuIl19