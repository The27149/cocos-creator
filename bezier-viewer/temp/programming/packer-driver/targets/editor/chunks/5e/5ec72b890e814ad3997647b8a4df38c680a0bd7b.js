System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Prefab, Sprite, Color, UITransform, v2, CCFloat, Graphics, Label, director, Canvas, NodeEventType, Button, NodeFactory, Point, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _crd, ccclass, property, Paper;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfNodeFactory(extras) {
    _reporterNs.report("NodeFactory", "./NodeFactory", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPoint(extras) {
    _reporterNs.report("Point", "./Point", _context.meta, extras);
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
      v2 = _cc.v2;
      CCFloat = _cc.CCFloat;
      Graphics = _cc.Graphics;
      Label = _cc.Label;
      director = _cc.director;
      Canvas = _cc.Canvas;
      NodeEventType = _cc.NodeEventType;
      Button = _cc.Button;
    }, function (_unresolved_2) {
      NodeFactory = _unresolved_2.default;
    }, function (_unresolved_3) {
      Point = _unresolved_3.Point;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bcfd8l1w8RKP4obhVS16PMB", "Paper", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'Vec2', 'Sprite', 'Color', 'ColorKey', 'color', 'UITransform', 'Vec3', 'v3', 'v2', 'CCFloat', 'Graphics', 'Label', 'find', 'director', 'Canvas', 'NodeEventType', 'EventTouch', 'EventMouse', 'Button']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Paper", Paper = (_dec = ccclass('Paper'), _dec2 = property(Prefab), _dec3 = property(Color), _dec4 = property(CCFloat), _dec5 = property(CCFloat), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Label), _dec10 = property(Button), _dec11 = property(Button), _dec12 = property(Button), _dec13 = property(Button), _dec14 = property(Button), _dec15 = property(Button), _dec16 = property(Node), _dec(_class = (_class2 = class Paper extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "pointPre", _descriptor, this);

          _initializerDefineProperty(this, "lineColor", _descriptor2, this);

          _initializerDefineProperty(this, "lineWidth", _descriptor3, this);

          _initializerDefineProperty(this, "sampleNum", _descriptor4, this);

          _initializerDefineProperty(this, "lineContainer", _descriptor5, this);

          _initializerDefineProperty(this, "ctrlContainer", _descriptor6, this);

          _initializerDefineProperty(this, "graphicsContainer", _descriptor7, this);

          _initializerDefineProperty(this, "paperScale", _descriptor8, this);

          _initializerDefineProperty(this, "addCtrlPoint", _descriptor9, this);

          _initializerDefineProperty(this, "removeCtrlPoint", _descriptor10, this);

          _initializerDefineProperty(this, "standardBtn", _descriptor11, this);

          _initializerDefineProperty(this, "scaleUp", _descriptor12, this);

          _initializerDefineProperty(this, "scaleDown", _descriptor13, this);

          _initializerDefineProperty(this, "helpBtn", _descriptor14, this);

          _initializerDefineProperty(this, "helpContent", _descriptor15, this);

          this.canvasNode = null;
          this.pointPool = null;
          this.ctrlPoints = [];
          this.curCtrlPoint = null;
          this.curLineWidth = 1;
          this.stageMultiList = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800];
        }

        onLoad() {
          this.canvasNode = director.getScene().getComponentInChildren(Canvas).node;
          this.addEvents();
          this.curLineWidth = this.lineWidth;
          this.pointPool = new (_crd && NodeFactory === void 0 ? (_reportPossibleCrUseOfNodeFactory({
            error: Error()
          }), NodeFactory) : NodeFactory)(this.pointPre);
          this.pointPool.init(this.sampleNum);
          this.randomDraw(3);
        }

        onDestroy() {
          this.removeEvents();
        }

        addEvents() {
          this.canvasNode.on(NodeEventType.TOUCH_MOVE, this.onTouchMove, this);
          this.canvasNode.on(NodeEventType.MOUSE_WHEEL, this.onMouseWheel, this);
          this.addCtrlPoint.node.on(Button.EventType.CLICK, this.onAddCtrl, this);
          this.removeCtrlPoint.node.on(Button.EventType.CLICK, this.onRemoveCtrl, this);
          this.standardBtn.node.on(Button.EventType.CLICK, this.onStandard, this);
          this.helpBtn.node.on(Button.EventType.CLICK, this.onClickHelp, this);
        }

        removeEvents() {
          this.canvasNode.off(NodeEventType.TOUCH_MOVE, this.onTouchMove, this);
          this.canvasNode.off(NodeEventType.MOUSE_WHEEL, this.onMouseWheel, this);
          this.addCtrlPoint.node.off(Button.EventType.CLICK, this.onAddCtrl, this);
          this.removeCtrlPoint.node.off(Button.EventType.CLICK, this.onRemoveCtrl, this);
          this.standardBtn.node.off(Button.EventType.CLICK, this.onStandard, this);
          this.helpBtn.node.off(Button.EventType.CLICK, this.onClickHelp, this);
        }

        onTouchMove(e) {
          let delta = e.touch.getDelta();
          this.node.position = this.node.position.add3f(delta.x, delta.y, 0);
        }

        onMouseWheel(e) {
          // console.log('滚动：', e, e.getScrollX(), e.getScrollY());
          let long = e.getScrollY(); //向上滚 放大

          let v_old = this.node.scale.x;
          let v = long > 0 ? v_old * 1.1 : v_old * 0.9;
          let vStr = v.toFixed(3);
          v = parseFloat(vStr);
          this.paperScale.string = vStr;
          this.node.setScale(v, v);
          this.curLineWidth = this.lineWidth * (1 / this.node.scale.x);
          this.draw();
        }

        randomDraw(stage = 3) {
          for (let i = 0; i < stage + 1; i++) {
            let x = Math.round(this.random(-960, 960));
            let y = Math.round(this.random(-540, 540));
            this.ctrlPoints.push(v2(x, y));
          }

          this.draw();
        }

        random(min, max) {
          return Math.random() * (max - min) + min;
        }
        /**控制点更新后 重绘曲线 */


        updateCtrls() {
          this.ctrlPoints.length = this.ctrlContainer.children.length;

          for (let i = 0; i < this.ctrlPoints.length; i++) {
            let child = this.ctrlContainer.children[i];
            let point = this.ctrlPoints[i];
            if (!point) point = v2();
            point.x = child.position.x;
            point.y = child.position.y;
            this.ctrlPoints[i] = point;
          }

          this.draw();
        }

        draw() {
          this.drawCtrls();
          let points = this.ctrlPoints; //计算路径坐标

          let n = points.length - 1;

          for (let i = 0, len = this.sampleNum; i < len; i++) {
            let t = i / len,
                x = 0,
                y = 0;
            let item, ctrl;

            for (let j = 0; j < n + 1; j++) {
              item = this.comb(n, j) * Math.pow(1 - t, n - j) * Math.pow(t, j);
              ctrl = points[j];
              x += ctrl.x * item;
              y += ctrl.y * item;
            } // this.line1(x, y, i);


            this.drawLines(x, y, i);
          }
        } // /**方式1： 点累积成线 */
        // private line1(x: number, y: number, i: number) {
        //     this.lineContainer.children.forEach(child => { this.pointPool.putNode(child) });
        //     let node = this.lineContainer.children[i];
        //     if (!node) {
        //         node = this.pointPool.getNode();
        //         node.parent = this.lineContainer;
        //     }
        //     node.getComponent(Sprite).color = this.lineColor;
        //     let ui = node.getComponent(UITransform);
        //     ui.width = ui.height = this.lineWidth;
        //     node.setPosition(v3(x, y));
        // }

        /**绘制控制点*/


        drawCtrls() {
          let children = this.ctrlContainer.children;
          let points = this.ctrlPoints; //如果有多余的点 先回收

          while (children.length > points.length) {
            let last = children[children.length - 1];
            this.pointPool.putNode(last);
          }

          for (let i = 0; i < points.length; i++) {
            let child = children[i];

            if (!child) {
              child = this.pointPool.getNode();
              child.parent = this.ctrlContainer;
              child.setSiblingIndex(i);
              child.getComponent(Sprite).color = Color.YELLOW;
              child.getComponent(_crd && Point === void 0 ? (_reportPossibleCrUseOfPoint({
                error: Error()
              }), Point) : Point).init(this);
              let ui = child.getComponent(UITransform);
              ui.width = ui.height = this.lineWidth * 5;
            }

            let x = points[i].x,
                y = points[i].y;
            let point = child.getComponent(_crd && Point === void 0 ? (_reportPossibleCrUseOfPoint({
              error: Error()
            }), Point) : Point);
            point.reset(i, x, y);
            point.scaleSelf(1 / this.node.scale.x);
          }
        }
        /**方式2： canvas2d绘制 */


        drawLines(x, y, i) {
          let g = this.graphicsContainer.getComponent(Graphics);
          g.lineWidth = this.curLineWidth;

          if (i === 0) {
            g.clear();
            g.moveTo(x, y);
          } else g.lineTo(x, y);

          if (i === this.sampleNum - 1) g.stroke();
        } // private ctrls2() {
        //     let g = this.graphicsContainer.getComponent(Graphics);
        //     let ctrls = this.ctrlPoints;
        //     for (let k = 0; k < ctrls.length; k++) {
        //         g.circle(ctrls[k].x, ctrls[k].y, this.lineWidth * 1.5);
        //         g.fillColor = Color.YELLOW;
        //         g.fill();
        //     }
        // }

        /**计算阶乘 */


        stageMulti(num) {
          let res = this.stageMultiList[num];

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
        /**增加控制点 */


        onAddCtrl() {
          if (!this.curCtrlPoint) return;
          let idx = this.curCtrlPoint.index;
          let temp = this.ctrlPoints.splice(idx + 1);
          let x = Math.round(this.random(-960, 960)),
              y = Math.round(this.random(-540, 540));
          this.ctrlPoints.push(v2(x, y));
          this.ctrlPoints.push(...temp);
          this.draw();
        }
        /**减少控制点 */


        onRemoveCtrl() {
          if (!this.curCtrlPoint) return;
          if (this.ctrlPoints.length < 2) return;
          let idx = this.curCtrlPoint.index;
          this.ctrlPoints.splice(idx, 1);
          this.draw();
        }
        /**标准化曲线 起点设置在（0, 0） */


        onStandard() {
          this.node.setPosition(0, 0);
          let first = this.ctrlPoints[0].clone();
          if (!first) return;

          for (let item of this.ctrlPoints) {
            item.subtract(first);
          }

          this.draw();
        }

        onClickHelp() {
          this.helpContent.active = !this.helpContent.active;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pointPre", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lineColor", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lineWidth", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 10;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sampleNum", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1000;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lineContainer", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "ctrlContainer", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "graphicsContainer", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "paperScale", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "addCtrlPoint", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "removeCtrlPoint", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "standardBtn", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "scaleUp", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "scaleDown", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "helpBtn", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "helpContent", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5ec72b890e814ad3997647b8a4df38c680a0bd7b.js.map