"use strict";
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