import { _decorator, Component, gfx, Material, Node } from 'cc';
import { drawByGfx } from './draw2/DrawByGfx';
const { ccclass, property } = _decorator;

@ccclass('Main')
export class Main extends Component {
    @property(Material)
    materialSrc: Material = null;

    start() {
        // drawByGfx.init(this.materialSrc);
        // drawByGfx.prepare();
        // drawByGfx.render();
    }

}

