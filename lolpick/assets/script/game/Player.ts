import { _decorator, Component } from 'cc';
import { ECamp, EJob } from '../common/ComDefine';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {


    private camp: ECamp = ECamp.none;
    private job: EJob = EJob.none;


    start() {

    }

    update(deltaTime: number) {

    }
}


