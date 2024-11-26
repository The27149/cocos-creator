import { _decorator, Component, Label, Sprite } from 'cc';
import { IPlayer } from '../common/ComDefine';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {

    @property(Label)
    nickLabel: Label = null;

    @property(Sprite)
    headSprite: Sprite = null;


    private data: IPlayer = null;

    public init(data: IPlayer) {
        this.data = data;
        this.nickLabel.string = `${data.nick}#${data.id}`;
    }
}


