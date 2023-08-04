import { SoundPath } from "./common/Global";
import Module from "./common/Module";


const { ccclass, property } = cc._decorator;




@ccclass
export default class SoundMgr extends Module {
    @property(cc.AudioSource)
    audioSource: cc.AudioSource = null;

    @property(cc.Button)
    soundBtn: cc.Button = null;

    /**缓存声音资源 */
    private clips: Map<string, cc.AudioClip> = new Map();

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
        let clip = this.clips.get(path);
        if (clip) cc.audioEngine.play(clip, false, 0.5);
        else {
            cc.resources.load(path, cc.AudioClip, (error, clip: cc.AudioClip) => {
                if (!error) {
                    this.clips.set(path, clip);
                    cc.audioEngine.play(clip, false, 0.5);
                }
            });
        }
    }

}
