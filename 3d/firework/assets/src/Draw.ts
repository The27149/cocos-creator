import { _decorator, Component, gfx, Mesh, MeshRenderer, Node, UIVertexFormat, utils, v3, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Draw')
export class Draw extends Component {


    private points: number[] = [];
    private indices: number[] = [];

    start() {
        this.createPoints();
        let mrender = this.node.getComponent(MeshRenderer);
        mrender.mesh = this.createMesh();

        // mrender.material.setProperty(`v0`,)
    }

    private createMesh(): Mesh {
        return utils.MeshUtils.createMesh({
            primitiveMode: gfx.PrimitiveMode.POINT_LIST,
            positions: this.points,
            uvs: [],
            indices: this.indices,
            minPos: v3(),
            maxPos: v3(),
            attributes: UIVertexFormat.vfmt,
        })
    }

    //正方体定点
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
    private createPoints() {
        const pi = Math.PI,
            halfPi = pi / 2;
        for (let i = 0; i < 10000; i++) {
            let r = this.random(0, 1);
            let idx = i * 3;
            let alfa = this.random(0, pi * 2);
            let cita = this.random(-halfPi, halfPi);
            let temp = r * (Math.cos(cita) ** 0.5);//搞个根号，减弱余弦不均匀分布的影响
            this.points[idx] = temp * Math.cos(alfa);
            this.points[idx + 1] = r * Math.sin(cita);
            this.points[idx + 2] = temp * Math.sin(alfa);
            this.indices[i] = i;
        }
    }

    private random(min, max): number {
        return Math.random() * (max - min) + min;
    }
}
