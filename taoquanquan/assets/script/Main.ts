import Hall from "./Hall";
import Module from "./common/Module";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Main extends Module {

    protected start(): void {
        Module.get(Hall).show();
    }


}
