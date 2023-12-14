
import Game from "../Game";
import Bullet from "../bullet/Bullet";
import BulletMgr from "../bullet/BulletMgr";
import CampMgr from "../camp/CampMgr";
import { ECAMP, GGroup, IColliderProxy, ResPath } from "../common/Global";
import Module from "../common/Module";
import Utils from "../common/Utils";
import ColliderHandler from "./ColliderHandler";
import TankData, { ITank } from "./TankData";
import TankMgr from "./TankMgr";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Tank extends cc.Component implements IColliderProxy {

    @property(cc.Node)
    pipeNode: cc.Node = null;

    @property(cc.Node)
    bodyNode: cc.Node = null;

    @property(cc.Node)
    hitSkinNode: cc.Node = null;

    @property(cc.ProgressBar)
    hpProgress: cc.ProgressBar = null;

    @property(cc.Sprite)
    hpSprite: cc.Sprite = null;

    @property(cc.Node)
    hitTargetNode: cc.Node = null;

    private isInited: boolean = false;

    public campType: ECAMP = 0;    //所属阵营
    public type: number = 1;   //车类型  
    private bulletType: number = 0;
    private tankName: string = ``;
    private fullHp: number = 0;
    private moveSpeed: number = 0;
    private damage: number = 0;
    private hitDamage: number = 0;  //tank相撞时给对方造成的伤害
    private cd: number = 0;
    private cost: number = 0;
    private shotRange: number = 0;

    private curSpeed: cc.Vec2 = cc.v2();    //当前实际速度
    private v2: cc.Vec2 = cc.v2();          //0向量
    private pipeWorldPos: cc.Vec2 = cc.v2();    //炮管世界位置
    private targetWorldPos: cc.Vec2 = cc.v2();  //瞄准目标世界位置
    private pipeDir: cc.Vec2 = cc.v2(1, 0);         //炮管方向单位向量
    private isMirror: boolean = false;      //是否为镜像坦克

    private hitTime: number = 0;    //击中时红温时长
    private searchTime: number = 0;      //搜索计时
    private lastHitTank: Tank = null;   //最后一个相撞的tank
    public isDead: boolean = false;         //已经死亡
    private isSearching: boolean = false;   //正在搜索
    private isShoting: boolean = false;     //正在射击
    private isLand: boolean = false;        //已经落地

    private _hp: number = 0;
    private get hp(): number {
        return this._hp;
    }
    private set hp(v: number) {
        this._hp = v;
        if (this.hpProgress) {
            let p = (v / this.fullHp).toFixed(2);
            this.hpProgress.progress = Number(p);
        }
    }

    /**初始化 */
    private init(type: number, data: ITank) {
        this.isInited = true;
        this.type = type;
        this.bodyNode.getComponent(ColliderHandler).init(this);
        this.bulletType = data.bulletType;
        this.tankName = data.name;
        this.moveSpeed = data.moveSpeed;
        this.damage = data.damage;
        this.cd = data.cd;
        this.cost = data.cost;
        this.shotRange = data.shotRange;
    }

    /**重置tank */
    public reset(type: number, campType: ECAMP) {
        let data = TankData.ins.get(type);
        if (!this.isInited) this.init(type, data);
        this.isLand = false;
        this.isDead = false;
        this.hitDamage = 0;
        this.hp = data.hp;
        this.campType = campType;
        this.isMirror = campType === ECAMP.enemy;
        let isMainTank = type === 0;
        if (this.isMirror) {
            this.node.x = isMainTank ? TankMgr.ins.tankBornX : TankMgr.ins.tankBornX - 200;
            this.moveSpeed = -data.moveSpeed;
            this.bodyNode.scaleX = -1;
            this.hpSprite && Utils.dynamicSprite(this.hpSprite, `${ResPath.hpSkinCommon}2`);
        } else {
            this.node.x = isMainTank ? -TankMgr.ins.tankBornX : -TankMgr.ins.tankBornX + 200;
            this.moveSpeed = data.moveSpeed;
            this.bodyNode.scaleX = 1;
            this.hpSprite && Utils.dynamicSprite(this.hpSprite, `${ResPath.hpSkinCommon}1`);
        }

        if (isMainTank) {
            this.isSearching = true;
            this.updateSpeed(0, 0);
            this.node.y = 0;
            let level = Module.get(Game).curLevel;
            this.hp = this.fullHp = data.hp + (level - 1) * 10000;   //防御塔血量每关加10000
        } else {
            this.isSearching = false;
            this.updateSpeed(0, TankMgr.ins.tankDropSpeed);
            this.node.y = TankMgr.ins.tankBornY;
            this.hp = this.fullHp = data.hp;
        }
        this.hitSkinNode.active = false;
        this.aim();
    }

    /**更新速度 */
    private updateSpeed(x: number, y: number) {
        this.curSpeed.x = x;
        this.curSpeed.y = y;
        this.node.getComponent(cc.RigidBody).linearVelocity = this.curSpeed;
    }

    /**开始射击 有cd */
    private fire() {
        if (this.isShoting) return;
        this.isShoting = true;
        this.schedule(this.shot, this.cd, cc.macro.REPEAT_FOREVER, 0.001);
    }

    private stopFire() {
        this.isShoting = false;
        this.unschedule(this.shot);
    }

    /**发射一颗子弹 */
    private shot() {
        let bullet = BulletMgr.ins.createBullet(this.bulletType);
        bullet.node.parent.convertToNodeSpaceAR(this.pipeWorldPos, bullet.pos);
        bullet.reset(this.campType, this.damage, this.pipeDir);
    }

    /**控制炮管方向 瞄准*/
    private aim(target?: cc.Node) {
        this.pipeNode.convertToWorldSpaceAR(this.v2, this.pipeWorldPos);
        if (target) {
            target.convertToWorldSpaceAR(this.v2, this.targetWorldPos);
            this.targetWorldPos.sub(this.pipeWorldPos, this.pipeDir);
            this.pipeDir.normalizeSelf();
        } else {
            this.pipeDir.x = this.isMirror ? -1 : 1;
            this.pipeDir.y = 0;
        }
        let x = this.isMirror ? -this.pipeDir.x : this.pipeDir.x;
        let rad = Math.atan2(this.pipeDir.y, x);
        this.pipeNode.angle = Utils.radToEuler(rad);
    }

    /**碰撞代理 */
    public onCollisionEnter(other: cc.Collider, self: cc.Collider) {
        if (this.isDead) return;
        let group = other.node.group;
        switch (group) {
            case GGroup.ground://落地
                if (!this.isLand) {
                    this.isLand = true;
                    this.isSearching = true;
                    this.node.y = 0;
                    this.updateSpeed(0, 0);
                }
                break;
            case GGroup.bullet: //被击中
                this.onBulletHit(other);
                break;
            case GGroup.tank: //被撞击
                this.onTankHit(other);
                break;
        }
    }

    private onBulletHit(other: cc.Collider) {
        let bullet = other.node.getComponent(Bullet);
        if (bullet.campType === this.campType) return;
        if (bullet.isDead && bullet.lastHitTank !== this) return;
        this.hp -= bullet.damage;
        if (this.hp <= 0) {
            this.hp = 0;
            this.isDead = true;
        }
        this.beHit();
    }

    private onTankHit(other: cc.Collider) {
        let tank = other.node.getComponent(ColliderHandler).proxy as Tank;
        if (tank.campType === this.campType) return;
        if (tank.isDead && tank.lastHitTank !== this) return;
        this.lastHitTank = tank;
        this.hitDamage = this.hp;
        this.hp -= tank.hitDamage || tank.hp;
        if (this.hp <= 0) {
            this.hp = 0;
            this.isDead = true;
        }
        this.beHit();
    }

    /**死亡 */
    private die() {
        this.stopAllState();
        CampMgr.ins.getCamp(this.campType).destroyTank(this);
    }

    /**显示被击中的皮肤 */
    private beHit() {
        if (!this.hitSkinNode) return;
        this.hitTime = 0;
        this.hitSkinNode.active = true;
    }

    protected update(dt: number): void {
        this.checkHitSkinNode(dt);
        this.checkSearch(dt);
    }

    /**检查击中表现 */
    private checkHitSkinNode(dt: number) {
        if (this?.hitSkinNode.active) {
            if (this.hitTime >= 0.1) {
                this.hitSkinNode.active = false;
                if (this.isDead) this.die();
            } else {
                this.hitTime += dt;
            }
        }
    }

    /**持续搜索 */
    private checkSearch(dt: number) {
        if (!this.isSearching) return;
        if (this.searchTime >= 0.1) {
            this.searchEnemy();
            this.searchTime = 0;
        } else {
            this.searchTime += dt;
        }
    }

    /**搜索射程内的敌人 */
    private searchEnemy() {
        let selfCamp = CampMgr.ins.getCamp(this.campType);
        let enemyTanks = CampMgr.ins.getCamp(selfCamp.enemyType).tankList;
        let closestEnemy: Tank = null;
        let closestLen: number = 0;
        for (let enemy of enemyTanks) {
            if (enemy.isDead) continue;
            let len = Math.abs(this.node.x - enemy.node.x);
            if (len > this.shotRange) continue;
            if (!closestEnemy || len < closestLen) {
                closestEnemy = enemy;
                closestLen = len;
            }
        }
        if (closestEnemy) {
            this.updateSpeed(0, 0);
            this.aim(closestEnemy.hitTargetNode);
            this.fire();
        } else {
            this.updateSpeed(this.moveSpeed, 0);
            this.stopFire();
        }
    }

    private stopSearch() {
        this.aim();
        this.isSearching = false;
    }

    /**停止所有状态 */
    public stopAllState() {
        this.stopSearch();
        this.stopFire();
        this.updateSpeed(0, 0);
        this.lastHitTank = null;
    }
}
