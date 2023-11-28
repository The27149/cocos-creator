

const { ccclass, property } = cc._decorator;

export interface IRankDataItem {
    nick: string
    score: number
    rank: number
}

@ccclass
export default class RankData {
    private constructor() { }
    private static _ins: RankData = null;
    public static get ins(): RankData {
        if (!this._ins) this._ins = new RankData();
        return this._ins;
    }

    /**rankList */
    private list: any[] = [];

    private init() {

    }

}
