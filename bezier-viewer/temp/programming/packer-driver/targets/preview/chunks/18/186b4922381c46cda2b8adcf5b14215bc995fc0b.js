System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, NodePool, _decorator, _class, _crd, ccclass, property, NodeFactory;

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

      _cclegacy._RF.push({}, "7cc69rW9jFPJJ7QNeclbEub", "Factory", undefined);

      __checkObsolete__(['instantiate', 'Node', 'NodePool', 'Prefab', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", NodeFactory = ccclass(_class = class NodeFactory {
        constructor(pre) {
          this.prefab = null;
          this.nodePool = new NodePool();
          this.prefab = pre;
        }

        init(num) {
          for (var i = 0; i < num; i++) {
            this.nodePool.put(instantiate(this.prefab));
          }
        }
        /** 获取节点 */


        getNode() {
          var node = null;

          if (this.nodePool.size() > 0) {
            node = this.nodePool.get();
          } else {
            node = instantiate(this.prefab);
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
//# sourceMappingURL=186b4922381c46cda2b8adcf5b14215bc995fc0b.js.map