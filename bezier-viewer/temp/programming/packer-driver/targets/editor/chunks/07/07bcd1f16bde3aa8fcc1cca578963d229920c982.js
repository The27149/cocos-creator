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
          let node = null;

          if (this.nodePool.size() > 0) {
            node = this.nodePool.get();
          } else {
            node = cc.instantiate(this.prefab);
          }

          return node;
        }
        /** 放回节点 */


        putNode(node) {
          let test = this.getNode();
          if (node.name === test.name) this.nodePool.put(node);else console.warn(`节点放回到错误的节点池：`, node, this.nodePool);
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
//# sourceMappingURL=07bcd1f16bde3aa8fcc1cca578963d229920c982.js.map