import { _decorator, Component, EventKeyboard, EventMouse, EventTouch, Input, input, KeyCode, NodeSpace, Node, quat, Quat, v3, Vec2, Vec3, tween } from 'cc';
const { ccclass, property } = _decorator;

/**漫游模式 */
export enum ERoamMode {
    free,
    follow,
    round
}

/**三轴类型 */
export enum EAxis {
    X,
    Y,
    Z
}

/**
 * 上下左右转头：鼠标移动
 * 上下左右移动：w s a d
 * 前后移动：鼠标滚轮
 */
@ccclass('Roam')
export class Roam extends Component {
    @property(Node)
    followTarget: Node = null;

    private angleScale: number = 0.05;
    private moveScale: number = 0.05;
    /**当前本地欧拉角 */
    private angle_temp: Vec3 = v3();
    /**当前世界坐标 */
    private worldPos_temp: Vec3 = v3();
    /**本地微量移动 */
    private deltaMove_temp: Vec3 = v3();

    //位置跟随
    private followPosTarget: Node = null;
    private isFollowPos: boolean = false;
    private relativeFollowPos: Vec3 = v3();

    //角度跟随
    private followAngleTarget: Node = null;
    private isFollowAngle: boolean = false;
    private followAngle_temp: Vec3 = v3();

    //环绕目标
    private isRound: boolean = false;


    protected onLoad(): void {
        this.addEvents();
        this.reset();

        // this.test();
    }

    private test() {
        window[`node`] = this.node;
        console.log(`this.node.forward:`, this.node.forward);
        tween(this.followTarget)
            .repeatForever(tween()
                .to(5, { position: v3(20, 0, 0) })
                .to(5, { position: v3(-20, 0, 0) })
            )
            .start();

        // this.followAngle(this.followTarget);
        // this.followPos(this.followTarget);
    }

    private reset() {
        this.followPosTarget = null;
        this.isFollowPos = false;
        this.relativeFollowPos.set(0, 0, 0);
        this.followAngleTarget = null;
        this.isFollowAngle = false;
    }

    protected update(dt: number): void {
        if (this.isFollowPos && this.followPosTarget) this.updateFollowPos();
        if (this.isFollowAngle && this.followAngleTarget) this.updateFollowAngle();
    }

    private addEvents() {
        // input.on(Input.EventType.TOUCH_START, this.touchStart, this);
        input.on(Input.EventType.TOUCH_MOVE, this.touchMove, this);
        input.on(Input.EventType.TOUCH_END, this.touchEnd, this);
        input.on(Input.EventType.MOUSE_WHEEL, this.mouseWheel, this);
        input.on(Input.EventType.KEY_PRESSING, this.keyPressing, this);
        input.on(Input.EventType.KEY_DOWN, this.keyDown, this);
        input.on(Input.EventType.KEY_UP, this.keyUp, this);
    }

    private touchMove(e: EventTouch) {
        const dx = e.getDeltaX() * this.angleScale,
            dy = e.getDeltaY() * this.angleScale;
        this.rotate(-dy, dx);
    }

    private touchEnd(e: EventTouch) {
        if (this.followAngleTarget) this.resumeFollowAngle();
    }

    private keyPressing(e: EventKeyboard) {
        this.useKeyBoard(e);
    }

    private keyDown(e: EventKeyboard) {
        this.useKeyBoard(e);
    }

    private keyUp(e: EventKeyboard) {
        this.unUseKeyBoard(e);
        if (this.followPosTarget) this.resumeFollowPos();
    }

    /**触发键盘事件 */
    private useKeyBoard(e: EventKeyboard) {
        switch (e.keyCode) {
            case KeyCode.KEY_W:
                this.deltaMove_temp.z = -this.moveScale * 5;
                break;
            case KeyCode.KEY_A:
                this.deltaMove_temp.x = -this.moveScale;
                break;
            case KeyCode.KEY_S:
                this.deltaMove_temp.z = this.moveScale * 5;
                break;
            case KeyCode.KEY_D:
                this.deltaMove_temp.x = this.moveScale;
                break;
            case KeyCode.KEY_Q://上
                this.deltaMove_temp.y = this.moveScale;
                break;
            case KeyCode.KEY_Z://下
                this.deltaMove_temp.y = -this.moveScale;
                break;
        }
        this.move(this.deltaMove_temp);
    }

    /**结束键盘事件 */
    private unUseKeyBoard(e: EventKeyboard) {
        this.deltaMove_temp.set(0, 0, 0);
    }

    /**快速前后移动 */
    private mouseWheel(e: EventMouse) {
        let delta = e.getScrollY();
        if (delta > 0) {
            this.deltaMove_temp.z = -this.moveScale * 30;
        } else {
            this.deltaMove_temp.z = this.moveScale * 30;
        }
        this.move(this.deltaMove_temp);
    }

    /**四方向欧拉转向 */
    private rotate(dx: number, dy: number) {
        if (this.isFollowAngle) this.pauseFollowAngle();
        const old = this.node.eulerAngles;
        this.angle_temp.x = old.x + dx;
        this.angle_temp.y = old.y + dy;
        this.node.setRotationFromEuler(this.angle_temp);
    }

    /**六方向移动 */
    private move(dir: Vec3) {
        if (this.isFollowPos) this.pauseFollowPos();
        this.node.translate(dir, NodeSpace.LOCAL);
    }





    /**位置跟随 pos: 相对目标位置*/
    private followPos(target: Node, pos: Vec3 = v3(0, 0, 20)) {
        this.followPosTarget = target;
        this.isFollowPos = true;
        this.relativeFollowPos.set(pos.x, pos.y, pos.z);
    }
    /**解除位置跟随 */
    private unFollowPos() {
        this.followPosTarget = null;
        this.isFollowPos = false;
    }
    /**暂停 */
    private pauseFollowPos() {
        if (this.isFollowPos && this.followPosTarget)
            this.isFollowPos = false;
    }
    /**恢复 */
    private resumeFollowPos() {
        if (!this.isFollowPos && this.followPosTarget)
            this.isFollowPos = true;
    }
    private updateFollowPos() {
        this.followPosTarget.getWorldPosition(this.worldPos_temp);
        this.worldPos_temp.add(this.relativeFollowPos);
        this.node.setWorldPosition(this.worldPos_temp);
    }



    /**角度跟随 */
    private followAngle(target: Node) {
        this.followAngleTarget = target;
        this.isFollowAngle = true;
    }
    /**解除角度跟随 */
    private unFollowAngle(target: Node) {
        this.followAngleTarget = null;
        this.isFollowAngle = false;
    }
    /**暂停 */
    private pauseFollowAngle() {
        if (this.isFollowAngle && this.followAngleTarget)
            this.isFollowAngle = false;
    }
    /**恢复 */
    private resumeFollowAngle() {
        if (!this.isFollowAngle && this.followAngleTarget)
            this.isFollowAngle = true;
    }
    private updateFollowAngle() {
        this.followAngleTarget.getWorldPosition(this.followAngle_temp);
        this.followAngle_temp.subtract(this.node.worldPosition);
        this.node.lookAt(this.followAngle_temp);
    }



    /**自身环绕 */
    private roundSelf(axis: EAxis) {

    }

    /**环绕其他目标 */
    private roundOther(target: Node, axis: EAxis, distance: number = 10) {
        this.followAngle(target);
        if (this.isFollowPos || this.followPosTarget) this.unFollowPos();
        // this.node.pos

    }
}

