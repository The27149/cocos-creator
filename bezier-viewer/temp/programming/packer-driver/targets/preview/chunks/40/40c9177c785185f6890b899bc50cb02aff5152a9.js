System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, NodeEventType, v2, UITransform, v3, _dec, _class, _crd, ccclass, property, Point;

  function _reportPossibleCrUseOfPaper(extras) {
    _reporterNs.report("Paper", "./Paper", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      NodeEventType = _cc.NodeEventType;
      v2 = _cc.v2;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fdfc0z0VztDzZHKDrV8vmp+", "Point", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Button', 'Touch', 'EventTouch', 'NodeEventType', 'Vec2', 'v2', 'UITransform', 'Vec3', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Point", Point = (_dec = ccclass('Point'), _dec(_class = class Point extends Component {
        constructor() {
          super(...arguments);
          this.touchPos = v2();
          this.touchPos_world = v3();
          this.touchPos_node = v3();
          this.paper = null;
        }

        init(paper) {
          this.paper = paper;
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
          e.touch.getUILocation(this.touchPos);
          this.touchPos_world.x = this.touchPos.x;
          this.touchPos_world.y = this.touchPos.y;
          this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(this.touchPos_world, this.touchPos_node);
          this.node.setPosition(this.touchPos_node.x, this.touchPos_node.y);
          this.paper.updateCtrls();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=40c9177c785185f6890b899bc50cb02aff5152a9.js.map