import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
import { Ball } from './Ball';
import { IBallConfig } from '../global/globalDefine';
import { EBUtils } from '../common/EBUtil';
import { ballConfigs, config } from '../global/config';
const { ccclass, property } = _decorator;

@ccclass('Space')
export class Space extends Component {

    @property(Prefab)
    ballPrefab: Prefab = null;

    @property(Node)
    spaceNode: Node = null;

    private ballList: Ball[] = [];

    start() {
        const earth = this.createBall(ballConfigs.earth);
        // const rocket = this.createBall(ballConfigs.rocket);
        // const moon = this.createBall(ballConfigs.moon);
        const mirror = this.createBall(ballConfigs.mirror);

        // earth.addAttractionBall(rocket);
        // rocket.addAttractionBall(earth);

        // earth.addAttractionBall(moon);
        // moon.addAttractionBall(earth);

        earth.addAttractionBall(mirror);
        mirror.addAttractionBall(earth);
    }

    private createBall(config: IBallConfig): Ball {
        const node = instantiate(this.ballPrefab);
        node.parent = this.spaceNode;
        const ball = node.getComponent(Ball);
        let id = 0;
        do {
            id = EBUtils.randomInt(1, 999999);
        } while (this.ballList.some(item => item.ballId === id));
        ball.init(id, config);
        this.ballList.push(ball);
        return ball;
    }
}


