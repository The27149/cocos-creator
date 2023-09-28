

const { ccclass, property } = cc._decorator;

@ccclass
export default class Blur extends cc.Component {

    @property(cc.Material)
    blurMaterial: cc.Material = null;

    @property()
    groupName: string = `blur`;

    protected onLoad(): void {
        let camera = this.node.getComponent(cc.Camera);
        let texture = new cc.RenderTexture();
        let width = cc.view.getDesignResolutionSize().width;
        let height = cc.view.getDesignResolutionSize().height;
        texture.initWithSize(width, height, cc.RenderTexture.DepthStencilFormat.RB_FMT_S8);
        camera.targetTexture = texture;

        let node = new cc.Node(this.groupName);
        let sprite = node.addComponent(cc.Sprite);
        let spf = new cc.SpriteFrame();
        spf.setTexture(texture);
        spf.setFlipY(true);
        sprite.spriteFrame = spf;
        sprite.setMaterial(0, this.blurMaterial);
        node.group = this.groupName;
        node.zIndex = cc.macro.MAX_ZINDEX;
        node.y = -100;
        cc.Canvas.instance.node.addChild(node);
    }


}
