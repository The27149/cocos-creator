
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/SoundMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxTb3VuZE1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBNEM7QUFDNUMsMENBQXFDO0FBRy9CLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBTTVDO0lBQXNDLDRCQUFNO0lBQTVDO1FBQUEscUVBZ0RDO1FBOUNHLGlCQUFXLEdBQW1CLElBQUksQ0FBQztRQUduQyxjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRzNCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsWUFBWTtRQUNKLFdBQUssR0FBOEIsSUFBSSxHQUFHLEVBQUUsQ0FBQzs7SUFrQ3pELENBQUM7SUFoQ2EseUJBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVPLDhCQUFXLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDNUQsSUFBSSxJQUFJLENBQUMsUUFBUTtZQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNqRCxJQUFJLElBQUksQ0FBQyxXQUFXO1lBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDNUQsQ0FBQztJQUVEOzs7T0FHRztJQUNJLDZCQUFVLEdBQWpCLFVBQWtCLElBQVk7UUFBOUIsaUJBV0M7UUFWRyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxJQUFJLElBQUk7WUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQzNDO1lBQ0QsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBQyxLQUFLLEVBQUUsSUFBa0I7Z0JBQzVELElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQ1IsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUMzQixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUN6QztZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRU0sK0JBQVksR0FBbkI7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQTVDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO2lEQUNVO0lBR25DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OENBQ087SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNVO0lBWFgsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWdENUI7SUFBRCxlQUFDO0NBaERELEFBZ0RDLENBaERxQyxnQkFBTSxHQWdEM0M7a0JBaERvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU291bmRQYXRoIH0gZnJvbSBcIi4vY29tbW9uL0dsb2JhbFwiO1xyXG5pbXBvcnQgTW9kdWxlIGZyb20gXCIuL2NvbW1vbi9Nb2R1bGVcIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuXHJcblxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU291bmRNZ3IgZXh0ZW5kcyBNb2R1bGUge1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgYXVkaW9Tb3VyY2U6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgc291bmRCdG46IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtdXRlTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBub3RNdXRlTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLyoq57yT5a2Y5aOw6Z+z6LWE5rqQICovXHJcbiAgICBwcml2YXRlIGNsaXBzOiBNYXA8c3RyaW5nLCBjYy5BdWRpb0NsaXA+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zb3VuZEJ0bi5ub2RlLm9uKCdjbGljaycsIHRoaXMuc3dpdGNoU291bmQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3dpdGNoU291bmQoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5QnRuU291bmQoKTtcclxuICAgICAgICBsZXQgaXNNdXRlID0gdGhpcy5hdWRpb1NvdXJjZS5tdXRlID0gIXRoaXMuYXVkaW9Tb3VyY2UubXV0ZTtcclxuICAgICAgICBpZiAodGhpcy5tdXRlTm9kZSkgdGhpcy5tdXRlTm9kZS5hY3RpdmUgPSBpc011dGU7XHJcbiAgICAgICAgaWYgKHRoaXMubm90TXV0ZU5vZGUpIHRoaXMubm90TXV0ZU5vZGUuYWN0aXZlID0gIWlzTXV0ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaSreaUvumfs+aViOaWh+S7tlxyXG4gICAgICogQHBhcmFtIHBhdGgg6Z+z5pWI6Lev5b6E77yM55u45a+55LqOcmVzb3VyY2VzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwbGF5RWZmZWN0KHBhdGg6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGxldCBjbGlwID0gdGhpcy5jbGlwcy5nZXQocGF0aCk7XHJcbiAgICAgICAgaWYgKGNsaXApIGNjLmF1ZGlvRW5naW5lLnBsYXkoY2xpcCwgZmFsc2UsIDAuNSk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHBhdGgsIGNjLkF1ZGlvQ2xpcCwgKGVycm9yLCBjbGlwOiBjYy5BdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaXBzLnNldChwYXRoLCBjbGlwKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KGNsaXAsIGZhbHNlLCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBsYXlCdG5Tb3VuZCgpIHtcclxuICAgICAgICB0aGlzLnBsYXlFZmZlY3QoU291bmRQYXRoLmJ1dHRvbik7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==