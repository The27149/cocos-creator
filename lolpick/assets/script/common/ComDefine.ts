export enum EnumCamp {
    none,
    blue,
    red
}

export enum EnumJob {
    none,
    top,
    jug,
    mid,
    sup,
    adc
}

export enum EnumPlayerStatus {
    free,
    wait,
    pick
}

export interface IPlayer {
    nick: string,
    camp: EnumCamp,
    job: EnumJob,
    status: EnumPlayerStatus,
    score: number
}

