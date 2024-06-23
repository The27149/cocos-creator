import { _decorator, Component, gfx, Mesh, MeshRenderer, Node, UIVertexFormat, utils } from 'cc';
import { Calc } from '../Calc';
const { ccclass, property } = _decorator;

@ccclass('Draw')
export class Draw extends Component {

    @property(Node)
    targetNode: Node = null;

    start() {
        this.draw();
    }

    public draw() {
        this.targetNode.getComponent(MeshRenderer).mesh = this.createMesh();
    }

    private createMesh(): Mesh {
        return utils.MeshUtils.createMesh({
            primitiveMode: gfx.PrimitiveMode.POINT_LIST,
            positions: this.getPosition(),
            uvs: [],
            indices: this.getIndices(),
            minPos: Calc.ins.getPointMin(),
            maxPos: Calc.ins.getPointMax(),
            attributes: UIVertexFormat.vfmt,
        })
    }

    private getPosition(): number[] {
        return Calc.ins.getPoints();
        // return [
        //     -0.5, -0.5, 0,
        //     0.5, -0.5, 0,
        //     0.5, 0.5, 0,
        //     -0.5, 0.5, 0,
        //     -0.5, -0.5, 1,
        //     0.5, -0.5, 1,
        //     0.5, 0.5, 1,
        //     -0.5, 0.5, 1,
        // ];
    }

    /**几何模式为点模式时实际不需要索引，但是引擎要求要传入索引数组，长度为顶点数量 */
    private getIndices(): number[] {
        return Calc.ins.getIndices();
        // return [0, 1, 2, 3, 4, 5, 6, 7]
    }
}
