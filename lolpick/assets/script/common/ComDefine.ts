export enum ECamp {
    none,
    blue,
    red
}

export enum EJob {
    none = `无`,
    top = `上`,
    jug = `野`,
    mid = `中`,
    sup = `辅`,
    adc = `下`
}

export enum EPlayerStatus {
    free,
    wait,
    pick
}

export interface IPlayer {
    id: number,
    nick: string,
    head?: number,
    camp?: ECamp,
    jobList: EJob[],
    status?: EPlayerStatus,
    score: number,
    playCount: number
    winCount: number
    winRate: number,
}

export enum EPlayerInfoAction {
    add,
    delete,
    update
}

export enum EventName {
    addPlayer = `addPlayer`,
    updatePlayer = `updatePlayer`,
    deletePlayer = `deletePlayer`
}

