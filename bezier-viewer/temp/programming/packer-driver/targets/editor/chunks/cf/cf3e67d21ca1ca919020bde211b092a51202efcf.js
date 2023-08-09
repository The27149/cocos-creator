System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, NodePool, _decorator, _class, _crd, ccclass, property, Pool;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      instantiate = _cc.instantiate;
      NodePool = _cc.NodePool;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a6879dPmetKb5ET18ePUefs", "Factory", undefined);

      __checkObsolete__(['instantiate', 'Node', 'NodePool', 'Prefab', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", Pool = ccclass(_class = class Pool {
        constructor(pre) {
          this.prefab = null;
          this.nodePool = new NodePool();
          this.prefab = pre;
        }

        /** 获取节点 */
        getNode() {
          let node = null;

          if (this.nodePool.size() > 0) {
            node = this.nodePool.get();
          } else {
            node = instantiate(this.prefab);
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
//# sourceMappingURL=cf3e67d21ca1ca919020bde211b092a51202efcf.js.map