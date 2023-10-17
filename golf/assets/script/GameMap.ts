import Ball from "./Ball";
import Game from "./Game";
import { Global, NodeGroup, ResPath } from "./common/Global";
import Module from "./common/Module";
import Utils from "./common/Utils";

const { ccclass, property } = cc._decorator;

//每个地图预制都会绑定的脚本 不用拖拽属性以免维护困难
@ccclass
export default class GameMap extends cc.Component {

    private bordersNode: cc.Node = null;
    private holesNode: cc.Node = null;
    private ballsNode: cc.Node = null;
    private blocksNode: cc.Node = null;
    private brokensNode: cc.Node = null;
    private v10: cc.Vec2 = cc.v2(1, 0);

    protected onLoad(): void {
        this.bordersNode = this.node.getChildByName(`borders`);
        this.holesNode = this.node.getChildByName(`holes`);
        this.ballsNode = this.node.getChildByName(`balls`);
        this.blocksNode = this.node.getChildByName(`blocks`);
        this.brokensNode = this.node.getChildByName(`brokens`);
        //初始化地图中的各种元素
        this.initBorders();
        this.initHoles();
        this.initBalls();
        this.initBlocks();
        this.initBrokens();
    }

    /**边框元素 */
    private async initBorders() {
        this.bordersNode.removeAllChildren();
        let borderPre = await Utils.dynamicPrefab(`${ResPath.propPreCommon}border`);
        if (!this?.bordersNode?.isValid) return;
        let points = this.bordersNode.getComponent(cc.PolygonCollider).points;
        let graph = this.bordersNode.getComponent(cc.Graphics);
        graph.clear();
        for (let i = 0; i < points.length; i++) {
            let point = points[i];
            let nextPoint: cc.Vec2 = points[i + 1] || points[0];
            let border = cc.instantiate(borderPre);
            border.parent = this.bordersNode;
            border.setPosition(point);
            let vec = nextPoint.sub(point);
            let dir = vec.signAngle(this.v10);
            dir = Utils.radToEuler(dir);
            border.angle = -dir;
            // border.width = vec.len();
            border.group = NodeGroup.prop;
            // let collider = border.getComponent(cc.PhysicsBoxCollider);
            // collider.size.width = border.width;
            // collider.offset.x = border.width / 2;
            // collider.size = cc.size(border.width, border.height)
            // collider.offset = cc.v2(border.width / 2, collider.offset.y);
            border.scaleX = vec.len();
            if (i === 0) graph.moveTo(point.x, point.y);
            else graph.lineTo(point.x, point.y);
        }
        graph.close();
        graph.fill();
    }

    /**球洞元素 */
    private async initHoles() {
        let holePre = await Utils.dynamicPrefab(`${ResPath.propPreCommon}hole`);
        if (!this?.holesNode?.isValid) return;
        let children = this.holesNode.children;
        for (let i = 0; i < children.length; i++) {
            let seat = children[i];
            seat.removeComponent(cc.Sprite);
            seat.removeAllChildren();
            let hole = cc.instantiate(holePre);
            hole.parent = seat;
            hole.getChildByName(`core`).attr({ isHole: true, holeType: i + 1 });        //球洞与其他道具区分标记
            let path = `${ResPath.flagFrameCommon}${i}`;
            Utils.dynamicSprite(hole.getChildByName(`flag`), path);
        }
    }

    /**球元素 */
    private async initBalls() {
        let ballPre = await Utils.dynamicPrefab(`${ResPath.propPreCommon}ball`);
        if (!this?.ballsNode?.isValid) return;
        let children = this.ballsNode.children;
        let game = Module.get(Game);
        for (let i = 0; i < children.length; i++) {
            let seat = children[i];
            seat.removeComponent(cc.Sprite);
            seat.removeAllChildren();
            let node = cc.instantiate(ballPre);
            node.parent = seat;
            let ball = node.getComponent(Ball);
            ball.reset(Global.ins.ballsColor[i]);
            node.attr({ ballType: i + 1 });
            game.activeBalls.push(ball);
        }
    }

    /**实心障碍元素 */
    private async initBlocks() {
        // let blockPre = await Utils.dynamicPrefab(`${ResPath.propPreCommon}block`);
        // if (!this?.brokensNode?.isValid) return;
        // let children = this.brokensNode?.children;
        // if (!children) return;
        // for (let i = 0; i < children.length; i++) {
        //     let seat = children[i];
        //     seat.removeComponent(cc.Sprite);
        //     seat.removeAllChildren();
        //     let broken = cc.instantiate(brokenPre);
        //     broken.parent = seat;
        // }
    }

    /**电锯元素 */
    private async initBrokens() {
        let brokenPre = await Utils.dynamicPrefab(`${ResPath.propPreCommon}broken`);
        if (!this?.brokensNode?.isValid) return;
        let children = this.brokensNode?.children;
        if (!children) return;
        for (let i = 0; i < children.length; i++) {
            let seat = children[i];
            seat.removeComponent(cc.Sprite);
            seat.removeAllChildren();
            let broken = cc.instantiate(brokenPre);
            broken.parent = seat;
            broken.attr({ isBroken: true });        //电锯与其他道具区分标记
        }
    }
}
