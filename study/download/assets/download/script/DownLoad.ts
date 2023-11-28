

const { ccclass, property } = cc._decorator;

@ccclass
export default class DownLoad {
    private constructor() { }
    private static _ins: DownLoad = null;
    public static get ins(): DownLoad {
        if (!this._ins) this._ins = new DownLoad();
        return this._ins;
    }


    test() {
        jsb.fileUtils
    }

}
