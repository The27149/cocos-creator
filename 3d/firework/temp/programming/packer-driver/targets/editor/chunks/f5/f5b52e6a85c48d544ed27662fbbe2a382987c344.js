System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, gfx, MeshRenderer, UIVertexFormat, utils, v3, _dec, _class, _crd, ccclass, property, Draw;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      gfx = _cc.gfx;
      MeshRenderer = _cc.MeshRenderer;
      UIVertexFormat = _cc.UIVertexFormat;
      utils = _cc.utils;
      v3 = _cc.v3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7a51eQM/spNErQHnpxJsGZx", "Draw", undefined);

      __checkObsolete__(['_decorator', 'Component', 'gfx', 'Mesh', 'MeshRenderer', 'Node', 'UIVertexFormat', 'utils', 'v3', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Draw", Draw = (_dec = ccclass('Draw'), _dec(_class = class Draw extends Component {
        constructor(...args) {
          super(...args);
          this.points = [];
          this.indices = [];
        }

        start() {
          this.createPoints();
          let mrender = this.node.getComponent(MeshRenderer);
          mrender.mesh = this.createMesh(); // mrender.material.setProperty(`v0`,)
        }

        createMesh() {
          return utils.MeshUtils.createMesh({
            primitiveMode: gfx.PrimitiveMode.POINT_LIST,
            positions: this.points,
            uvs: [],
            indices: this.indices,
            minPos: v3(),
            maxPos: v3(),
            attributes: UIVertexFormat.vfmt
          });
        } //正方体定点
        // private createPoints() {
        //     for (let i = 0; i < 10000; i++) {
        //         let idx = i * 3;
        //         this.points[idx] = this.random(-1, 1);
        //         this.points[idx + 1] = this.random(-1, 1);
        //         this.points[idx + 2] = this.random(-1, 1);
        //         this.indices[i] = i;
        //     }
        // }
        //球形定点


        createPoints() {
          const pi = Math.PI,
                halfPi = pi / 2;

          for (let i = 0; i < 10000; i++) {
            let r = this.random(0, 1);
            let idx = i * 3;
            let alfa = this.random(0, pi * 2);
            let cita = this.random(-halfPi, halfPi);
            let temp = r * Math.cos(cita) ** 0.5; //搞个根号，减弱余弦不均匀分布的影响

            this.points[idx] = temp * Math.cos(alfa);
            this.points[idx + 1] = r * Math.sin(cita);
            this.points[idx + 2] = temp * Math.sin(alfa);
            this.indices[i] = i;
          }
        }

        random(min, max) {
          return Math.random() * (max - min) + min;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f5b52e6a85c48d544ed27662fbbe2a382987c344.js.map