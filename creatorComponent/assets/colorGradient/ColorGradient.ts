

const { ccclass, property } = cc._decorator;

@ccclass
export default class ColorGradient extends cc.Component {

    @property(cc.Node)
    target: cc.Node = null;

    private color0: cc.Color = cc.Color.GREEN;
    private color1: cc.Color = cc.Color.RED;
    // private color1: cc.Color = cc.color().fromHEX(`#D41C1C`);
    private color: cc.Color = cc.color();

    private rate: number = 0;

    protected onLoad(): void {
        this.schedule(this.clock, 0.05);
    }

    clock() {
        this.rate += 0.005;
        this.gradient(this.rate, this.target);
    }

    gradient(rate: number, node: cc.Node) {
        //方案一： 修改h值渐变
        let h0 = this.color0.toHSV().h,
            h1 = this.color1.toHSV().h;
        let h = (h1 - h0) * rate + h0;
        if (h > 1) h -= 1;
        if (h < 0) h += 1;
        if ((h - h0) * (h - h1) > 0) {
            this.unschedule(this.clock);
            return;
        }
        this.color.fromHSV(h, 0.8, 1);

        //方案二： 使用自带的线性插值
        // this.color = this.color0.lerp(this.color1, rate);

        node.color = this.color;
    }

}
