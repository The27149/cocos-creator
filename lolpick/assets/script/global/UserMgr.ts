import { EJob, EventName, IUser, IUserEditable } from "../common/ComDefine";
import EBEventMgr from "../common/EBEventMgr";
import { EBUtils } from "../common/EBUtil";
import { Electron } from "../platform/electron";

/**用户管理  全局唯一 */
export class UserMgr {
    private constructor() { };
    private static _ins: UserMgr = null;
    public static get ins() {
        if (!this._ins) {
            this._ins = new UserMgr();
        }
        return this._ins;
    }

    private _userList: IUser[] = [];
    public get userList(): IUser[] {
        return this._userList;
    }

    //test
    public testAdd(){
        for(let i = 0; i < 10; i++) {
            const idx = i + 1;
            const jobArr = [EJob.top,EJob.jug,EJob.mid,EJob.adc,EJob.sup];
            const info: IUserEditable = {
                gameNick: `游戏名${idx}`,
                wxNick: `微信名${idx}`,
                head: 0,
                dirtyTalk: "",
                jobList: EBUtils.randomItemOfArr(jobArr, 2),
            }
            this.addUser(info);
        }
    }


    /**添加新用户 */
    public addUser(userEditable: IUserEditable): boolean{
        const user: IUser = {
            ...userEditable,
             id: 0,
            birthDay: 0,
            totalGame: 0,
            winGame: 0,
            winRate: 0,
            rankScore: 1000,
            fillGame: 0,
            svpGame: 0,
            mvpGame: 0,
        };
        //查重
        let id = 0;
        do {
           id = Number(EBUtils.randomInt(100000, 999999)); 
        } while (this._userList.find(item => item.id == id));
        user.id = id;
        user.birthDay = Date.now();
        //添加用户
        this._userList.push(user);
        EBEventMgr.ins.raiseEvent(EventName.addUser, user);
        this.saveData();
        return true;
    }

    /**更新用户 */
    public updateUser(id: number, userInfo: IUserEditable | IUser){
        const user = this._userList.find((item) => item.id == id);
        if(!user) return;
        Object.assign(user, userInfo);
        EBEventMgr.ins.raiseEvent(EventName.updateUser, user);
        this.saveData();
    }

    /**删除用户 */
    public deleteUser(id: number){
        let index = this._userList.findIndex((item) => item.id == id);
        if(index == -1) return;
        const user = this._userList.splice(index, 1)[0];
        EBEventMgr.ins.raiseEvent(EventName.deleteUser, user);
        this.saveData();
    }

    private async saveData() {
        await Electron.ins.saveData(this.userList);
    }

    public async loadData() {
        const data = await Electron.ins.loadData();
        if(data) {
            this._userList = data;
        }
    }
}