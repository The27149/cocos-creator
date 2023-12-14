
export default class LocalData {


    private key: string;

    constructor(key: string) {
        this.key = key;
    }

    public setData(val: any) {
        val = JSON.stringify(val);
        cc.sys.localStorage.setItem(this.key, val);
    }

    public getData(): any {
        let str = cc.sys.localStorage.getItem(this.key);
        return JSON.parse(str);
    }
}
