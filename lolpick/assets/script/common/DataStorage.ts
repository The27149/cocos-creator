import { sys } from "cc";

export enum EnumStorageKeys {
    playerList = `playerList`,
    rankList = `rankList`,
    matchInfo = `matchInfo`
}

export class DataStorage {
    private constructor() { };
    private static _ins: DataStorage = null;
    public static get ins() {
        if (!this._ins) {
            this._ins = new DataStorage();
            this.ins.init();
        }
        return this._ins;
    }
    private static dataBaseName = `bucket`;

    /**存储数据的临时映射 */
    private bucket: { [key in EnumStorageKeys]?: {} } = {};

    private init() {
        this.bucket = this.getDataBase(DataStorage.dataBaseName) || {};
    }


    private getDataBase(key: string): any {
        let data = sys.localStorage.getItem(key);
        if (!data) return null;
        data = JSON.parse(data);
        return data;
    }

    private setDataBase(key: string, val: any) {
        if (!val) return
        let data = JSON.stringify(val);
        sys.localStorage.setItem(key, data);
    }

    public getItem(key: EnumStorageKeys) {
        return this.bucket[key];
    }

    public setItem(key: EnumStorageKeys, val: any) {
        this.bucket[key] = val;
        this.setDataBase(DataStorage.dataBaseName, this.bucket);
    }


}


