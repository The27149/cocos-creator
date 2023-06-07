import { Event, math, v3 } from 'cc';
import { _decorator, Camera, Component, EventMouse, Input, input, Node, Vec3 } from 'cc';
import { Motion } from '../common/Motion';
import { Eye } from './Eye';
const { ccclass, property } = _decorator;

/**飞船控制运动动作，可以搭载不同的摄像机当眼睛 */
@ccclass('Ship')
export class Ship extends Motion {

    /**默认定位方向轴 */
    @property(Vec3)
    defaultBodyDir: Vec3 = v3(0, 1, 0);

    /**实际方向向量 */
    private bodyDir: Vec3 = v3();

    private eye: Eye = null;


    public init(eye: Eye) {
        this.eye = eye;
        this.eye.node.parent = this.node;
        this.eye.node.setRTS();
        this.initCtrls();
        this.updateBodyDir();
    }

    /**初始化运动控制 */
    private initCtrls() {
        input.on(Input.EventType.KEY_PRESSING, this.onKeyPress, this);
    }

    protected onDestroy(): void {

    }

    private onKeyPress(e) {
        console.log(e);

    }

    private onMouseDown(e: EventMouse) {
    }

    private onMouseMove(e: EventMouse) {

    }

    private onMouseUp(e: EventMouse) {
    }

    /**更新自身的方位轴 */
    private updateBodyDir() {
        math.quat
        this.node.worldRotation.getEulerAngles(this.bodyDir);
        console.log('当前方位：', this.bodyDir);
    }

    /**第三视角固定机位跟随目标 */
    public followTarget(target: Node) {

    }

    /**着陆 */
    public landTarget(target: Node, pos?: Vec3) {

    }
}

