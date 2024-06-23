import { Component, MeshRenderer, Node, _decorator, v4 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Coordinate')
export class Coordinate extends Component {
    @property(Node)
    headX: Node = null;

    @property(Node)
    lineX: Node = null;

    @property(Node)
    headY: Node = null;

    @property(Node)
    lineY: Node = null;

    @property(Node)
    headZ: Node = null;

    @property(Node)
    lineZ: Node = null;

    protected onLoad(): void {
        this.headX.getComponent(MeshRenderer).material.setProperty(`mainColor`, v4(1, 0, 0, 1));
        this.lineX.getComponent(MeshRenderer).material.setProperty(`mainColor`, v4(1, 0, 0, 1));
        this.headY.getComponent(MeshRenderer).material.setProperty(`mainColor`, v4(0, 1, 0, 1));
        this.lineY.getComponent(MeshRenderer).material.setProperty(`mainColor`, v4(0, 1, 0, 1));
        this.headZ.getComponent(MeshRenderer).material.setProperty(`mainColor`, v4(0, 0, 1, 1));
        this.lineZ.getComponent(MeshRenderer).material.setProperty(`mainColor`, v4(0, 0, 1, 1));
    }
}


