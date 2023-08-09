System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, NodePool, _decorator, _class, _crd, ccclass, property, Factory;

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

      _export("default", Factory = ccclass(_class = class Factory {
        constructor(pre) {
          this.prefab = null;
          this.nodePool = new NodePool();
          this.prefab = pre;
        }

        init(num) {
          for (let i = 0; i < num; i++) {
            this.nodePool.put(instantiate(this.prefab));
          }
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
//# sourceMappingURL=553fc84055699c7e2f7a8652394dc815373a3c3d.js.map