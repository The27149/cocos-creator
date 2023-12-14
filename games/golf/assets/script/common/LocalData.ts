
export default class LocalData {


    private libName: string;
    private data: any;

    constructor(name: string) {
        this.libName = name;
        this.syncFromLocalStorage();
        if (!this.data) {
            this.data = {};
            this.syncToLocalStorage();
        }
    }

    /**数据同步到localStorage */
    private syncToLocalStorage() {
        let data = JSON.stringify(this.data);
        cc.sys.localStorage.setItem(this.libName, data);
    }

    /**数据从localStorage更新*/
    private syncFromLocalStorage() {
        let str = cc.sys.localStorage.getItem(this.libName);
        this.data = JSON.parse(str);
    }

    /**存入数据 */
    public setData(key: string, value: any) {
        this.data[key] = value;
        this.syncToLocalStorage();
    }

    /**获取数据 */
    public getData(key: string): any {
        return this.data[key];
    }
}
