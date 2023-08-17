import { _decorator, Camera, Component, EventMouse, Input, input, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Eye')
export class Eye extends Component {

    private isMouseDown: boolean = false;

    protected onLoad(): void {
        let camera = this.node.getComponent(Camera);
        if (!camera) {
            console.warn('this eye node need a camera Component!');
            return;
        }
        this.addEvents();
    }

    start() {

    }

    private addEvents() {
        input.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
        input.on(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
        input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);
    }

    private onMouseDown(e: EventMouse) {
        if (e.getButton() !== EventMouse.BUTTON_RIGHT) return;
        this.isMouseDown = true;
    }

    private onMouseMove(e: EventMouse) {
        //仅监听右键按下时的移动
        if (e.getButton() !== EventMouse.BUTTON_RIGHT) return;
        if (!this.isMouseDown) return;
        let dx = e.getDeltaX(),
            dy = e.getDeltaY();
        let angle = this.node.eulerAngles;
        let scale = 1 / 50;
        angle.add3f(-dy * scale, dx * scale, 0);
        this.node.setRotationFromEuler(angle);
    }

    private onMouseUp(e: EventMouse) {
        if (e.getButton() !== EventMouse.BUTTON_RIGHT) return;
        this.isMouseDown = false;
    }

}

