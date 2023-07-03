import { SoundPath } from "./common/Global";
import Module from "./common/Module";


const { ccclass, property } = cc._decorator;




@ccclass
export default class SoundMgr extends Module {
    @property(cc.AudioSource)
    audioSource: cc.AudioSource = null;

    @property(cc.Button)
    soundBtn: cc.Button = null;


    protected onLoad(): void {
        super.onLoad();
        this.soundBtn.node.on('click', this.switchSound, this);
    }

    private switchSound() {
        this.audioSource.mute = !this.audioSource.mute;
    }

    /**
     * 播放音效文件
     * @param path 音效路径，相对于resources
     */
    public playEffect(path: string): void {
        cc.resources.load(path, cc.AudioClip, (error, clip: cc.AudioClip) => {
            if (!error) {
                cc.audioEngine.play(clip, false, 0.5)
            }
        });
    }

}
