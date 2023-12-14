
const { ccclass } = cc._decorator;
/**再次封装节点池 */
// @ccclass('NodeFactory')
export class NodeFactory {

    constructor(pre: cc.Prefab) {
        this.pre = pre;
        this.pool = new cc.NodePool();
    }

    private pre: cc.Prefab = null;
    private pool: cc.NodePool = null;
    // private parent: cc.Node = null;

    public get(): cc.Node {
        let node: cc.Node = null;
        if (this.pool.size() > 0) node = this.pool.get()
        else node = cc.instantiate(this.pre);
        node.setPosition(0, 0);
        return node;
    }

    public put(node: cc.Node) {
        this.pool.put(node);
    }
}

