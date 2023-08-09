System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, NodeEventType, _dec, _class, _crd, ccclass, property, Point;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      NodeEventType = _cc.NodeEventType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fdfc0z0VztDzZHKDrV8vmp+", "Point", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Button', 'Touch', 'EventTouch', 'NodeEventType']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Point", Point = (_dec = ccclass('Point'), _dec(_class = class Point extends Component {
        onLoad() {
          this.addEvents();
        }

        onDestroy() {
          this.removeEvents();
        }

        start() {}

        addEvents() {
          this.node.on(NodeEventType.TOUCH_MOVE, this.onTouchMove, this);
        }

        removeEvents() {
          this.node.off(NodeEventType.TOUCH_MOVE, this.onTouchMove, this);
        }

        onTouchMove(e) {
          console.log('touchMove:', e);
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=161dfc6e11ad08dab9b7117860f69024f9b6a9a9.js.map