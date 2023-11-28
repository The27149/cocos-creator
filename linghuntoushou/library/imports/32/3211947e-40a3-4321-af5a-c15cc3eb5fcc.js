"use strict";
cc._RF.push(module, '32119R+QKNDIa9awVzD61/M', 'Move');
// script/common/Move.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pool = /** @class */ (function () {
    function Pool() {
        this.pool = [];
    }
    Object.defineProperty(Pool.prototype, "size", {
        get: function () {
            return this.pool.length;
        },
        enumerable: false,
        configurable: true
    });
    Pool.prototype.get = function () {
        return this.pool.shift();
    };
    Pool.prototype.put = function (item) {
        this.pool.push(item);
    };
    return Pool;
}());
/**
 * 自定义位移动画
 */
var Move = /** @class */ (function () {
    function Move() {
        this.target = null;
        //private container: cc.Node = null;
        this.startNode = null;
        this.endNode = null;
        //运动时间 ms
        this.duration = 1000;
        //最新调用的动画
        this.animation = 0;
        this.startTime = 0;
        this.endTime = 0;
        this.startPos = null;
        this.endPos = null;
        this.p0 = cc.v2(0, 0); //起点
        this.p1 = cc.v2(0, 0); //相对终点
        this.c1 = undefined; //控制点1参数 
        this.c2 = undefined; //控制点2参数 
        this.pc1 = cc.v2(0, 0); //控制点1 实际坐标
        this.pc2 = cc.v2(0, 0); //控制点2 实际坐标
        this.isAbsoluteCtrl = false; //控制点是否使用绝对坐标
        this.isFirstFrame = true;
        this.setPos = null;
        this.onComplete = null;
        this.isMoveComplete = false;
        this.timeout = 0; //检验动作是否完成定时器
    }
    /**
     * 获取一个运动实例
     */
    Move.getInstance = function () {
        var move = null;
        move = this.movePool.size > 0 ? this.movePool.get() : new Move();
        move.init();
        return move;
    };
    /**
     * 回收一个运动实例
     */
    Move.putInstance = function (item) {
        item.onNotUse();
        this.movePool.put(item);
    };
    Move.prototype.init = function () {
        // game.EventManager.getInstance().addEventListener(game.Const.mess_windowResize, this.onResize, this);
    };
    Move.prototype.onNotUse = function () {
        // game.EventManager.getInstance().removeEventListener(game.Const.mess_windowResize, this.onResize, this);
    };
    Move.prototype.onResize = function () {
        this.updateAllPosition();
    };
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
    Move.prototype.setParams = function (target, startNode, endNode, duration, isAbsoluteCtrl, c1, c2) {
        this.target = target;
        this.startNode = startNode;
        this.endNode = endNode;
        this.duration = duration;
        this.isAbsoluteCtrl = isAbsoluteCtrl;
        this.c1 = c1;
        this.c2 = c2;
        return this;
    };
    Move.prototype.run = function (call) {
        var _this = this;
        //切后台情况下 用定时器同步目标位置 加50ms为了保证正常情况下优先走正常流程
        this.timeout = setTimeout(function () {
            if (!_this.isMoveComplete) {
                _this.setPos(1);
                _this.stop();
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
        if (call)
            this.onComplete = call;
        return this;
    };
    /**
     * 停止这个动作
     * @param DoComplete
     */
    Move.prototype.stop = function (DoComplete) {
        if (DoComplete === void 0) { DoComplete = true; }
        this.isMoveComplete = true;
        this.target.active = true;
        cancelAnimationFrame(this.animation);
        Move.putInstance(this);
        if (DoComplete && this.onComplete) {
            this.onComplete();
            this.onComplete = null;
        }
    };
    /**
     * 更新起始点位置
     */
    Move.prototype.updateAllPosition = function () {
        if (!(this.startNode && this.endNode && this.target.parent))
            return;
        this.startPos = this.startNode.convertToWorldSpaceAR(cc.v2(0, 0));
        this.endPos = this.endNode.convertToWorldSpaceAR(cc.v2(0, 0));
        this.startPos = this.target.parent.convertToNodeSpaceAR(this.startPos);
        this.endPos = this.target.parent.convertToNodeSpaceAR(this.endPos);
        this.p1 = this.endPos.sub(this.startPos);
        if (this.c1) {
            var rad = this.p1.angle(cc.v2(1, 0)); //0-pi
            if (this.p1.y < 0)
                rad = -rad;
            var len = this.p1.len();
            this.unifyPos(this.pc1, this.c1, len);
            this.pc1.rotateSelf(rad);
            if (this.c2) {
                this.unifyPos(this.pc2, this.c2, len);
                this.pc2.rotateSelf(rad);
            }
        }
    };
    Move.prototype.loop = function (time) {
        if (this.isMoveComplete)
            return;
        var now = Date.now();
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
        var t = (now - this.startTime) / this.duration;
        this.setPos(t);
        this.animation = requestAnimationFrame(this.loop.bind(this));
    };
    //一次曲线（直线）计算位置
    Move.prototype.setPosByLine = function (t) {
        var tempX = t * this.p1.x, tempY = t * this.p1.y;
        this.target.x = this.startPos.x + tempX;
        this.target.y = this.startPos.y + tempY;
    };
    //二次曲线计算位置
    Move.prototype.setPosByBezier2 = function (t) {
        var b = 2 * t * (1 - t), c = Math.pow(t, 2);
        var tempX = b * this.pc1.x + c * this.p1.x, tempY = b * this.pc1.y + c * this.p1.y;
        this.target.x = this.startPos.x + tempX;
        this.target.y = this.startPos.y + tempY;
    };
    //三次曲线计算位置
    Move.prototype.setPosByBezier3 = function (t) {
        var b = 3 * t * Math.pow((1 - t), 2), c = 3 * (1 - t) * Math.pow(t, 2), d = Math.pow(t, 3);
        var tempX = b * this.pc1.x + c * this.pc2.x + d * this.p1.x, tempY = b * this.pc1.y + c * this.pc2.y + d * this.p1.y;
        this.target.x = this.startPos.x + tempX;
        this.target.y = this.startPos.y + tempY;
    };
    /**
     * 统一坐标
     * @param target 要改造的向量
     * @param v 比例参数
     * @param len 比例参考长度
     */
    Move.prototype.unifyPos = function (target, v, len) {
        var ratio = this.isAbsoluteCtrl ? 1 : len;
        target.x = v.x * ratio;
        target.y = v.y * ratio;
    };
    Move.movePool = new Pool();
    return Move;
}());
exports.default = Move;

cc._RF.pop();