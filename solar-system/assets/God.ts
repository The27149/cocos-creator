import { _decorator, Component, Node, Prefab, instantiate, Vec3, v3 } from 'cc';
import { Ball } from './ball/scripts/Ball';
const { ccclass, property } = _decorator;

export interface IBallParam {
    name: string;
    /**直径 */
    diam: number;
    /**质量 */
    weight: number;
    pos: Vec3;
}

@ccclass('God')
export class God extends Component {
    private static _instance: God = null;
    public static get instance(): God {
        if (!this._instance) this._instance = new God();
        return this._instance;
    }

    @property(Prefab)
    ballPre: Prefab = null;


    /**所有天体 */
    private balls: Ball[] = [];


    onLoad() {
        let cfg: IBallParam[] = [
            {
                name: 'sun',
                diam: 0,
                weight: 0,
                pos: v3(),
            },
            {
                name: 'earth',
                diam: 0,
                weight: 0,
                pos: v3(),
            }
        ];

        cfg.forEach(item => {
            let node = instantiate(this.ballPre);
            let ball = node.getComponent(Ball);
            this.balls.push(ball);
            ball.init(item);
        })

    }

    update(deltaTime: number) {

    }
}

