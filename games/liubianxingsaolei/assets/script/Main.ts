

const { ccclass, property } = cc._decorator;

@ccclass
export default class Main extends cc.Component {

    protected onLoad(): void {
        cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
        cc.view.setDesignResolutionSize(1080, 1920, cc.ResolutionPolicy.FIXED_WIDTH);
    }
}
