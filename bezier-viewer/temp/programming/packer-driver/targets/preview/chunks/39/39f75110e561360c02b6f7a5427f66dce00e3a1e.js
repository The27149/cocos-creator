System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, NodeEventType, v2, UITransform, v3, Label, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Point;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

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
      Node = _cc.Node;
      NodeEventType = _cc.NodeEventType;
      v2 = _cc.v2;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      Label = _cc.Label;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fdfc0z0VztDzZHKDrV8vmp+", "Point", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Button', 'Touch', 'EventTouch', 'NodeEventType', 'Vec2', 'v2', 'UITransform', 'Vec3', 'v3', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Point", Point = (_dec = ccclass('Point'), _dec2 = property(Label), _dec3 = property(Node), _dec(_class = (_class2 = class Point extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "coordinate", _descriptor, this);

          _initializerDefineProperty(this, "checkTag", _descriptor2, this);

          this.touchPos = v2();
          this.touchPos_world = v3();
          this.touchPos_node = v3();
          this.paper = null;
          this.index = 0;
          this.originFontSize = 30;
        }

        init(paper) {
          this.paper = paper;
        }

        onLoad() {
          this.addEvents();
          this.originFontSize = this.coordinate.fontSize;
        }

        onDestroy() {
          this.removeEvents();
        }

        addEvents() {
          this.node.on(NodeEventType.TOUCH_MOVE, this.onTouchMove, this);
          this.node.on(NodeEventType.TOUCH_START, this.onTouchStart, this);
          this.node.on(NodeEventType.TOUCH_END, this.onTouchEnd, this);
        }

        removeEvents() {
          this.node.off(NodeEventType.TOUCH_MOVE, this.onTouchMove, this);
          this.node.off(NodeEventType.TOUCH_START, this.onTouchStart, this);
          this.node.off(NodeEventType.TOUCH_END, this.onTouchEnd, this);
        }

        onTouchMove(e) {
          e.propagationStopped = true;
          this.updateCtrls(e);
        }

        onTouchStart() {}

        onTouchEnd(e) {
          this.updateCtrls(e, true);
          var last = this.paper.curCtrlPoint;
          if (last) last.hideCheckTag();
          this.paper.curCtrlPoint = this;
          this.showCheckTag();
        }

        updateCtrls(e, isFormat) {
          if (isFormat === void 0) {
            isFormat = false;
          }

          e.touch.getUILocation(this.touchPos);
          this.touchPos_world.x = this.touchPos.x;
          this.touchPos_world.y = this.touchPos.y;
          this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(this.touchPos_world, this.touchPos_node);

          if (isFormat) {
            this.touchPos_node.x = Math.round(this.touchPos_node.x);
            this.touchPos_node.y = Math.round(this.touchPos_node.y);
          }

          this.node.setPosition(this.touchPos_node.x, this.touchPos_node.y);
          this.paper.updateCtrls();
        }

        reset(i, x, y) {
          this.index = i;
          this.node.setPosition(v3(x, y));
          this.coordinate.string = "P" + i + "(x:" + x + ", y:" + y + ")";
        }

        showCheckTag() {
          this.checkTag.active = true;
        }

        hideCheckTag() {
          this.checkTag.active = false;
        }

        scaleSelf(v) {
          this.node.setScale(v3(v, v, 1));
          this.coordinate.fontSize = v * this.originFontSize;
          this.coordinate.lineHeight = v * this.originFontSize;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "coordinate", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "checkTag", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=39f75110e561360c02b6f7a5427f66dce00e3a1e.js.map