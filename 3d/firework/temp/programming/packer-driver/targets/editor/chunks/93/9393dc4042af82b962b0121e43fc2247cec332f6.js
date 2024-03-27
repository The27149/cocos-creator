System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Input, input, KeyCode, NodeSpace, Node, v3, tween, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, ERoamMode, EAxis, Roam;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Input = _cc.Input;
      input = _cc.input;
      KeyCode = _cc.KeyCode;
      NodeSpace = _cc.NodeSpace;
      Node = _cc.Node;
      v3 = _cc.v3;
      tween = _cc.tween;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b6060YLkVtNkrLuOVAi10mn", "Roam", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventKeyboard', 'EventMouse', 'EventTouch', 'Input', 'input', 'KeyCode', 'NodeSpace', 'Node', 'quat', 'Quat', 'v3', 'Vec2', 'Vec3', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);
      /**漫游模式 */

      _export("ERoamMode", ERoamMode = /*#__PURE__*/function (ERoamMode) {
        ERoamMode[ERoamMode["free"] = 0] = "free";
        ERoamMode[ERoamMode["follow"] = 1] = "follow";
        ERoamMode[ERoamMode["round"] = 2] = "round";
        return ERoamMode;
      }({}));
      /**三轴类型 */


      _export("EAxis", EAxis = /*#__PURE__*/function (EAxis) {
        EAxis[EAxis["X"] = 0] = "X";
        EAxis[EAxis["Y"] = 1] = "Y";
        EAxis[EAxis["Z"] = 2] = "Z";
        return EAxis;
      }({}));
      /**
       * 上下左右转头：鼠标移动
       * 上下左右移动：w s a d
       * 前后移动：鼠标滚轮
       */


      _export("Roam", Roam = (_dec = ccclass('Roam'), _dec2 = property(Node), _dec(_class = (_class2 = class Roam extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "followTarget", _descriptor, this);

          this.angleScale = 0.05;
          this.moveScale = 0.05;

          /**当前本地欧拉角 */
          this.angle_temp = v3();

          /**当前世界坐标 */
          this.worldPos_temp = v3();

          /**本地微量移动 */
          this.deltaMove_temp = v3();
          //位置跟随
          this.followPosTarget = null;
          this.isFollowPos = false;
          this.relativeFollowPos = v3();
          //角度跟随
          this.followAngleTarget = null;
          this.isFollowAngle = false;
          this.followAngle_temp = v3();
          //环绕目标
          this.isRound = false;
        }

        onLoad() {
          this.addEvents();
          this.reset(); // this.test();
        }

        test() {
          window[`node`] = this.node;
          console.log(`this.node.forward:`, this.node.forward);
          tween(this.followTarget).repeatForever(tween().to(5, {
            position: v3(20, 0, 0)
          }).to(5, {
            position: v3(-20, 0, 0)
          })).start(); // this.followAngle(this.followTarget);
          // this.followPos(this.followTarget);
        }

        reset() {
          this.followPosTarget = null;
          this.isFollowPos = false;
          this.relativeFollowPos.set(0, 0, 0);
          this.followAngleTarget = null;
          this.isFollowAngle = false;
        }

        update(dt) {
          if (this.isFollowPos && this.followPosTarget) this.updateFollowPos();
          if (this.isFollowAngle && this.followAngleTarget) this.updateFollowAngle();
        }

        addEvents() {
          // input.on(Input.EventType.TOUCH_START, this.touchStart, this);
          input.on(Input.EventType.TOUCH_MOVE, this.touchMove, this);
          input.on(Input.EventType.TOUCH_END, this.touchEnd, this);
          input.on(Input.EventType.MOUSE_WHEEL, this.mouseWheel, this);
          input.on(Input.EventType.KEY_PRESSING, this.keyPressing, this);
          input.on(Input.EventType.KEY_DOWN, this.keyDown, this);
          input.on(Input.EventType.KEY_UP, this.keyUp, this);
        }

        touchMove(e) {
          const dx = e.getDeltaX() * this.angleScale,
                dy = e.getDeltaY() * this.angleScale;
          this.rotate(-dy, dx);
        }

        touchEnd(e) {
          if (this.followAngleTarget) this.resumeFollowAngle();
        }

        keyPressing(e) {
          this.useKeyBoard(e);
        }

        keyDown(e) {
          this.useKeyBoard(e);
        }

        keyUp(e) {
          this.unUseKeyBoard(e);
          if (this.followPosTarget) this.resumeFollowPos();
        }
        /**触发键盘事件 */


        useKeyBoard(e) {
          switch (e.keyCode) {
            case KeyCode.KEY_W:
              this.deltaMove_temp.z = -this.moveScale * 5;
              break;

            case KeyCode.KEY_A:
              this.deltaMove_temp.x = -this.moveScale;
              break;

            case KeyCode.KEY_S:
              this.deltaMove_temp.z = this.moveScale * 5;
              break;

            case KeyCode.KEY_D:
              this.deltaMove_temp.x = this.moveScale;
              break;

            case KeyCode.KEY_Q:
              //上
              this.deltaMove_temp.y = this.moveScale;
              break;

            case KeyCode.KEY_Z:
              //下
              this.deltaMove_temp.y = -this.moveScale;
              break;
          }

          this.move(this.deltaMove_temp);
        }
        /**结束键盘事件 */


        unUseKeyBoard(e) {
          this.deltaMove_temp.set(0, 0, 0);
        }
        /**快速前后移动 */


        mouseWheel(e) {
          let delta = e.getScrollY();

          if (delta > 0) {
            this.deltaMove_temp.z = -this.moveScale * 30;
          } else {
            this.deltaMove_temp.z = this.moveScale * 30;
          }

          this.move(this.deltaMove_temp);
        }
        /**四方向欧拉转向 */


        rotate(dx, dy) {
          if (this.isFollowAngle) this.pauseFollowAngle();
          const old = this.node.eulerAngles;
          this.angle_temp.x = old.x + dx;
          this.angle_temp.y = old.y + dy;
          this.node.setRotationFromEuler(this.angle_temp);
        }
        /**六方向移动 */


        move(dir) {
          if (this.isFollowPos) this.pauseFollowPos();
          this.node.translate(dir, NodeSpace.LOCAL);
        }
        /**位置跟随 pos: 相对目标位置*/


        followPos(target, pos = v3(0, 0, 20)) {
          this.followPosTarget = target;
          this.isFollowPos = true;
          this.relativeFollowPos.set(pos.x, pos.y, pos.z);
        }
        /**解除位置跟随 */


        unFollowPos() {
          this.followPosTarget = null;
          this.isFollowPos = false;
        }
        /**暂停 */


        pauseFollowPos() {
          if (this.isFollowPos && this.followPosTarget) this.isFollowPos = false;
        }
        /**恢复 */


        resumeFollowPos() {
          if (!this.isFollowPos && this.followPosTarget) this.isFollowPos = true;
        }

        updateFollowPos() {
          this.followPosTarget.getWorldPosition(this.worldPos_temp);
          this.worldPos_temp.add(this.relativeFollowPos);
          this.node.setWorldPosition(this.worldPos_temp);
        }
        /**角度跟随 */


        followAngle(target) {
          this.followAngleTarget = target;
          this.isFollowAngle = true;
        }
        /**解除角度跟随 */


        unFollowAngle(target) {
          this.followAngleTarget = null;
          this.isFollowAngle = false;
        }
        /**暂停 */


        pauseFollowAngle() {
          if (this.isFollowAngle && this.followAngleTarget) this.isFollowAngle = false;
        }
        /**恢复 */


        resumeFollowAngle() {
          if (!this.isFollowAngle && this.followAngleTarget) this.isFollowAngle = true;
        }

        updateFollowAngle() {
          this.followAngleTarget.getWorldPosition(this.followAngle_temp);
          this.followAngle_temp.subtract(this.node.worldPosition);
          this.node.lookAt(this.followAngle_temp);
        }
        /**自身环绕 */


        roundSelf(axis) {}
        /**环绕其他目标 */


        roundOther(target, axis, distance = 10) {
          this.followAngle(target);
          if (this.isFollowPos || this.followPosTarget) this.unFollowPos(); // this.node.pos
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "followTarget", [_dec2], {
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
//# sourceMappingURL=9393dc4042af82b962b0121e43fc2247cec332f6.js.map