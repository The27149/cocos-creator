import { _decorator } from "cc";

const { ccclass, property } = _decorator;

@ccclass
export default class EBEventMgr {
    private constructor() { }
    private static _ins: EBEventMgr = null;
    public static get ins(): EBEventMgr {
        if (!this._ins) this._ins = new EBEventMgr();
        return this._ins;
    }

    //事件表
    private eventMap: Map<string, IEventHandler[]> = new Map<string, IEventHandler[]>();

    public destroy() {
        this.eventMap.clear();
        this.eventMap = null;
        EBEventMgr._ins = null;
    }

    /**发射事件 */
    public raiseEvent(name: string, ...params: any[]) {
        let handlerList = this.eventMap.get(name);
        if (!handlerList) return;
        //复制一份防止回调过程移除事件导致循环bug
        let tempList = [...handlerList];
        tempList.forEach(handler => {
            handler.callback.call(handler.target, ...params);
        })
    }

    /**添加事件监听 */
    public addEvent(name: string, call: Function, target: any) {
        let isExist = this.getHandlerIndex(name, call, target) >= 0;
        if (isExist) return;
        let handler: IEventHandler = {
            callback: call,
            target: target
        }
        let handlerList = this.eventMap.get(name);
        if (handlerList) handlerList.push(handler);
        else this.eventMap.set(name, [handler]);
    }

    /**移除事件监听 */
    public removeEvent(name: string, call: Function, target: any) {
        let index = this.getHandlerIndex(name, call, target);
        if (index < 0) return;
        let list = this.eventMap.get(name);
        list.splice(index, 1);
        if (list.length === 0) this.eventMap.delete(name);
    }

    /**查询一个处理器的下标 没找到返回-1 */
    private getHandlerIndex(name: string, call: Function, target: any): number {
        let list = this.eventMap.get(name);
        if (!list) return -1;
        return list.findIndex(item => item.callback === call && item.target === target);
    }
}

interface IEventHandler {
    callback: Function;
    target: any;
}
