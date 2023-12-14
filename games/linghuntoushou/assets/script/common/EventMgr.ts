

const { ccclass, property } = cc._decorator;

@ccclass
export default class EventMgr {
    private constructor() { }
    private static _ins: EventMgr = null;
    public static get ins(): EventMgr {
        if (!this._ins) {
            this._ins = new EventMgr();
            this._ins.init();
        }
        return this._ins;
    }

    private init() {

    }

    public emit(name: string, ...args: any[]) {
        cc.Canvas.instance.node.emit(name, ...args);
    }

    public on(name: string, call: Function, target: any) {
        cc.Canvas.instance.node.on(name, call, target);
    }

    public off(name: string, call: Function, target: any) {
        cc.Canvas.instance.node.off(name, call, target);
    }
}
