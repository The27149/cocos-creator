import { NodeConvertVec2s } from "../common/Global";
import { NodeFactory } from "../common/NodeFactory";
import Bullet from "./Bullet";


const { ccclass, property } = cc._decorator;

@ccclass
export default class BulletMgr {
    private static _ins: BulletMgr = null;
    public static get ins(): BulletMgr {
        if (!this._ins) this._ins = new BulletMgr();
        return this._ins;
    }

    private bulletContainer: cc.Node = null;
    private bombContainer: cc.Node = null;
    private bulletFactoryList: NodeFactory[] = [];  //0:普通子弹   1： 火炮子弹
    private bombFactory: NodeFactory;
    public bulletSpeed: number = 1000;
    private bombConverts: NodeConvertVec2s = new NodeConvertVec2s();

    public init(container, ...prefabs: cc.Prefab[]) {
        this.bulletContainer = container
        for (let i = 0; i < prefabs.length; i++) {
            let pre = prefabs[i];
            this.bulletFactoryList[i] = new NodeFactory(pre);
        }
    }

    public initBomb(container: cc.Node, pre: cc.Prefab) {
        this.bombContainer = container;
        this.bombFactory = new NodeFactory(pre);
    }

    public createBullet(type: number): Bullet {
        let factory = this.bulletFactoryList[type];
        let node = factory.get();
        node.parent = this.bulletContainer;
        let bullet = node.getComponent(Bullet);
        bullet.type = type;
        return bullet;
    }

    public destroyBullet(bullet: Bullet) {
        bullet.stopAllState();
        let factory = this.bulletFactoryList[bullet.type];
        factory && factory.put(bullet.node);
    }

    public destroyAllBullets() {
        while (this.bulletContainer.childrenCount > 0) {
            let bullet = this.bulletContainer.children[0].getComponent(Bullet);
            this.destroyBullet(bullet);
        }
    }

    public createBomb(target: cc.Node, call?: Function) {
        let node = this.bombFactory.get();
        node.parent = this.bombContainer;
        target.convertToWorldSpaceAR(this.bombConverts.v2, this.bombConverts.world);
        this.bombContainer.convertToNodeSpaceAR(this.bombConverts.world, this.bombConverts.local);
        node.setPosition(this.bombConverts.local);
        let ani = node.getComponent(cc.Animation);
        ani.play();
        if (!node[`onFinish`]) {
            node.attr({
                onFinish: () => {
                    node[`call`] && node[`call`]();
                    this.destroyBomb(node);
                },
                call: call
            });
            ani.on(`finished`, node[`onFinish`], this);
        }
        node[`call`] = call;
    }

    public destroyBomb(node: cc.Node) {
        this.bombFactory.put(node);
    }
}
