import Utils from "./common/Utils";

const { ccclass, property } = cc._decorator;

/**关卡元素类型 */
export enum ELEMENTTYPE {
    board,      //隔板
    goal,       //球筐
}

/**关卡元素 */
export interface IElement {
    type: ELEMENTTYPE;
    pos: cc.Vec2;
    deg: number;
    moveFn?: (node: cc.Node) => void;
    rotateFn?: (node: cc.Node) => void;
}

/**关卡设计 */
@ccclass
export default class Level {
    private static _ins: Level = null;
    public static get ins(): Level {
        if (!this._ins) this._ins = new Level();
        this._ins.init();
        return this._ins;
    }
    //总配置表
    private configList: IElement[][] = [];


    /**获取一关的配置 */
    public getLevelConfig(level: number): IElement[] {
        return this.configList[level - 1];
    }

    /**获取关卡数 */
    public getLevelSize(): number {
        return this.configList.length;
    }

    /**周期性平移动作
     * @param node 
     * @param deg 方向（与水平正方向的夹角）
     * @param distance 单边移动距离
     * @param time  单边移动时间（一个周期总共4段）
     */
    private move(node: cc.Node, deg: number, distance: number, time: number) {
        let rad = Math.PI * deg / 180;
        let p = cc.v3(Math.cos(rad), Math.sin(rad)).normalizeSelf().mulSelf(distance);
        let p0 = cc.v3(node.position.x, node.position.y),
            p1 = cc.v3(p0.x, p0.y).addSelf(p),
            p2 = cc.v3(p0.x, p0.y).addSelf(p.negSelf());
        cc.tween(node)
            .repeatForever(
                cc.tween(node)
                    .to(time, { position: p1 })
                    .to(time, { position: p0 })
                    .to(time, { position: p2 })
                    .to(time, { position: p0 })
            )
            .start();
    }

    /**旋转动作 */
    private rotate(node: cc.Node, time: number) {
        cc.tween(node)
            .repeatForever(
                cc.tween(node)
                    .to(time, { angle: 360 })
                    .set({ angle: 0 })
            )
            .start();
    }

    private init() {
        this.configList[0] = [
            {
                type: ELEMENTTYPE.goal,
                pos: cc.v2(900, 540),
                deg: 0,
            }
        ];
        this.configList[1] = [
            {
                type: ELEMENTTYPE.goal,
                pos: cc.v2(1200, 540),
                deg: 0,
            }
        ];
        this.configList[2] = [
            {
                type: ELEMENTTYPE.goal,
                pos: cc.v2(1200, 540),
                deg: 30,
            }
        ];
        this.configList[3] = [
            {
                type: ELEMENTTYPE.board,
                pos: cc.v2(1000, 700),
                deg: 90,
            },
            {
                type: ELEMENTTYPE.goal,
                pos: cc.v2(1500, 400),
                deg: 0,
            }
        ];
        this.configList[4] = [
            {
                type: ELEMENTTYPE.board,
                pos: cc.v2(1000, 540),
                deg: 90,
                moveFn: (node: cc.Node) => {
                    this.move(node, 90, 300, 2)
                }
            },
            {
                type: ELEMENTTYPE.goal,
                pos: cc.v2(1500, 540),
                deg: 0,
            }
        ];
        this.configList[5] = [
            {
                type: ELEMENTTYPE.board,
                pos: cc.v2(800, 700),
                deg: 90,
                rotateFn: (node: cc.Node) => {
                    this.rotate(node, 5)
                }
            },
            {
                type: ELEMENTTYPE.goal,
                pos: cc.v2(1500, 540),
                deg: 0,
            }
        ];
        this.configList[6] = [
            {
                type: ELEMENTTYPE.board,
                pos: cc.v2(800, 850),
                deg: 0,
                moveFn: (node: cc.Node) => {
                    this.move(node, 0, 300, 2);
                },
            },
            {
                type: ELEMENTTYPE.board,
                pos: cc.v2(1000, 600),
                deg: 90,
            },
            {
                type: ELEMENTTYPE.goal,
                pos: cc.v2(1400, 500),
                deg: 0,
            }
        ];
        this.configList[7] = [
            {
                type: ELEMENTTYPE.board,
                pos: cc.v2(700, 250),
                deg: 0,
                moveFn: (node: cc.Node) => {
                    this.move(node, 0, 300, 2);
                },
            },
            {
                type: ELEMENTTYPE.board,
                pos: cc.v2(850, 900),
                deg: 90,
            },
            {
                type: ELEMENTTYPE.goal,
                pos: cc.v2(1400, 300),
                deg: 0,
            }
        ];


        this.configList[8] = [
            {
                type: ELEMENTTYPE.goal,
                pos: cc.v2(1300, 540),
                deg: 0,
                moveFn: (node: cc.Node) => {
                    this.move(node, 0, 200, 3);
                },
            }
        ];
        this.configList[9] = [
            {
                type: ELEMENTTYPE.goal,
                pos: cc.v2(1300, 540),
                deg: 0,
                rotateFn: (node: cc.Node) => {
                    this.rotate(node, 6);
                },
            }
        ];
        this.configList[10] = [
            {
                type: ELEMENTTYPE.board,
                pos: cc.v2(750, 300),
                deg: 0,
                moveFn: (node: cc.Node) => {
                    this.move(node, 30, 200, 3)
                },
                rotateFn: (node: cc.Node) => {
                    this.rotate(node, 6);
                },
            },
            {
                type: ELEMENTTYPE.board,
                pos: cc.v2(1200, 850),
                deg: 90,
                moveFn: (node: cc.Node) => {
                    this.move(node, 90, 200, 2)
                }
            },
            {
                type: ELEMENTTYPE.goal,
                pos: cc.v2(1700, 540),
                deg: 0,
                moveFn: (node: cc.Node) => {
                    this.move(node, 0, 200, 3);
                },
                rotateFn: (node: cc.Node) => {
                    this.rotate(node, 6);
                },
            }
        ];
        this.configList[11] = [
            {
                type: ELEMENTTYPE.board,
                pos: cc.v2(700, 450),
                deg: 120,
            },
            {
                type: ELEMENTTYPE.board,
                pos: cc.v2(700, 900),
                deg: 30,
            },
            {
                type: ELEMENTTYPE.board,
                pos: cc.v2(1100, 250),
                deg: 90,
            },
            {
                type: ELEMENTTYPE.board,
                pos: cc.v2(1100, 900),
                deg: 90,
            },
            {
                type: ELEMENTTYPE.board,
                pos: cc.v2(1000, 700),
                deg: 90,
            },
            {
                type: ELEMENTTYPE.goal,
                pos: cc.v2(1700, 540),
                deg: 0,
                rotateFn: (node: cc.Node) => {
                    this.rotate(node, 3);
                },
            }
        ];

    }


}
