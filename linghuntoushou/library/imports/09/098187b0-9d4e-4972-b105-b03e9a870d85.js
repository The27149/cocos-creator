"use strict";
cc._RF.push(module, '09818ewnU5JcrEFsD6ahw2F', 'SoundMgr');
// script/SoundMgr.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Global_1 = require("./common/Global");
var Module_1 = require("./common/Module");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SoundMgr = /** @class */ (function (_super) {
    __extends(SoundMgr, _super);
    function SoundMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.audioSource = null;
        _this.soundBtn = null;
        _this.muteNode = null;
        _this.notMuteNode = null;
        /**缓存声音资源 */
        _this.clips = new Map();
        return _this;
    }
    SoundMgr.prototype.onLoad = function () {
        this.soundBtn.node.on('click', this.switchSound, this);
    };
    SoundMgr.prototype.switchSound = function () {
        this.playBtnSound();
        var isMute = this.audioSource.mute = !this.audioSource.mute;
        if (this.muteNode)
            this.muteNode.active = isMute;
        if (this.notMuteNode)
            this.notMuteNode.active = !isMute;
    };
    /**
     * 播放音效文件
     * @param path 音效路径，相对于resources
     */
    SoundMgr.prototype.playEffect = function (path) {
        var _this = this;
        var clip = this.clips.get(path);
        if (clip)
            cc.audioEngine.play(clip, false, 0.5);
        else {
            cc.resources.load(path, cc.AudioClip, function (error, clip) {
                if (!error) {
                    _this.clips.set(path, clip);
                    cc.audioEngine.play(clip, false, 0.5);
                }
            });
        }
    };
    SoundMgr.prototype.playBtnSound = function () {
        this.playEffect(Global_1.SoundPath.button);
    };
    __decorate([
        property(cc.AudioSource)
    ], SoundMgr.prototype, "audioSource", void 0);
    __decorate([
        property(cc.Button)
    ], SoundMgr.prototype, "soundBtn", void 0);
    __decorate([
        property(cc.Node)
    ], SoundMgr.prototype, "muteNode", void 0);
    __decorate([
        property(cc.Node)
    ], SoundMgr.prototype, "notMuteNode", void 0);
    SoundMgr = __decorate([
        ccclass
    ], SoundMgr);
    return SoundMgr;
}(Module_1.default));
exports.default = SoundMgr;

cc._RF.pop();