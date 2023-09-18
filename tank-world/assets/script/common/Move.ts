class Pool {
    private pool: any[] = [];

    public get size() {
        return this.pool.length;
    }

    public get(): any {
        return this.pool.shift();
    }

    public put(item: any) {
        this.pool.push(item);
    }
}


/**
 * 自定义位移动画
 */
export default class Move {
    private static movePool: Pool = new Pool();



    /**
     * 获取一个运动实例
     */
    public static getInstance(): Move {
        let move: Move = null;
        move = this.movePool.size > 0 ? this.movePool.get() : new Move();
        move.init();
        return move;
    }

    /**
     * 回收一个运动实例
     */
    private static putInstance(item: Move) {
        item.onNotUse();
        this.movePool.put(item);
    }


    private target: cc.Node = null;
    //private container: cc.Node = null;
    private startNode: cc.Node = null;
    private endNode: cc.Node = null;
    //运动时间 ms
    private duration: number = 1000;

    //最新调用的动画
    private animation: number = 0;
    private startTime: number = 0;
    private endTime: number = 0;

    private startPos: cc.Vec2 = null;
    private endPos: cc.Vec2 = null;


    private p0: cc.Vec2 = cc.v2(0, 0);      //起点
    private p1: cc.Vec2 = cc.v2(0, 0);      //相对终点
    private c1: cc.Vec2 = undefined;             //控制点1参数 
    private c2: cc.Vec2 = undefined;             //控制点2参数 
    private pc1: cc.Vec2 = cc.v2(0, 0);          //控制点1 实际坐标
    private pc2: cc.Vec2 = cc.v2(0, 0);          //控制点2 实际坐标
    private isAbsoluteCtrl: boolean = false;     //控制点是否使用绝对坐标

    private isFirstFrame: boolean = true;

    private setPos: Function = null;
    public onComplete: Function = null;

    private isMoveComplete: boolean = false;
    private timeout: number = 0;            //检验动作是否完成定时器

    private init() {
        // game.EventManager.getInstance().addEventListener(game.Const.mess_windowResize, this.onResize, this);
    }

    private onNotUse() {
        // game.EventManager.getInstance().removeEventListener(game.Const.mess_windowResize, this.onResize, this);
    }

    private onResize() {
        this.updateAllPosition();
    }

    /**
     * 设置运动参数
     * @param target        运动主体
     * @param startNode     起点
     * @param endNode       终点
     * @param duration      运动时间 ms 
     * @param isAbsoluteCtrl 控制点类型：绝对坐标/相对距离的比例 （默认选用比例来表示控制点）
     * @param c1            贝塞尔曲线控制点1   分量小于1时表示 起点到终点的比例
     * @param c2            贝塞尔曲线控制点2   分量小于1时表示 起点到终点的比例
     * @returns 
     */
    public setParams(target: cc.Node, startNode: cc.Node, endNode: cc.Node, duration: number, isAbsoluteCtrl?: boolean, c1?: cc.Vec2, c2?: cc.Vec2): Move {
        this.target = target;
        this.startNode = startNode;
        this.endNode = endNode;
        this.duration = duration;
        this.isAbsoluteCtrl = isAbsoluteCtrl;
        this.c1 = c1;
        this.c2 = c2;
        return this;
    }

    public run(call?: Function): Move {
        //切后台情况下 用定时器同步目标位置 加50ms为了保证正常情况下优先走正常流程
        this.timeout = setTimeout(() => {
            if (!this.isMoveComplete) {
                this.setPos(1);
                this.stop();
            }
        }, this.duration + 50);
        this.isMoveComplete = false;
        //未被计算位置时第一帧隐藏
        this.target.active = false;
        this.isFirstFrame = true;
        this.startTime = Date.now();
        this.endTime = this.startTime + this.duration;
        this.updateAllPosition();
        this.setPos = this.c1 ? this.c2 ? this.setPosByBezier3.bind(this) : this.setPosByBezier2.bind(this) : this.setPosByLine.bind(this);
        this.animation = requestAnimationFrame(this.loop.bind(this));
        if (call) this.onComplete = call;
        return this;
    }

    /**
     * 停止这个动作
     * @param DoComplete 
     */
    public stop(DoComplete: boolean = true): void {
        this.isMoveComplete = true;
        this.target.active = true;
        cancelAnimationFrame(this.animation);
        Move.putInstance(this);
        if (DoComplete && this.onComplete) {
            this.onComplete();
            this.onComplete = null;
        }
    }

    /**
     * 更新起始点位置
     */
    public updateAllPosition(): void {
        if (!(this.startNode && this.endNode && this.target.parent)) return;
        this.startPos = this.startNode.convertToWorldSpaceAR(cc.v2(0, 0));
        this.endPos = this.endNode.convertToWorldSpaceAR(cc.v2(0, 0));
        this.startPos = this.target.parent.convertToNodeSpaceAR(this.startPos);
        this.endPos = this.target.parent.convertToNodeSpaceAR(this.endPos);
        this.p1 = this.endPos.sub(this.startPos);
        if (this.c1) {
            let rad = this.p1.angle(cc.v2(1, 0));       //0-pi
            if (this.p1.y < 0) rad = -rad;
            let len = this.p1.len();
            this.unifyPos(this.pc1, this.c1, len);
            this.pc1.rotateSelf(rad);
            if (this.c2) {
                this.unifyPos(this.pc2, this.c2, len);
                this.pc2.rotateSelf(rad);
            }
        }
    }



    private loop(time: number): void {
        if (this.isMoveComplete) return;
        let now = Date.now();
        if (now > this.endTime) {
            this.setPos(1);
            this.stop();
            clearTimeout(this.timeout);
            return;
        }
        if (this.isFirstFrame) {
            this.isFirstFrame = false;
            this.target.active = true;
        }
        let t = (now - this.startTime) / this.duration;
        this.setPos(t);
        this.animation = requestAnimationFrame(this.loop.bind(this));
    }


    //一次曲线（直线）计算位置
    private setPosByLine(t: number): void {
        let tempX = t * this.p1.x,
            tempY = t * this.p1.y;
        this.target.x = this.startPos.x + tempX;
        this.target.y = this.startPos.y + tempY;
    }

    //二次曲线计算位置
    private setPosByBezier2(t: number): void {
        let b = 2 * t * (1 - t),
            c = t ** 2;
        let tempX = b * this.pc1.x + c * this.p1.x,
            tempY = b * this.pc1.y + c * this.p1.y;
        this.target.x = this.startPos.x + tempX;
        this.target.y = this.startPos.y + tempY;
    }

    //三次曲线计算位置
    private setPosByBezier3(t: number): void {
        let b = 3 * t * (1 - t) ** 2,
            c = 3 * (1 - t) * t ** 2,
            d = t ** 3;
        let tempX = b * this.pc1.x + c * this.pc2.x + d * this.p1.x,
            tempY = b * this.pc1.y + c * this.pc2.y + d * this.p1.y;
        this.target.x = this.startPos.x + tempX;
        this.target.y = this.startPos.y + tempY;
    }

    /**
     * 统一坐标 
     * @param target 要改造的向量
     * @param v 比例参数
     * @param len 比例参考长度
     */
    private unifyPos(target: cc.Vec2, v: cc.Vec2, len: number) {
        let ratio = this.isAbsoluteCtrl ? 1 : len;
        target.x = v.x * ratio;
        target.y = v.y * ratio;
    }

}
