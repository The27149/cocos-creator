System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, NodeEventType, v2, UITransform, _dec, _class, _crd, ccclass, property, Point;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      NodeEventType = _cc.NodeEventType;
      v2 = _cc.v2;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fdfc0z0VztDzZHKDrV8vmp+", "Point", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Button', 'Touch', 'EventTouch', 'NodeEventType', 'Vec2', 'v2', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Point", Point = (_dec = ccclass('Point'), _dec(_class = class Point extends Component {
        constructor(...args) {
          super(...args);
          this.touchPos = v2(0, 0);
        }

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
          e.propagationStopped = true;
          console.log('touchMove:', e);
          e.touch.getUILocation(this.touchPos);
          console.log('控制点：', this.touchPos.x, this.touchPos.y);
          this.node.parent.getComponent(UITransform).convertToNodeSpaceAR();
          this.node.setPosition(this.touchPos.x, this.touchPos.y);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c7787d985f8b4494218676e723b9ddfa0f37dee7.js.map