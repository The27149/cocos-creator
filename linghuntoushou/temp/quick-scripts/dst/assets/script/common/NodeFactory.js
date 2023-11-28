
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/NodeFactory.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9cf3bFfdHRD94txvaJfe8hY', 'NodeFactory');
// script/common/NodeFactory.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeFactory = void 0;
var ccclass = cc._decorator.ccclass;
/**再次封装节点池 */
var NodeFactory = /** @class */ (function () {
    function NodeFactory() {
        this.pre = null;
        this.pool = null;
    }
    NodeFactory.prototype.init = function (pre) {
        this.pre = pre;
        this.pool = new cc.NodePool();
        return this;
    };
    // private parent: cc.Node = null;
    NodeFactory.prototype.get = function () {
        var node = null;
        if (this.pool.size() > 0)
            node = this.pool.get();
        else
            node = cc.instantiate(this.pre);
        node.setPosition(0);
        return node;
    };
    NodeFactory.prototype.put = function (node) {
        this.pool.put(node);
    };
    NodeFactory = __decorate([
        ccclass('NodeFactory')
    ], NodeFactory);
    return NodeFactory;
}());
exports.NodeFactory = NodeFactory;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb21tb25cXE5vZGVGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNRLElBQUEsT0FBTyxHQUFLLEVBQUUsQ0FBQyxVQUFVLFFBQWxCLENBQW1CO0FBQ2xDLGFBQWE7QUFFYjtJQUFBO1FBUVksUUFBRyxHQUFjLElBQUksQ0FBQztRQUN0QixTQUFJLEdBQWdCLElBQUksQ0FBQztJQWNyQyxDQUFDO0lBckJVLDBCQUFJLEdBQVgsVUFBWSxHQUFjO1FBQ3RCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM5QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBSUQsa0NBQWtDO0lBRTNCLHlCQUFHLEdBQVY7UUFDSSxJQUFJLElBQUksR0FBWSxJQUFJLENBQUM7UUFDekIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7WUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQTs7WUFDM0MsSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLHlCQUFHLEdBQVYsVUFBVyxJQUFhO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUF0QlEsV0FBVztRQUR2QixPQUFPLENBQUMsYUFBYSxDQUFDO09BQ1YsV0FBVyxDQXVCdkI7SUFBRCxrQkFBQztDQXZCRCxBQXVCQyxJQUFBO0FBdkJZLGtDQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCB7IGNjY2xhc3MgfSA9IGNjLl9kZWNvcmF0b3I7XG4vKirlho3mrKHlsIHoo4XoioLngrnmsaAgKi9cbkBjY2NsYXNzKCdOb2RlRmFjdG9yeScpXG5leHBvcnQgY2xhc3MgTm9kZUZhY3Rvcnkge1xuXG4gICAgcHVibGljIGluaXQocHJlOiBjYy5QcmVmYWIpIHtcbiAgICAgICAgdGhpcy5wcmUgPSBwcmU7XG4gICAgICAgIHRoaXMucG9vbCA9IG5ldyBjYy5Ob2RlUG9vbCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwcml2YXRlIHByZTogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBwcml2YXRlIHBvb2w6IGNjLk5vZGVQb29sID0gbnVsbDtcbiAgICAvLyBwcml2YXRlIHBhcmVudDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBwdWJsaWMgZ2V0KCk6IGNjLk5vZGUge1xuICAgICAgICBsZXQgbm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLnBvb2wuc2l6ZSgpID4gMCkgbm9kZSA9IHRoaXMucG9vbC5nZXQoKVxuICAgICAgICBlbHNlIG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZSk7XG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oMCk7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIHB1YmxpYyBwdXQobm9kZTogY2MuTm9kZSkge1xuICAgICAgICB0aGlzLnBvb2wucHV0KG5vZGUpO1xuICAgIH1cbn1cblxuIl19