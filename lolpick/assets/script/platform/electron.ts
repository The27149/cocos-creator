import { IUser } from "../common/ComDefine";

export class Electron {
    private static _ins: Electron = null;
    public static get ins(): Electron {
        if (!this._ins) {
            this._ins = new Electron();
        }
        return this._ins;
    }
    
    private api: any = null;

    constructor() {
        this.api = window['mainApi'];
    }

    /**保存数据 */
    public async saveData(data: IUser[]) {
        if(!this.api) return;
        await this.api.saveData(data);
    }

    /**加载数据 */
    public async loadData(): Promise<IUser[]> {
        if(!this.api) return null;
        const res = await this.api.loadData();
        return res;
    }
}


