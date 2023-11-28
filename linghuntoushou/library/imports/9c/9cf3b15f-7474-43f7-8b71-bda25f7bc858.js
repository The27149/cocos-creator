"use strict";
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