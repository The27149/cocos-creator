import { _decorator, Component, MeshRenderer, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Chip')
export class Chip extends Component {

    private sprite: Sprite = null;

    protected onLoad(): void {
        this.sprite = this.node.getComponent(Sprite);
        let mesh = this.node.getComponent(MeshRenderer);
        console.log(`获取mesh成功：`, mesh, this.sprite, this.node);
    }
}


