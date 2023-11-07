

const { ccclass, property } = cc._decorator;

@ccclass
export default class BorderRadius extends cc.Component {



    @property({ tooltip: '' })
    radius: number = 10;

    private g = null;

    onLoad() {
        this.g = this.node.getComponent(cc.Graphics);
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
        this.g.arc(left, top, this.radius, pi, pi / 2);
        this.g.arc(right, top, this.radius, pi / 2, 0);
        this.g.arc(right, bottom, this.radius, 0, -pi / 2);
        this.g.arc(left, bottom, this.radius, -pi / 2, pi);
        this.g.moveTo(left, h / 2);
        this.g.lineTo(right, h / 2);
        this.g.lineTo(w / 2, top);
        this.g.lineTo(w / 2, bottom);
        this.g.lineTo(right, -h / 2);
        this.g.lineTo(left, -h / 2);
        this.g.lineTo(-w / 2, bottom);
        this.g.lineTo(-w / 2, top);
        this.g.fill();
    }

}
