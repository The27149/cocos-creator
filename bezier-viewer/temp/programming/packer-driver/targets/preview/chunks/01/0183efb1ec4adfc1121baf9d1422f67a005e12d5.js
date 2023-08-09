System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _class, _crd, ccclass, property, Pool;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a6879dPmetKb5ET18ePUefs", "Pool", undefined);

      ({
        ccclass,
        property
      } = cc._decorator);

      _export("default", Pool = ccclass(_class = class Pool {
        constructor(pre) {
          this.prefab = null;
          this.nodePool = new cc.NodePool();
          this.prefab = pre;
        }

        /** 获取节点 */
        getNode() {
          var node = null;

          if (this.nodePool.size() > 0) {
            node = this.nodePool.get();
          } else {
            node = cc.instantiate(this.prefab);
          }

          return node;
        }
        /** 放回节点 */


        putNode(node) {
          var test = this.getNode();
          if (node.name === test.name) this.nodePool.put(node);else console.warn("\u8282\u70B9\u653E\u56DE\u5230\u9519\u8BEF\u7684\u8282\u70B9\u6C60\uFF1A", node, this.nodePool);
        }
        /**清空节点池 */


        clear() {
          this.nodePool && this.nodePool.clear();
        }

      }) || _class);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0183efb1ec4adfc1121baf9d1422f67a005e12d5.js.map