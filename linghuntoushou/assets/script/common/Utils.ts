


const { ccclass, property } = cc._decorator;

@ccclass
export default class Utils {

    public static log(...params) {
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

    /**
     * 动态显示图片(指定bundle)
     * @param target 
     * @param path 
     * @param call 
     */
    static dynamicSpriteInBundle(target: cc.Node | cc.Sprite, bundleName: string, path: string, call?: Function) {
        let bundle = cc.assetManager.getBundle(bundleName);
        if (!bundle) {
            cc.assetManager.loadBundle(bundleName, show);
        } else show();

        function show() {
            bundle = cc.assetManager.getBundle(bundleName);
            if (target instanceof cc.Node) target = target.getComponent(cc.Sprite) || target.addComponent(cc.Sprite);
            bundle.load(path, cc.SpriteFrame, (err: Error, frame: cc.SpriteFrame) => {
                if (!err) {
                    (target as cc.Sprite).spriteFrame = frame;
                    call && call(frame);
                } else {
                    Utils.log('加载图片错误', path, err);
                }
            })
        }
    }

    /**扁平化一层数组 */
    static flat<T>(list: T[][]): T[] {
        return list.reduce((pre, item) => {
            (pre as Array<T>).push(...item);
            return pre;
        }, []);
    }

    /**计算距离 */
    static getDistance(p1: cc.Vec2, p2: cc.Vec2) {
        return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
    }

}
