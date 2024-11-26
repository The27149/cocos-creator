import { IPlayer } from "./ComDefine";

export class Server {
    private constructor() { };
    private static _ins: Server = null;
    public static get ins() {
        if (!this._ins) {
            this._ins = new Server();
        }
        return this._ins;
    }

    ////////////////////模拟服务器收发消息///////////////////////
    //处理请求
    public req() {

    }

    //响应
    public resp() {

    }

    public addPlayerReq(playerInfo: IPlayer) {

    }

    public deletePlayer(playerId: number) {

    }

    public updatePlayer(plyerInfo: IPlayer) {

    }
}


