
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/Utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0b34dqoVcxGf4f329CNcAr1', 'Utils');
// script/common/Utils.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils_1 = Utils;
    Utils.log = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        console.log.apply(console, __spreadArrays(['%c >>>>>>>>>>>', 'color: orange'], params));
    };
    /**随机整数 */
    Utils.randomInt = function () {
        var nums = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nums[_i] = arguments[_i];
        }
        var min = Math.floor(Math.min.apply(Math, nums));
        var max = Math.floor(Math.max.apply(Math, nums));
        return Math.floor(Math.random() * (++max - min)) + min;
    };
    /**从数组中随机取出一项 */
    Utils.randomFromArray = function (list) {
        var idx = Utils_1.randomInt(0, list.length - 1);
        return list[idx];
    };
    /**
     * 动态显示图片
     * @param target
     * @param path
     * @param call
     */
    Utils.dynamicSprite = function (target, path, call) {
        if (target instanceof cc.Node)
            target = target.getComponent(cc.Sprite) || target.addComponent(cc.Sprite);
        cc.resources.load(path, cc.SpriteFrame, function (err, frame) {
            if (!err) {
                target.spriteFrame = frame;
                call && call(frame);
            }
            else {
                Utils_1.log('加载图片错误', path, err);
            }
        });
    };
    /**
     * 动态显示图片(指定bundle)
     * @param target
     * @param path
     * @param call
     */
    Utils.dynamicSpriteInBundle = function (target, bundleName, path, call) {
        var bundle = cc.assetManager.getBundle(bundleName);
        if (!bundle) {
            cc.assetManager.loadBundle(bundleName, show);
        }
        else
            show();
        function show() {
            bundle = cc.assetManager.getBundle(bundleName);
            if (target instanceof cc.Node)
                target = target.getComponent(cc.Sprite) || target.addComponent(cc.Sprite);
            bundle.load(path, cc.SpriteFrame, function (err, frame) {
                if (!err) {
                    target.spriteFrame = frame;
                    call && call(frame);
                }
                else {
                    Utils_1.log('加载图片错误', path, err);
                }
            });
        }
    };
    /**扁平化一层数组 */
    Utils.flat = function (list) {
        return list.reduce(function (pre, item) {
            var _a;
            (_a = pre).push.apply(_a, item);
            return pre;
        }, []);
    };
    /**计算距离 */
    Utils.getDistance = function (p1, p2) {
        return Math.sqrt(Math.pow((p1.x - p2.x), 2) + Math.pow((p1.y - p2.y), 2));
    };
    var Utils_1;
    Utils = Utils_1 = __decorate([
        ccclass
    ], Utils);
    return Utils;
}());
exports.default = Utils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb21tb25cXFV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQUE7SUE0RUEsQ0FBQztjQTVFb0IsS0FBSztJQUVSLFNBQUcsR0FBakI7UUFBa0IsZ0JBQVM7YUFBVCxVQUFTLEVBQVQscUJBQVMsRUFBVCxJQUFTO1lBQVQsMkJBQVM7O1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLE9BQVgsT0FBTyxrQkFBSyxnQkFBZ0IsRUFBRSxlQUFlLEdBQUssTUFBTSxHQUFFO0lBQzlELENBQUM7SUFFRCxVQUFVO0lBQ0ksZUFBUyxHQUF2QjtRQUF3QixjQUFpQjthQUFqQixVQUFpQixFQUFqQixxQkFBaUIsRUFBakIsSUFBaUI7WUFBakIseUJBQWlCOztRQUNyQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQVIsSUFBSSxFQUFRLElBQUksRUFBRSxDQUFDO1FBQ3hDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBUixJQUFJLEVBQVEsSUFBSSxFQUFFLENBQUM7UUFDeEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQzNELENBQUM7SUFFRCxnQkFBZ0I7SUFDVCxxQkFBZSxHQUF0QixVQUEwQixJQUFTO1FBQy9CLElBQUksR0FBRyxHQUFHLE9BQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDOUMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFD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a0JBNUVvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWxzIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGxvZyguLi5wYXJhbXMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnJWMgPj4+Pj4+Pj4+Pj4nLCAnY29sb3I6IG9yYW5nZScsIC4uLnBhcmFtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq6ZqP5py65pW05pWwICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJhbmRvbUludCguLi5udW1zOiBudW1iZXJbXSkge1xyXG4gICAgICAgIGxldCBtaW4gPSBNYXRoLmZsb29yKE1hdGgubWluKC4uLm51bXMpKTtcclxuICAgICAgICBsZXQgbWF4ID0gTWF0aC5mbG9vcihNYXRoLm1heCguLi5udW1zKSk7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgrK21heCAtIG1pbikpICsgbWluO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuS7juaVsOe7hOS4remaj+acuuWPluWHuuS4gOmhuSAqL1xyXG4gICAgc3RhdGljIHJhbmRvbUZyb21BcnJheTxUPihsaXN0OiBUW10pOiBUIHtcclxuICAgICAgICBsZXQgaWR4ID0gVXRpbHMucmFuZG9tSW50KDAsIGxpc3QubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgcmV0dXJuIGxpc3RbaWR4XTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKqOaAgeaYvuekuuWbvueJh1xyXG4gICAgICogQHBhcmFtIHRhcmdldCBcclxuICAgICAqIEBwYXJhbSBwYXRoIFxyXG4gICAgICogQHBhcmFtIGNhbGwgXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBkeW5hbWljU3ByaXRlKHRhcmdldDogY2MuTm9kZSB8IGNjLlNwcml0ZSwgcGF0aDogc3RyaW5nLCBjYWxsPzogRnVuY3Rpb24pIHtcclxuICAgICAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgY2MuTm9kZSkgdGFyZ2V0ID0gdGFyZ2V0LmdldENvbXBvbmVudChjYy5TcHJpdGUpIHx8IHRhcmdldC5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChwYXRoLCBjYy5TcHJpdGVGcmFtZSwgKGVycjogRXJyb3IsIGZyYW1lOiBjYy5TcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWVycikge1xyXG4gICAgICAgICAgICAgICAgKHRhcmdldCBhcyBjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gZnJhbWU7XHJcbiAgICAgICAgICAgICAgICBjYWxsICYmIGNhbGwoZnJhbWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgVXRpbHMubG9nKCfliqDovb3lm77niYfplJnor68nLCBwYXRoLCBlcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKqOaAgeaYvuekuuWbvueJhyjmjIflrppidW5kbGUpXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IFxyXG4gICAgICogQHBhcmFtIHBhdGggXHJcbiAgICAgKiBAcGFyYW0gY2FsbCBcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGR5bmFtaWNTcHJpdGVJbkJ1bmRsZSh0YXJnZXQ6IGNjLk5vZGUgfCBjYy5TcHJpdGUsIGJ1bmRsZU5hbWU6IHN0cmluZywgcGF0aDogc3RyaW5nLCBjYWxsPzogRnVuY3Rpb24pIHtcclxuICAgICAgICBsZXQgYnVuZGxlID0gY2MuYXNzZXRNYW5hZ2VyLmdldEJ1bmRsZShidW5kbGVOYW1lKTtcclxuICAgICAgICBpZiAoIWJ1bmRsZSkge1xyXG4gICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZEJ1bmRsZShidW5kbGVOYW1lLCBzaG93KTtcclxuICAgICAgICB9IGVsc2Ugc2hvdygpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBzaG93KCkge1xyXG4gICAgICAgICAgICBidW5kbGUgPSBjYy5hc3NldE1hbmFnZXIuZ2V0QnVuZGxlKGJ1bmRsZU5hbWUpO1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgY2MuTm9kZSkgdGFyZ2V0ID0gdGFyZ2V0LmdldENvbXBvbmVudChjYy5TcHJpdGUpIHx8IHRhcmdldC5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICAgICAgYnVuZGxlLmxvYWQocGF0aCwgY2MuU3ByaXRlRnJhbWUsIChlcnI6IEVycm9yLCBmcmFtZTogY2MuU3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgKHRhcmdldCBhcyBjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gZnJhbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbCAmJiBjYWxsKGZyYW1lKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVXRpbHMubG9nKCfliqDovb3lm77niYfplJnor68nLCBwYXRoLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKirmiYHlubPljJbkuIDlsYLmlbDnu4QgKi9cclxuICAgIHN0YXRpYyBmbGF0PFQ+KGxpc3Q6IFRbXVtdKTogVFtdIHtcclxuICAgICAgICByZXR1cm4gbGlzdC5yZWR1Y2UoKHByZSwgaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAocHJlIGFzIEFycmF5PFQ+KS5wdXNoKC4uLml0ZW0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcHJlO1xyXG4gICAgICAgIH0sIFtdKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirorqHnrpfot53nprsgKi9cclxuICAgIHN0YXRpYyBnZXREaXN0YW5jZShwMTogY2MuVmVjMiwgcDI6IGNjLlZlYzIpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KChwMS54IC0gcDIueCkgKiogMiArIChwMS55IC0gcDIueSkgKiogMik7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==