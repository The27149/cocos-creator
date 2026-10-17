import { _decorator, Component, Node, UITransform, v2, Vec2 } from 'cc';
import { config } from '../global/config';
import { EBUtils } from '../common/EBUtil';
import { globalData, globalFunc } from '../global/global';
import EBEventMgr from '../common/EBEventMgr';
import { eventName } from '../global/eventName';
import { IBallConfig } from '../global/globalDefine';
const { ccclass, property } = _decorator;

/**天体基类 */
@ccclass('Ball')
export class Ball extends Component {
    @property(Node)
    ballBg: Node = null;

    private G: number = config.G;
    private _config: IBallConfig = null;
    //定义一些重复使用的临时向量
    private _posVec: Vec2 = v2();
    private _directionVec: Vec2 = v2();
    private _deltPosVec: Vec2 = v2();
    /**唯一id */
    private _ballId: number = 0;
    public get ballId(): number {
        return this._ballId;
    }
    
	protected _mass: number = 0;
	public get mass(): number {
        return this._mass;
	}
    /**半径 */
	protected _radius: number = 0;
	public get radius(): number {
        return this._radius;
	}
    /**有引力效应的天体列表 */
    private attractionBallList: Ball[] = [];

	protected _position: Vec2 = v2();
	public get position(): Vec2 {
		return this._position;
	}
    /**合外力 */
	protected force: Vec2 = v2();
	protected a: Vec2 = v2();
	protected v: Vec2 = v2();

    protected onLoad(): void {
        EBEventMgr.ins.addEvent(eventName.changeSpaceScale, this.onChangeSpaceScale, this);
    }

    protected onDestroy(): void {
        EBEventMgr.ins.removeEvent(eventName.changeSpaceScale, this.onChangeSpaceScale, this);
    }

    /**初始化 */
    public init(id: number,config: IBallConfig) {
        if(this._ballId) return;
        this._config = config;
        this._ballId = id;
        this._mass = config.mass;
        this._radius = config.radius;
        this.updateRadiusView(); 
        if(config.initPos){
            this._position.set(config.initPos);
        }
        this.updatePositionView();
        if(config.initSpeed){
            this.v.set(config.initSpeed);
        }
    }

    public addAttractionBall(...balls: Ball[]) {
        this.attractionBallList.push(...balls);
    }

    public removeAttractionBall(...balls: Ball[]) {
        EBUtils.spliceArr(this.attractionBallList, balls);
    }


	//计算引力 返回向量
	private getForce(ball: Ball): Vec2 {
		//计算方向向量
		Vec2.subtract(this._posVec, ball.position, this.position);
		const distance = this._posVec.length();
        Vec2.normalize(this._directionVec,this._posVec);
		const val = this.G * this._mass * ball._mass / distance ** 2;
		return this._directionVec.multiplyScalar(val);
	}

    protected update(dt: number): void {
        if(!this._ballId) return;
        dt *= globalData.timeScale;
        this.force.set(0, 0);
        this.attractionBallList.forEach(ball => {
            this.force.add(this.getForce(ball));
        })
        // console.log(`${this._config.name}合外力`, this.force.x, this.force.y);
        Vec2.multiplyScalar(this.a, this.force, 1 / this._mass);
        this.v.add(this.a.multiplyScalar(dt));
        Vec2.multiplyScalar(this._deltPosVec, this.v, dt);
        this._position.add(this._deltPosVec);
        this.updatePositionView();
        // debugger;
    }

    /**更新半径 显示 */
    protected updateRadiusView() {
        let px = globalFunc.mToPx(this._radius);
        px = Math.max(px, config.minShowRadius);
        const len = px * 2;
        this.ballBg.getComponent(UITransform).setContentSize(len, len);
        this.node.getComponent(UITransform).setContentSize(len, len);
    }

    /**更新位置 显示 */
    protected updatePositionView() {
        const x = globalFunc.mToPx(this._position.x);
        const y = globalFunc.mToPx(this._position.y);
        this.node.setPosition(x, y);
    }

    /**空间分辨率修改 */
    private onChangeSpaceScale() {
        this.updateRadiusView();
        const x = globalFunc.mToPx(this._position.x);
        const y = globalFunc.mToPx(this._position.y);
        this.node.setPosition(x, y);
    }
}


