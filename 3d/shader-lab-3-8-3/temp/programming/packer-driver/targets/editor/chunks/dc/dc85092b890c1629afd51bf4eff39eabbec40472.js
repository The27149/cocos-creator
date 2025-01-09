System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, MeshRenderer, Sprite, _dec, _class, _crd, ccclass, property, Chip;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      MeshRenderer = _cc.MeshRenderer;
      Sprite = _cc.Sprite;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a4471tiLI5P4LXs0aSK05n5", "Chip", undefined);

      __checkObsolete__(['_decorator', 'Component', 'MeshRenderer', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Chip", Chip = (_dec = ccclass('Chip'), _dec(_class = class Chip extends Component {
        constructor(...args) {
          super(...args);
          this.sprite = null;
        }

        onLoad() {
          this.sprite = this.node.getComponent(Sprite);
          let mesh = this.node.getComponent(MeshRenderer);
          console.log(`获取mesh成功：`, mesh, this.sprite, this.node);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dc85092b890c1629afd51bf4eff39eabbec40472.js.map