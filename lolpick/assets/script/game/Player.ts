import { _decorator, Component } from 'cc';
import { EnumCamp, EnumJob } from '../common/ComDefine';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {


    private camp: EnumCamp = EnumCamp.none;
    private job: EnumJob = EnumJob.none;


    start() {

    }

    update(deltaTime: number) {

    }
}


