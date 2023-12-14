import { Global } from "../../../script/common/Global";


const { ccclass, property } = cc._decorator;
export interface IPropItem {
    type: number;
    cost: number;
    isLock: boolean;
    isPick: boolean;
}

@ccclass
export default class ShopData {
    private constructor() { }
    private static _ins: ShopData = null;
    public static get ins(): ShopData {
        if (!this._ins) {
            this._ins = new ShopData();
            this._ins.init();
        }
        return this._ins;
    }


    /**道具列表 */
    private props: IPropItem[] = null;
    private key: string = `shopProps`;

    private init() {
        this.props = Global.ins.localData.getData(this.key);
        if (!this.props) {
            this.props = [];
            let config = this.getPropConfig();
            for (let item of config.props) {
                let prop: IPropItem = { type: 0, cost: 0, isLock: false, isPick: false };
                Object.assign(prop, item);
                let isLock = item.cost !== 0;
                prop.isLock = isLock;
                prop.isPick = !isLock;
                this.props.push(prop);
            }
            this.save();
        }
    }

    private save() {
        Global.ins.localData.setData(this.key, this.props);
    }

    getAllProps() {
        return this.props;
    }

    getData(type: number): IPropItem {
        return this.props.find(prop => prop.type === type);
    }

    setLock(type: number, state: boolean) {
        let data = this.getData(type);
        data.isLock = state;
        this.save();
    }

    setPick(type: number, state: boolean) {
        let data = this.getData(type);
        data.isPick = state;
        this.save();
    }


    /**自己的商店配置 */
    private getPropConfig(): any {
        return {
            props: [
                {
                    type: 1,    //球1
                    cost: 0,
                },
                {
                    type: 2,     //球2
                    cost: 20,
                },
                {
                    type: 3,
                    cost: 40,
                },
                {
                    type: 4,
                    cost: 60,
                },
                {
                    type: 5,
                    cost: 80,
                },

            ]
        }
    }

}
