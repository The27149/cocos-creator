/**职业 */
export enum EJob {
    none = `无`,
    top = `上`,
    jug = `野`,
    mid = `中`,
    sup = `辅`,
    adc = `下`
}

/**阵营 */
export enum ECamp {
    none,
    blue,
    red
}

/**玩家状态 */
export enum EPlayerStatus {
    wait,
    pick
}

/** 可编辑用户信息 */
export interface IUserEditable {
    gameNick: string,
    wxNick: string,
    head: number,
    dirtyTalk: string,
    jobList: EJob[],

}

/**用户信息  静态数据结构*/
export interface IUser extends IUserEditable{
    id: number,
    birthDay: number,
    totalGame: number,
    winGame: number,
    winRate: number,
    rankScore: number,
    fillGame: number,
    svpGame: number,
    mvpGame: number,
}

/**编辑类型 */
export enum EUserInfoEditType {
    add,
    delete,
    update
}

export enum EventName {
    addUser = `addUser`,
    updateUser = `updateUser`,
    deleteUser = `deleteUser`,
    pickPlayers = `pickPlayer`,
    resetPlayers =  `resetPlayers`,
}

