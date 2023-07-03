import { Global } from "./Global";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Utils {

    public static log(...params) {
        if (!Global.isDebug) return;
        console.log('%c >>>>>>>>>>>', 'color: orange', ...params);
    }

    /**随机整数 */
    public static randomInt(...nums: number[]) {
        let min = Math.floor(Math.min(...nums));
        let max = Math.floor(Math.max(...nums));
        return Math.floor(Math.random() * (++max - min)) + min;
    }

    /**从数组中随机取出一项 */
    static randomFromArray<T>(list: T[]): T {
        let idx = Utils.randomInt(0, list.length - 1);
        return list[idx];
    }

    /**
     * 动态显示图片
     * @param target 
     * @param path 
     * @param call 
     */
    static dynamicSprite(target: cc.Node | cc.Sprite, path: string, call?: Function) {
        if (target instanceof cc.Node) target = target.getComponent(cc.Sprite) || target.addComponent(cc.Sprite);
        cc.resources.load(path, cc.SpriteFrame, (err: Error, frame: cc.SpriteFrame) => {
            if (!err) {
                (target as cc.Sprite).spriteFrame = frame;
                call && call(frame);
            } else {
                Utils.log('加载图片错误', path, err);
            }
        })
    }

    /**扁平化一层数组 */
    static flat<T>(list: T[][]): T[] {
        return list.reduce((pre, item) => {
            (pre as Array<T>).push(...item);
            return pre;
        }, []);
    }


}
