System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Prefab, Sprite, Color, UITransform, v3, v2, CCFloat, Graphics, Label, director, Canvas, NodeEventType, NodeFactory, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, Paper;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfNodeFactory(extras) {
    _reporterNs.report("NodeFactory", "./NodeFactory", _context.meta, extras);
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
      Prefab = _cc.Prefab;
      Sprite = _cc.Sprite;
      Color = _cc.Color;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      v2 = _cc.v2;
      CCFloat = _cc.CCFloat;
      Graphics = _cc.Graphics;
      Label = _cc.Label;
      director = _cc.director;
      Canvas = _cc.Canvas;
      NodeEventType = _cc.NodeEventType;
    }, function (_unresolved_2) {
      NodeFactory = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bcfd8l1w8RKP4obhVS16PMB", "Paper", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'Vec2', 'Sprite', 'Color', 'ColorKey', 'color', 'UITransform', 'Vec3', 'v3', 'v2', 'CCFloat', 'Graphics', 'Label', 'find', 'director', 'Canvas', 'NodeEventType', 'EventTouch']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Paper", Paper = (_dec = ccclass('Paper'), _dec2 = property(Prefab), _dec3 = property(Color), _dec4 = property(CCFloat), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec(_class = (_class2 = class Paper extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "pointPre", _descriptor, this);

          _initializerDefineProperty(this, "lineColor", _descriptor2, this);

          _initializerDefineProperty(this, "lineWidth", _descriptor3, this);

          _initializerDefineProperty(this, "lineContainer", _descriptor4, this);

          _initializerDefineProperty(this, "ctrlContainer", _descriptor5, this);

          _initializerDefineProperty(this, "graphicsContainer", _descriptor6, this);

          this.canvasNode = null;
          this.pointPool = null;
          this.pointNum = 1000;
          this.ctrlPoints = [];
          this.stageMultiList = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800];
        }

        onLoad() {
          this.canvasNode = director.getScene().getComponentInChildren(Canvas).node;
          this.addEvents();
          this.pointPool = new (_crd && NodeFactory === void 0 ? (_reportPossibleCrUseOfNodeFactory({
            error: Error()
          }), NodeFactory) : NodeFactory)(this.pointPre);
          this.pointPool.init(this.pointNum);
          this.randomDraw(3);
        }

        addEvents() {
          this.canvasNode.on(NodeEventType.TOUCH_MOVE, this.onTouchMove, this);
        }

        removeEvents() {
          this.canvasNode.off(NodeEventType.TOUCH_MOVE, this.onTouchMove, this);
        }

        onTouchMove(e) {
          var delta = e.touch.getDelta();
          console.log('x, y:', delta.x, delta.y);
          this.node.position = this.node.position.add3f(delta.x, delta.y);
        }

        randomDraw(stage) {
          if (stage === void 0) {
            stage = 3;
          }

          for (var i = 0; i < stage + 1; i++) {
            var x = Math.round(this.random(-960, 960));
            var y = Math.round(this.random(-540, 540));
            this.ctrlPoints.push(v2(x, y));
          }

          this.draw();
        }

        random(min, max) {
          return Math.random() * (max - min) + min;
        }

        draw() {
          var ctrls = this.ctrlPoints; //计算路径坐标

          var n = ctrls.length - 1;

          for (var i = 0, len = this.pointNum; i < len; i++) {
            var t = i / len,
                x = 0,
                y = 0;
            var item = void 0,
                ctrl = void 0;

            for (var j = 0; j < n + 1; j++) {
              item = this.comb(n, j) * Math.pow(1 - t, n - j) * Math.pow(t, j);
              ctrl = ctrls[j];
              x += ctrl.x * item;
              y += ctrl.y * item;
            } // this.line1(x, y, i);


            this.line2(x, y, i);
          }

          this.ctrls1(); // this.ctrls2();
        }
        /**方式1： 点累积成线 */


        line1(x, y, i) {
          this.lineContainer.children.forEach(child => {
            this.pointPool.putNode(child);
          });
          var node = this.lineContainer.children[i];

          if (!node) {
            node = this.pointPool.getNode();
            node.parent = this.lineContainer;
          }

          node.getComponent(Sprite).color = this.lineColor;
          var ui = node.getComponent(UITransform);
          ui.width = ui.height = this.lineWidth;
          node.setPosition(v3(x, y));
        }
        /**绘制控制点*/


        ctrls1() {
          this.ctrlContainer.children.forEach(child => {
            this.pointPool.putNode(child);
          });
          var ctrls = this.ctrlPoints;

          for (var k = 0; k < ctrls.length; k++) {
            var point = this.pointPool.getNode();
            point.parent = this.ctrlContainer;
            var ui = point.getComponent(UITransform);
            ui.width = ui.height = this.lineWidth * 3;
            point.getComponent(Sprite).color = Color.YELLOW;
            var x = ctrls[k].x,
                y = ctrls[k].y;
            point.setPosition(v3(x, y));
            point.getChildByName('coordinate').getComponent(Label).string = "P" + k + "(x:" + x + ", y:" + y + ")";
          }
        }
        /**方式2： canvas2d绘制 */


        line2(x, y, i) {
          var g = this.graphicsContainer.getComponent(Graphics);

          if (i === 0) {
            g.clear();
            g.moveTo(x, y);
          } else g.lineTo(x, y);

          if (i === this.pointNum - 1) g.stroke();
        }

        ctrls2() {
          var g = this.graphicsContainer.getComponent(Graphics);
          var ctrls = this.ctrlPoints;

          for (var k = 0; k < ctrls.length; k++) {
            g.circle(ctrls[k].x, ctrls[k].y, this.lineWidth * 1.5);
            g.fillColor = Color.YELLOW;
            g.fill();
          }
        }
        /**计算阶乘 */


        stageMulti(num) {
          var res = this.stageMultiList[num];

          if (!res) {
            res = num * this.stageMulti(num - 1);
            this.stageMultiList[num] = res;
          }

          return res;
        }
        /** 计算组合数 */


        comb(n, i) {
          return this.stageMulti(n) / this.stageMulti(i) / this.stageMulti(n - i);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pointPre", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lineColor", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lineWidth", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lineContainer", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "ctrlContainer", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "graphicsContainer", [_dec7], {
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
//# sourceMappingURL=b08e08ea87baedfb33c18774ab55d18e7526a8d3.js.map