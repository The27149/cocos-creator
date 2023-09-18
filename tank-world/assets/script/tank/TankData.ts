

const { ccclass, property } = cc._decorator;

export interface ITank {
    type: number;       //tank类型
    bulletType: number; //子弹类型
    name: string;       //名称
    nick?: string;       //名称标识
    hp: number;         //血量
    moveSpeed: number;  //移速绝对值
    damage: number;     //子弹伤害
    hitDamage?: number;  //tank撞击伤害 (废弃)
    cd: number;         //发射间隔
    cost: number;       //价格
    shotRange: number; //射程
}

@ccclass
export default class TankData {

    private static _ins: TankData = null;
    public static get ins(): TankData {
        if (!this._ins) this._ins = new TankData();
        this._ins.init();
        return this._ins;
    }
    private config: ITank[];

    public get(type: number) {
        return this.config.find(item => item.type === type);
    }

    private init() {
        this.config = [
            {
                type: 0,
                bulletType: 0,
                name: `Home`,
                nick: `防御塔`,
                hp: 50000,
                moveSpeed: 0,
                damage: 1000,
                cd: .5,
                cost: 5,
                shotRange: 700,
            },
            {
                type: 1,
                bulletType: 0,
                name: `Armor`,
                nick: `装甲`,
                hp: 30000,
                moveSpeed: 200,
                damage: 300,
                cd: 1.5,
                cost: 6,
                shotRange: 500,
            },
            {
                type: 2,
                bulletType: 0,
                name: `Artillery`,
                nick: `火炮`,
                hp: 5000,
                moveSpeed: 150,
                damage: 2500,
                cd: 1.8,
                cost: 8,
                shotRange: 1300,
            },
            {
                type: 3,
                bulletType: 0,
                name: `Blocker`,
                nick: `阻塞者`,
                hp: 15000,
                moveSpeed: 500,
                damage: 1000,
                cd: .8,
                cost: 5,
                shotRange: 600,
            },
            {
                type: 4,
                bulletType: 0,
                name: `oldBrother`,
                nick: `大哥`,
                hp: 20000,
                moveSpeed: 300,
                damage: 1500,
                cd: .8,
                cost: 12,
                shotRange: 900,
            },
            {
                type: 5,
                bulletType: 0,
                name: `Energy`,
                nick: `普通车`,
                hp: 10000,
                moveSpeed: 350,
                damage: 800,
                cd: .5,
                cost: 4,
                shotRange: 1000,
            },
            {
                type: 6,
                bulletType: 0,
                name: `Furious`,
                nick: `狂怒者`,
                hp: 8000,
                moveSpeed: 500,
                damage: 500,
                cd: .3,
                cost: 3,
                shotRange: 600,
            },
            {
                type: 7,
                bulletType: 0,
                name: `petardier`,
                nick: `爆破者`,
                hp: 5000,
                moveSpeed: 700,
                damage: 0,
                cd: 10,
                cost: 9,
                shotRange: 0,
            },

        ];
    }

}
