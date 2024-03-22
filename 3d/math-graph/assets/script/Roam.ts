import { _decorator, Component, EventKeyboard, EventMouse, EventTouch, Input, input, KeyCode, NodeSpace, Quat, v3, Vec2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

/**
 * 上下左右转头：鼠标移动
 * 上下左右移动：w s a d
 * 前后移动：鼠标滚轮
 */
@ccclass('Roam')
export class Roam extends Component {

    private angleScale: number = 0.05;
    private moveScale: number = 0.05;
    /**动态设置当前欧拉角 */
    private angle: Vec3 = v3();
    private worldAngle: Vec3 = v3(0, 0, 1);

    protected onLoad(): void {
        this.addEvents();
    }

    private addEvents() {
        input.on(Input.EventType.TOUCH_MOVE, this.touchMove, this);
        input.on(Input.EventType.MOUSE_WHEEL, this.mouseWheel, this);
        input.on(Input.EventType.KEY_PRESSING, this.keyPressing, this);
        input.on(Input.EventType.KEY_DOWN, this.keyDown, this);
    }

    private touchMove(e: EventTouch) {
        // let dx = e.getLocation().x - e.getStartLocation().x,
        //     dy = e.getLocation().y - e.getStartLocation().y;
        let dx = e.getDeltaX(),
            dy = e.getDeltaY();
        let angleY = dx * this.angleScale,
            angleX = dy * this.angleScale;
        this.angle = this.node.eulerAngles.clone();
        this.angle.y += angleY;
        this.angle.x += -angleX;
        this.node.setRotationFromEuler(this.angle);
    }

    private keyPressing(e: EventKeyboard) {
        this.eventKeyboardHandler(e);
    }

    private keyDown(e: EventKeyboard) {
        this.eventKeyboardHandler(e);
    }

    private eventKeyboardHandler(e: EventKeyboard) {
        let dir = v3();
        switch (e.keyCode) {
            case KeyCode.KEY_W:
                dir.set(0, this.moveScale, 0);
                break;
            case KeyCode.KEY_A:
                dir.set(-this.moveScale, 0, 0);
                break;
            case KeyCode.KEY_S:
                dir.set(0, -this.moveScale, 0);
                break;
            case KeyCode.KEY_D:
                dir.set(this.moveScale, 0, 0);
                break;
            case KeyCode.KEY_Q:
                break;
            case KeyCode.KEY_E:
                break;

        }
        this.move(dir);
    }

    private mouseWheel(e: EventMouse) {
        let delta = e.getScrollY();
        let dir = v3();
        if (delta > 0) {
            dir.set(0, 0, -this.moveScale * 30);
        } else {
            dir.set(0, 0, this.moveScale * 30);
        }
        this.move(dir);
    }

    /**四方向转头 */
    private turn(dir: Vec2) {

    }

    /**六方向移动 */
    private move(dir: Vec3) {
        this.node.translate(dir, NodeSpace.LOCAL);
    }
}

