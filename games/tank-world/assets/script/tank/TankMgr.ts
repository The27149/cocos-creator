import { ECAMP } from "../common/Global";
import { NodeFactory } from "../common/NodeFactory";
import Tank from "./Tank";


const { ccclass, property } = cc._decorator;

@ccclass
export default class TankMgr {
    private static _ins: TankMgr = null;
    public static get ins(): TankMgr {
        if (!this._ins) this._ins = new TankMgr();
        return this._ins;
    }

    private tankContainer: cc.Node = null;
    private tankFactoryList: NodeFactory[] = [];    //0：防御塔    1~n：不同坦克
    public tankBornX: number = 850;     //坦克出生时离中心水平距离
    public tankBornY: number = 500;     //普通坦克出生时垂直高度
    public tankDropSpeed: number = -500;//出生后降落速度


    public init(container: cc.Node, ...prefabs: cc.Prefab[]) {
        this.tankContainer = container;
        for (let i = 0; i < prefabs.length; i++) {
            let pre = prefabs[i];
            this.tankFactoryList[i] = new NodeFactory(pre);
        }
    }

    public createTank(type: number, campType: ECAMP): Tank {
        let factory = this.tankFactoryList[type];
        let node = factory.get();
        node.parent = this.tankContainer;
        let tank = node.getComponent(Tank);
        tank.reset(type, campType);
        return tank;
    }

    public destroyTank(tank: Tank) {
        let factory = this.tankFactoryList[tank.type];
        factory && factory.put(tank.node);
    }

    /**返回两车距离 */
    public getDistanceOfTanks(t1: Tank, t2: Tank): number {
        return Math.abs(t1.node.x - t2.node.x);
    }

}
