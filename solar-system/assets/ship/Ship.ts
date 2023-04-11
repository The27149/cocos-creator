import { Event } from 'cc';
import { _decorator, Camera, Component, EventMouse, Input, input, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

/**飞船控制运动动作，可以搭载不同的摄像机当眼睛 */
@ccclass('Ship')
export class Ship extends Component {

    private eye: Camera = null;

    private isMouseDown: boolean = false;

    public init(camera: Camera) {
        this.eye = camera;
        this.eye.node.parent = this.node;
        this.eye.node.setRTS();
        this.initCtrls();
    }

    /**初始化运动控制 */
    private initCtrls() {
        input.on(Input.EventType.KEY_PRESSING, this.onKeyPress, this);
        input.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
        input.on(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
        input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);
    }

    protected onDestroy(): void {

    }

    private onKeyPress(e) {
        console.log(e);

    }

    private onMouseDown(e: EventMouse) {
        this.isMouseDown = true;
    }

    private onMouseMove(e: EventMouse) {
        if (!this.isMouseDown) return;
        console.log('mouse_move:', e);
        if (e.getButton() === EventMouse.BUTTON_RIGHT) {
            console.log(this.eye.node);
        }

    }

    private onMouseUp(e: EventMouse) {
        this.isMouseDown = false;
    }

    /**第三视角固定机位跟随目标 */
    public followTarget(target: Node) {

    }

    /**着陆 */
    public landTarget(target: Node, pos?: Vec3) {

    }
}

