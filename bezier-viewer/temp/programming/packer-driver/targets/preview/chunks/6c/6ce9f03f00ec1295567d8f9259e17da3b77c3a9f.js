System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Prefab, Factory, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Paper;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfFactory(extras) {
    _reporterNs.report("Factory", "./Factory", _context.meta, extras);
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
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      Factory = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bcfd8l1w8RKP4obhVS16PMB", "Paper", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Paper", Paper = (_dec = ccclass('Paper'), _dec2 = property(Prefab), _dec(_class = (_class2 = class Paper extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "pointPre", _descriptor, this);

          this.pointPool = new (_crd && Factory === void 0 ? (_reportPossibleCrUseOfFactory({
            error: Error()
          }), Factory) : Factory)(this.pointPre);
          this.pointNum = 1000;
          this.stageMultiList = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800];
        }

        onLoad() {
          this.pointPool.init(200);
        }

        draw(points) {
          var len = points.length;

          for (var i = 0, _len = this.pointNum; i < _len; i++) {
            var node = this.node.children[i];

            if (!node) {
              node = this.pointPool.getNode();
              node.parent = this.node;
            }
          }
        }
        /**计算阶乘 */


        stageMulti(num) {
          var res = this.stageMultiList[num];
          if (!res) res = num * this.stageMulti(num - 1);
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
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6ce9f03f00ec1295567d8f9259e17da3b77c3a9f.js.map