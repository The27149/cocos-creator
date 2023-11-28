import EventMgr from "./common/EventMgr";
import { GEvent, Global } from "./common/Global";


const { ccclass, property } = cc._decorator;

@ccclass
export default class CoinMgr {
    /**本地存储key */
    public static localKey: string = `starNum`;
    private constructor() { }
    private static _ins: CoinMgr = null;
    public static get ins(): CoinMgr {
        if (!this._ins) {
            this._ins = new CoinMgr();
            this._ins.init();
        }
        return this._ins;
    }

    private coin: number = 0;

    private init() {
        let num = Global.ins.localData.getData(CoinMgr.localKey);
        if (num === undefined) {
            num = 0;
            Global.ins.localData.setData(CoinMgr.localKey, num);
        }
        this.coin = num;
    }

    public getCoin(): number {
        return this.coin;
    }

    public changeCoin(v: number) {
        this.coin += v;
        Global.ins.localData.setData(CoinMgr.localKey, this.coin);
        EventMgr.ins.emit(GEvent.coinChanged);
    }

}
