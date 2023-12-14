import { IColliderProxy } from "../common/Global";


const { ccclass, property } = cc._decorator;

@ccclass
export default class ColliderHandler extends cc.Component {

    public proxy: IColliderProxy;

    init(proxy: IColliderProxy) {
        this.proxy = proxy;
    }

    onCollisionEnter(other: cc.Collider, self: cc.Collider) {
        if (!this.proxy) return;
        this.proxy.onCollisionEnter(other, self);
    }

}
