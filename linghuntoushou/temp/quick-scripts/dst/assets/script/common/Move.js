
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/Move.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb21tb25cXE1vdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO1FBQ1ksU0FBSSxHQUFVLEVBQUUsQ0FBQztJQWE3QixDQUFDO0lBWEcsc0JBQVcsc0JBQUk7YUFBZjtZQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFFTSxrQkFBRyxHQUFWO1FBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFTSxrQkFBRyxHQUFWLFVBQVcsSUFBUztRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0wsV0FBQztBQUFELENBZEEsQUFjQyxJQUFBO0FBR0Q7O0dBRUc7QUFDSDtJQUFBO1FBd0JZLFdBQU0sR0FBWSxJQUFJLENBQUM7UUFDL0Isb0NBQW9DO1FBQzVCLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsWUFBTyxHQUFZLElBQUksQ0FBQztRQUNoQyxTQUFTO1FBQ0QsYUFBUSxHQUFXLElBQUksQ0FBQztRQUVoQyxTQUFTO1FBQ0QsY0FBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLFlBQU8sR0FBVyxDQUFDLENBQUM7UUFFcEIsYUFBUSxHQUFZLElBQUksQ0FBQztRQUN6QixXQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLE9BQUUsR0FBWSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFNLElBQUk7UUFDcEMsT0FBRSxHQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQU0sTUFBTTtRQUN0QyxPQUFFLEdBQVksU0FBUyxDQUFDLENBQWEsU0FBUztRQUM5QyxPQUFFLEdBQVksU0FB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QUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDNUMsQ0FBQztJQUVELFVBQVU7SUFDRiw4QkFBZSxHQUF2QixVQUF3QixDQUFTO1FBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ25CLENBQUMsR0FBRyxTQUFBLENBQUMsRUFBSSxDQUFDLENBQUEsQ0FBQztRQUNmLElBQUksS0FBSyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ3RDLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDNUMsQ0FBQztJQUVELFVBQVU7SUFDRiw4QkFBZSxHQUF2QixVQUF3QixDQUFTO1FBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBQSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBSSxDQUFDLENBQUEsRUFDeEIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxTQUFBLENBQUMsRUFBSSxDQUFDLENBQUEsRUFDeEIsQ0FBQyxHQUFHLFNBQUEsQ0FBQyxFQUFJLENBQUMsQ0FBQSxDQUFDO1FBQ2YsSUFBSSxLQUFLLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ3ZELEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQzVDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNLLHVCQUFRLEdBQWhCLFVBQWlCLE1BQWUsRUFBRSxDQUFVLEVBQUUsR0FBVztRQUNyRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUMxQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQWhOYyxhQUFRLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQWtOL0MsV0FBQztDQW5ORCxBQW1OQyxJQUFBO2tCQW5Ob0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBvb2wge1xyXG4gICAgcHJpdmF0ZSBwb29sOiBhbnlbXSA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgc2l6ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb29sLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9vbC5zaGlmdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwdXQoaXRlbTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5wb29sLnB1c2goaXRlbSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKipcclxuICog6Ieq5a6a5LmJ5L2N56e75Yqo55S7XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIG1vdmVQb29sOiBQb29sID0gbmV3IFBvb2woKTtcclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5LiA5Liq6L+Q5Yqo5a6e5L6LXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogTW92ZSB7XHJcbiAgICAgICAgbGV0IG1vdmU6IE1vdmUgPSBudWxsO1xyXG4gICAgICAgIG1vdmUgPSB0aGlzLm1vdmVQb29sLnNpemUgPiAwID8gdGhpcy5tb3ZlUG9vbC5nZXQoKSA6IG5ldyBNb3ZlKCk7XHJcbiAgICAgICAgbW92ZS5pbml0KCk7XHJcbiAgICAgICAgcmV0dXJuIG1vdmU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlm57mlLbkuIDkuKrov5Dliqjlrp7kvotcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcHV0SW5zdGFuY2UoaXRlbTogTW92ZSkge1xyXG4gICAgICAgIGl0ZW0ub25Ob3RVc2UoKTtcclxuICAgICAgICB0aGlzLm1vdmVQb29sLnB1dChpdGVtKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSB0YXJnZXQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLy9wcml2YXRlIGNvbnRhaW5lcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHN0YXJ0Tm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGVuZE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLy/ov5Dliqjml7bpl7QgbXNcclxuICAgIHByaXZhdGUgZHVyYXRpb246IG51bWJlciA9IDEwMDA7XHJcblxyXG4gICAgLy/mnIDmlrDosIPnlKjnmoTliqjnlLtcclxuICAgIHByaXZhdGUgYW5pbWF0aW9uOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBzdGFydFRpbWU6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGVuZFRpbWU6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGFydFBvczogY2MuVmVjMiA9IG51bGw7XHJcbiAgICBwcml2YXRlIGVuZFBvczogY2MuVmVjMiA9IG51bGw7XHJcblxyXG5cclxuICAgIHByaXZhdGUgcDA6IGNjLlZlYzIgPSBjYy52MigwLCAwKTsgICAgICAvL+i1t+eCuVxyXG4gICAgcHJpdmF0ZSBwMTogY2MuVmVjMiA9IGNjLnYyKDAsIDApOyAgICAgIC8v55u45a+557uI54K5XHJcbiAgICBwcml2YXRlIGMxOiBjYy5WZWMyID0gdW5kZWZpbmVkOyAgICAgICAgICAgICAvL+aOp+WItueCuTHlj4LmlbAgXHJcbiAgICBwcml2YXRlIGMyOiBjYy5WZWMyID0gdW5kZWZpbmVkOyAgICAgICAgICAgICAvL+aOp+WItueCuTLlj4LmlbAgXHJcbiAgICBwcml2YXRlIHBjMTogY2MuVmVjMiA9IGNjLnYyKDAsIDApOyAgICAgICAgICAvL+aOp+WItueCuTEg5a6e6ZmF5Z2Q5qCHXHJcbiAgICBwcml2YXRlIHBjMjogY2MuVmVjMiA9IGNjLnYyKDAsIDApOyAgICAgICAgICAvL+aOp+WItueCuTIg5a6e6ZmF5Z2Q5qCHXHJcbiAgICBwcml2YXRlIGlzQWJzb2x1dGVDdHJsOiBib29sZWFuID0gZmFsc2U7ICAgICAvL+aOp+WItueCueaYr+WQpuS9v+eUqOe7neWvueWdkOagh1xyXG5cclxuICAgIHByaXZhdGUgaXNGaXJzdEZyYW1lOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBwcml2YXRlIHNldFBvczogRnVuY3Rpb24gPSBudWxsO1xyXG4gICAgcHVibGljIG9uQ29tcGxldGU6IEZ1bmN0aW9uID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGlzTW92ZUNvbXBsZXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHRpbWVvdXQ6IG51bWJlciA9IDA7ICAgICAgICAgICAgLy/mo4DpqozliqjkvZzmmK/lkKblrozmiJDlrprml7blmahcclxuXHJcbiAgICBwcml2YXRlIGluaXQoKSB7XHJcbiAgICAgICAgLy8gZ2FtZS5FdmVudE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5hZGRFdmVudExpc3RlbmVyKGdhbWUuQ29uc3QubWVzc193aW5kb3dSZXNpemUsIHRoaXMub25SZXNpemUsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Ob3RVc2UoKSB7XHJcbiAgICAgICAgLy8gZ2FtZS5FdmVudE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5yZW1vdmVFdmVudExpc3RlbmVyKGdhbWUuQ29uc3QubWVzc193aW5kb3dSZXNpemUsIHRoaXMub25SZXNpemUsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25SZXNpemUoKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVBbGxQb3NpdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u6L+Q5Yqo5Y+C5pWwXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0ICAgICAgICDov5DliqjkuLvkvZNcclxuICAgICAqIEBwYXJhbSBzdGFydE5vZGUgICAgIOi1t+eCuVxyXG4gICAgICogQHBhcmFtIGVuZE5vZGUgICAgICAg57uI54K5XHJcbiAgICAgKiBAcGFyYW0gZHVyYXRpb24gICAgICDov5Dliqjml7bpl7QgbXMgXHJcbiAgICAgKiBAcGFyYW0gaXNBYnNvbHV0ZUN0cmwg5o6n5Yi254K557G75Z6L77ya57ud5a+55Z2Q5qCHL+ebuOWvuei3neemu+eahOavlOS+iyDvvIjpu5jorqTpgInnlKjmr5TkvovmnaXooajnpLrmjqfliLbngrnvvIlcclxuICAgICAqIEBwYXJhbSBjMSAgICAgICAgICAgIOi0neWhnuWwlOabsue6v+aOp+WItueCuTEgICDliIbph4/lsI/kuo4x5pe26KGo56S6IOi1t+eCueWIsOe7iOeCueeahOavlOS+i1xyXG4gICAgICogQHBhcmFtIGMyICAgICAgICAgICAg6LSd5aGe5bCU5puy57q/5o6n5Yi254K5MiAgIOWIhumHj+Wwj+S6jjHml7booajnpLog6LW354K55Yiw57uI54K555qE5q+U5L6LXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldFBhcmFtcyh0YXJnZXQ6IGNjLk5vZGUsIHN0YXJ0Tm9kZTogY2MuTm9kZSwgZW5kTm9kZTogY2MuTm9kZSwgZHVyYXRpb246IG51bWJlciwgaXNBYnNvbHV0ZUN0cmw/OiBib29sZWFuLCBjMT86IGNjLlZlYzIsIGMyPzogY2MuVmVjMik6IE1vdmUge1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgICAgIHRoaXMuc3RhcnROb2RlID0gc3RhcnROb2RlO1xyXG4gICAgICAgIHRoaXMuZW5kTm9kZSA9IGVuZE5vZGU7XHJcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xyXG4gICAgICAgIHRoaXMuaXNBYnNvbHV0ZUN0cmwgPSBpc0Fic29sdXRlQ3RybDtcclxuICAgICAgICB0aGlzLmMxID0gYzE7XHJcbiAgICAgICAgdGhpcy5jMiA9IGMyO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBydW4oY2FsbD86IEZ1bmN0aW9uKTogTW92ZSB7XHJcbiAgICAgICAgLy/liIflkI7lj7Dmg4XlhrXkuIsg55So5a6a5pe25Zmo5ZCM5q2l55uu5qCH5L2N572uIOWKoDUwbXPkuLrkuobkv53or4HmraPluLjmg4XlhrXkuIvkvJjlhYjotbDmraPluLjmtYHnqItcclxuICAgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzTW92ZUNvbXBsZXRlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBvcygxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcy5kdXJhdGlvbiArIDUwKTtcclxuICAgICAgICB0aGlzLmlzTW92ZUNvbXBsZXRlID0gZmFsc2U7XHJcbiAgICAgICAgLy/mnKrooqvorqHnrpfkvY3nva7ml7bnrKzkuIDluKfpmpDol49cclxuICAgICAgICB0aGlzLnRhcmdldC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzRmlyc3RGcmFtZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuZW5kVGltZSA9IHRoaXMuc3RhcnRUaW1lICsgdGhpcy5kdXJhdGlvbjtcclxuICAgICAgICB0aGlzLnVwZGF0ZUFsbFBvc2l0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5zZXRQb3MgPSB0aGlzLmMxID8gdGhpcy5jMiA/IHRoaXMuc2V0UG9zQnlCZXppZXIzLmJpbmQodGhpcykgOiB0aGlzLnNldFBvc0J5QmV6aWVyMi5iaW5kKHRoaXMpIDogdGhpcy5zZXRQb3NCeUxpbmUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxvb3AuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgaWYgKGNhbGwpIHRoaXMub25Db21wbGV0ZSA9IGNhbGw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlgZzmraLov5nkuKrliqjkvZxcclxuICAgICAqIEBwYXJhbSBEb0NvbXBsZXRlIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RvcChEb0NvbXBsZXRlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXNNb3ZlQ29tcGxldGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb24pO1xyXG4gICAgICAgIE1vdmUucHV0SW5zdGFuY2UodGhpcyk7XHJcbiAgICAgICAgaWYgKERvQ29tcGxldGUgJiYgdGhpcy5vbkNvbXBsZXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25Db21wbGV0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLm9uQ29tcGxldGUgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsOi1t+Wni+eCueS9jee9rlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdXBkYXRlQWxsUG9zaXRpb24oKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCEodGhpcy5zdGFydE5vZGUgJiYgdGhpcy5lbmROb2RlICYmIHRoaXMudGFyZ2V0LnBhcmVudCkpIHJldHVybjtcclxuICAgICAgICB0aGlzLnN0YXJ0UG9zID0gdGhpcy5zdGFydE5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcclxuICAgICAgICB0aGlzLmVuZFBvcyA9IHRoaXMuZW5kTm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRQb3MgPSB0aGlzLnRhcmdldC5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIodGhpcy5zdGFydFBvcyk7XHJcbiAgICAgICAgdGhpcy5lbmRQb3MgPSB0aGlzLnRhcmdldC5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIodGhpcy5lbmRQb3MpO1xyXG4gICAgICAgIHRoaXMucDEgPSB0aGlzLmVuZFBvcy5zdWIodGhpcy5zdGFydFBvcyk7XHJcbiAgICAgICAgaWYgKHRoaXMuYzEpIHtcclxuICAgICAgICAgICAgbGV0IHJhZCA9IHRoaXMucDEuYW5nbGUoY2MudjIoMSwgMCkpOyAgICAgICAvLzAtcGlcclxuICAgICAgICAgICAgaWYgKHRoaXMucDEueSA8IDApIHJhZCA9IC1yYWQ7XHJcbiAgICAgICAgICAgIGxldCBsZW4gPSB0aGlzLnAxLmxlbigpO1xyXG4gICAgICAgICAgICB0aGlzLnVuaWZ5UG9zKHRoaXMucGMxLCB0aGlzLmMxLCBsZW4pO1xyXG4gICAgICAgICAgICB0aGlzLnBjMS5yb3RhdGVTZWxmKHJhZCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmMyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVuaWZ5UG9zKHRoaXMucGMyLCB0aGlzLmMyLCBsZW4pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYzIucm90YXRlU2VsZihyYWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBsb29wKHRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTW92ZUNvbXBsZXRlKSByZXR1cm47XHJcbiAgICAgICAgbGV0IG5vdyA9IERhdGUubm93KCk7XHJcbiAgICAgICAgaWYgKG5vdyA+IHRoaXMuZW5kVGltZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFBvcygxKTtcclxuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzRmlyc3RGcmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzRmlyc3RGcmFtZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdCA9IChub3cgLSB0aGlzLnN0YXJ0VGltZSkgLyB0aGlzLmR1cmF0aW9uO1xyXG4gICAgICAgIHRoaXMuc2V0UG9zKHQpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy/kuIDmrKHmm7Lnur/vvIjnm7Tnur/vvInorqHnrpfkvY3nva5cclxuICAgIHByaXZhdGUgc2V0UG9zQnlMaW5lKHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGxldCB0ZW1wWCA9IHQgKiB0aGlzLnAxLngsXHJcbiAgICAgICAgICAgIHRlbXBZID0gdCAqIHRoaXMucDEueTtcclxuICAgICAgICB0aGlzLnRhcmdldC54ID0gdGhpcy5zdGFydFBvcy54ICsgdGVtcFg7XHJcbiAgICAgICAgdGhpcy50YXJnZXQueSA9IHRoaXMuc3RhcnRQb3MueSArIHRlbXBZO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5LqM5qyh5puy57q/6K6h566X5L2N572uXHJcbiAgICBwcml2YXRlIHNldFBvc0J5QmV6aWVyMih0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBsZXQgYiA9IDIgKiB0ICogKDEgLSB0KSxcclxuICAgICAgICAgICAgYyA9IHQgKiogMjtcclxuICAgICAgICBsZXQgdGVtcFggPSBiICogdGhpcy5wYzEueCArIGMgKiB0aGlzLnAxLngsXHJcbiAgICAgICAgICAgIHRlbXBZID0gYiAqIHRoaXMucGMxLnkgKyBjICogdGhpcy5wMS55O1xyXG4gICAgICAgIHRoaXMudGFyZ2V0LnggPSB0aGlzLnN0YXJ0UG9zLnggKyB0ZW1wWDtcclxuICAgICAgICB0aGlzLnRhcmdldC55ID0gdGhpcy5zdGFydFBvcy55ICsgdGVtcFk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/kuInmrKHmm7Lnur/orqHnrpfkvY3nva5cclxuICAgIHByaXZhdGUgc2V0UG9zQnlCZXppZXIzKHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGxldCBiID0gMyAqIHQgKiAoMSAtIHQpICoqIDIsXHJcbiAgICAgICAgICAgIGMgPSAzICogKDEgLSB0KSAqIHQgKiogMixcclxuICAgICAgICAgICAgZCA9IHQgKiogMztcclxuICAgICAgICBsZXQgdGVtcFggPSBiICogdGhpcy5wYzEueCArIGMgKiB0aGlzLnBjMi54ICsgZCAqIHRoaXMucDEueCxcclxuICAgICAgICAgICAgdGVtcFkgPSBiICogdGhpcy5wYzEueSArIGMgKiB0aGlzLnBjMi55ICsgZCAqIHRoaXMucDEueTtcclxuICAgICAgICB0aGlzLnRhcmdldC54ID0gdGhpcy5zdGFydFBvcy54ICsgdGVtcFg7XHJcbiAgICAgICAgdGhpcy50YXJnZXQueSA9IHRoaXMuc3RhcnRQb3MueSArIHRlbXBZO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog57uf5LiA5Z2Q5qCHIFxyXG4gICAgICogQHBhcmFtIHRhcmdldCDopoHmlLnpgKDnmoTlkJHph49cclxuICAgICAqIEBwYXJhbSB2IOavlOS+i+WPguaVsFxyXG4gICAgICogQHBhcmFtIGxlbiDmr5Tkvovlj4LogIPplb/luqZcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1bmlmeVBvcyh0YXJnZXQ6IGNjLlZlYzIsIHY6IGNjLlZlYzIsIGxlbjogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHJhdGlvID0gdGhpcy5pc0Fic29sdXRlQ3RybCA/IDEgOiBsZW47XHJcbiAgICAgICAgdGFyZ2V0LnggPSB2LnggKiByYXRpbztcclxuICAgICAgICB0YXJnZXQueSA9IHYueSAqIHJhdGlvO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=