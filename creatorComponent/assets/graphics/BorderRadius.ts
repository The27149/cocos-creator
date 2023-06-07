

const { ccclass, property } = cc._decorator;

@ccclass
export default class BorderRadius extends cc.Graphics {

    @property({ tooltip: '' })
    radius: number = 10;

    onLoad() {
        this.draw();
    }

    private draw() {
        let w = this.node.width,
            h = this.node.height,
            left = -w / 2 + this.radius,
            top = h / 2 - this.radius,
            right = w / 2 - this.radius,
            bottom = -h / 2 + this.radius,
            pi = Math.PI;
        this.arc(left, top, this.radius, pi, pi / 2);
        this.arc(right, top, this.radius, pi / 2, 0);
        this.arc(right, bottom, this.radius, 0, -pi / 2);
        this.arc(left, bottom, this.radius, -pi / 2, pi);
        this.moveTo(left, h / 2);
        this.lineTo(right, h / 2);
        this.lineTo(w / 2, top);
        this.lineTo(w / 2, bottom);
        this.lineTo(right, -h / 2);
        this.lineTo(left, -h / 2);
        this.lineTo(-w / 2, bottom);
        this.lineTo(-w / 2, top);
        this.fill();
    }

}
