import Game from "./Game";
import Score from "./Score";
import SoundMgr from "./SoundMgr";
import Task from "./Task";
import { GConst, Global, MOVE_DIRECTION, ResPath, SoundPath } from "./common/Global";
import Module from "./common/Module";
import Move from "./common/Move";
import Utils from "./common/Utils";


const { ccclass, property } = cc._decorator;

/**单个格子 */
@ccclass
export default class Grid extends cc.Component {
    @property(cc.Sprite)
    face: cc.Sprite = null;

    /**格子类型 1~5*/
    public type: number = 1;
    private game: Game = null;
    private score: Score = null;
    private task: Task = null;

    /**移除之前的坐标（下标） */
    public posIndex: cc.Vec2 = cc.v2();
    public isChecked: boolean = false;

    protected onLoad(): void {
        this.addEvents();
        this.game = Module.get(Game);
        this.score = Module.get(Score);
        this.task = Module.get(Task);
    }

    private addEvents() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    }

    private onTouchEnd(e) {
        // Module.get(SoundMgr).playEffect(SoundPath.button);
        if (!this.game.canClick) return;
        this.game.check(this);
        //搜索结束后 判断相连的格子个数
        let n = this.game.validList.length;
        if (n > 1) {
            if (Global.ins.canfreshGrids) Global.ins.canfreshGrids = false;
            this.game.canClick = false;
            let a1 = 5, d = 10;
            let score = n * a1 + n * (n - 1) * d / 2;
            this.playAddScoreAni(score);
            this.task.task1Check();
            this.game.eliminate();
        } else {
            this.game.resetSearch();
        }
    }

    /**初始化 */
    public init(type: number, i: number, j: number) {
        this.type = type;
        Utils.dynamicSprite(this.face, `${ResPath.faceRootPath}ani${type}_1`);
        this.node.setPosition(97 / 2 + i * 97, 97 / 2 + j * 97);
        this.node.scale = 0;
        var action = cc.scaleTo(0.5, 1);
        this.node.runAction(action);
        this.posIndex.x = i;
        this.posIndex.y = j;
    }

    /**移动 （方向，距离） */
    public move(direction: MOVE_DIRECTION, count: number) {
        let s = this.node.width * count;
        let action: cc.Action = null;
        switch (direction) {
            case MOVE_DIRECTION.left:
                action = cc.moveBy(GConst.gridMoveTime, cc.v2(-s, 0));
                break;
            case MOVE_DIRECTION.down:
                action = cc.moveBy(GConst.gridMoveTime, cc.v2(0, -s));
                break;
        }
        this.node.runAction(action);
    }

    /**消失 */
    public disappear(): void {
        this.node.stopAllActions();
        let action = cc.scaleTo(GConst.gridDisappearTime, 0);
        this.node.runAction(action);
    }

    /**加分飘分 */
    private playAddScoreAni(score: number) {
        let node = this.game.addScoreFactory.get();
        node.parent = this.game.effectNode;
        node.getComponent(cc.Label).string = score.toString();
        let move = Move.getInstance().setParams(node, this.node, this.score.currentLabel.node, 500);
        move.run(() => {
            node.destroy();
            this.score.currentScore += score;
        });
    }

}
