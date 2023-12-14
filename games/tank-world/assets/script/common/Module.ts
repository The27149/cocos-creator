


const { ccclass, property } = cc._decorator;

/**
 * 可以全局访问的单例组件
 */
@ccclass
export default class Module extends cc.Component {
    private static map: Map<string, any> = new Map();
    /**获取模块 */
    public static get<T extends Module>(cls: { prototype: T }): T | null {
        let name = cc.js.getClassName(cls);
        let m = Module.map.get(name);
        if (!m) console.error(`要获取的模块:${name}应继承Module类`);
        return m
    }

    protected constructor() {
        super();
        let name = cc.js.getClassName(this);
        Module.map.set(name, this);
        // if (!Module.map.get(name)) {
        // }
    }



}
