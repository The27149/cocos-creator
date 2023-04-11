import { _decorator, Component, Node, Prefab, instantiate, Vec3, v3, Camera } from 'cc';
import { Ball } from './ball/scripts/Ball';
import { Ship } from './ship/Ship';
const { ccclass, property } = _decorator;

export interface IBallParam {
    name: string;
    id: number;
    /**直径 */
    diam: number;
    /**质量 */
    weight: number;
    pos: Vec3;
    v0: Vec3;
    dragNums?: number[];
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

    @property(Prefab)
    shipPre: Prefab = null;

    @property(Node)
    space: Node = null;

    @property(Camera)
    mainCamera: Camera = null;


    /**所有天体 */
    public balls: Ball[] = [];


    onLoad() {
        let cfg: IBallParam[] = [
            {
                name: 'sun',
                id: 1,
                diam: 6.96e8,
                weight: 1e11,
                pos: v3(0),
                v0: v3(0),
            },
            {
                name: 'earth',
                id: 2,
                diam: 6.371e6,
                weight: 1e11,
                pos: v3(3, 0, 0),
                v0: v3(0, 2, 0)
            }
            // {
            //     name: 'sun',
            //     id: 1,
            //     diam: 6.96e8,
            //     weight: 1.989e30,
            //     pos: v3(0),
            //     v0: v3(0),
            // },
            // {
            //     name: 'earth',
            //     id: 2,
            //     diam: 6.371e6,
            //     weight: 5.974e24,
            //     pos: v3(3, 0, 0),
            //     v0: v3(0, 100, 0)
            // }
        ];

        cfg.forEach(item => {
            let node = instantiate(this.ballPre);
            node.parent = this.space;
            let ball = node.getComponent(Ball);
            this.balls.push(ball);
            ball.init(item, this);
        })
        //全部生成后统一启动
        this.balls.forEach(ball => {
            ball.run();
        })
        //生成飞船
        let shipNode = instantiate(this.shipPre);
        shipNode.parent = this.space;
        let ship = shipNode.getComponent(Ship);
        ship.init(this.mainCamera);
    }

    update(deltaTime: number) {

    }
}

