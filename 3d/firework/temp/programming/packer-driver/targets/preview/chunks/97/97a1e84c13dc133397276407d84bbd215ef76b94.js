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
        constructor() {
          super(...arguments);
          this.points = [];
          this.indices = [];
        }

        start() {
          this.createPoints();
          var mrender = this.node.getComponent(MeshRenderer);
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
        }

        createPoints() {
          for (var i = 0; i < 10000; i++) {
            var idx = i * 3;
            this.points[idx] = this.random(-1, 1);
            this.points[idx + 1] = this.random(-1, 1);
            this.points[idx + 2] = this.random(-1, 1);
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
//# sourceMappingURL=97a1e84c13dc133397276407d84bbd215ef76b94.js.map