import { Node, Sprite, SpriteFrame, resources } from "cc";

/**业务相关的工具 用单例模式 */
export class Tools {
    private constructor() { };
    private static _ins: Tools = null;
    public static get ins() {
        if (!this._ins) {
            this._ins = new Tools();
        }
        return this._ins;
    }

    // private jobStrList = [`空`, `上`, `野`, `中`, `辅`, `下`];


    // /**获取职业字符 */
    // public getJobStr(job: EJob): string {
    //     return this.jobStrList[job];
    // }

    // /**获取职业代号 */
    // public getJobId(jobStr: string): number {
    //     let idx = this.jobStrList.indexOf(jobStr);
    //     return idx;
    // }

    private getPlayerData(id: number) {

    }

    /**从resources设置图片 */
    public setSprite(target: Node | Sprite, path: string) {
        if (target instanceof Node) target = target.getComponent(Sprite) || target.addComponent(Sprite);
        path += `/spriteFrame`;
        resources.load(path, SpriteFrame, (err, spf) => {
            if (!err) {
                (target as Sprite).spriteFrame = spf;
            }
        })
    }

}


