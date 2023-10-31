


const { ccclass, property } = cc._decorator;

@ccclass
export default class Utils {

    public static log(...params) {
        // return;
        console.log('%c >>>>>>>>>>>', 'color: orange', ...params);
    }

    /**随机整数 */
    public static randomInt(...nums: number[]) {
        let min = Math.floor(Math.min(...nums));
        let max = Math.floor(Math.max(...nums));
        return Math.floor(Math.random() * (++max - min)) + min;
    }

    /**从数组中随机取出n项 默认取一项 */
    static randomFromArray<T>(list: T[], count: number = 1): T[] {
        let res: T[] = [];
        let copyList = [...list];
        count = Math.min(count, copyList.length);
        for (let i = 0; i < count; i++) {
            let idx = Utils.randomInt(0, copyList.length - 1);
            let ele = copyList.splice(idx, 1)[0]
            res.push(ele);
        }
        return res;
    }

    /**
     * 动态显示图片 resources包内资源
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

    /**动态显示图片  主包内资源 */
    // static dynamicSpriteInMain(target: cc.Node | cc.Sprite, path: string, call?: Function) {
    //     if (target instanceof cc.Node) target = target.getComponent(cc.Sprite) || target.addComponent(cc.Sprite);
    //     cc.assetManager.getBundle(`main`).load(path, cc.SpriteFrame, (err: Error, frame: cc.SpriteFrame) => {
    //         if (!err) {
    //             (target as cc.Sprite).spriteFrame = frame;
    //             call && call(frame);
    //         } else {
    //             Utils.log('加载图片错误', path, err);
    //         }
    //     })
    // }

    /**动态加载预制 resources包内资源*/
    static dynamicPrefab(path: string): Promise<cc.Prefab> {
        return new Promise((resolve, reject) => {
            cc.resources.load(path, cc.Prefab, (err, pre: cc.Prefab) => {
                if (!err) {
                    resolve(pre);
                } else {
                    Utils.log(`加载预制错误`, path, err);
                    reject();
                }
            })
        })
    }

    /**动态加载预制 主包内资源*/
    // static dynamicPrefabInMain(path: string): Promise<cc.Prefab> {
    //     return new Promise((resolve, reject) => {
    //         cc.assetManager.getBundle(`main`).load(path, cc.Prefab, (err, pre: cc.Prefab) => {
    //             if (!err) {
    //                 resolve(pre);
    //             } else {
    //                 Utils.log(`加载预制错误`, path, err);
    //                 reject();
    //             }
    //         })
    //     })
    // }

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

    /**欧拉角转弧度 */
    static eulerToRad(e: number): number {
        return Math.PI * e / 180;
    }

    /**弧度角转欧拉 */
    static radToEuler(r: number): number {
        return r * 180 / Math.PI
    }

}
