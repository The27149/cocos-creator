
//创建音频环境实例
let audioCTX = new window.AudioContext();

cc.Class({
    extends: cc.Component,

    properties: {

        white: cc.Node,         //白键盒
        black: cc.Node,         //黑键盒
        keyPre: cc.Prefab,      //白键预制
        blackKeyPre: cc.Prefab, //黑键预制 
    },

    // 定义一些常量
    ctor() {
        this.lastKeyCode = undefined;       //最后一个按下的键盘码
        
        //let freqArr = [196.00, 220.00, 246.94, 261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25, 587.33, 659.25, 698.46, 783.99, 880.00, 987.77, 1046.50];
        //定义白键频率
        this.keyMap = new Map([
            ['default', [0, '0','0']],

            [cc.KEY.tab, [130.81, 'c','tab']],      //小字组c
            [cc.KEY.q, [146.83, 'd','q']],
            [cc.KEY.w, [164.81, 'e','w']],
            [cc.KEY.e, [174.61, 'f','e']],
            [cc.KEY.r, [195.99, 'g','r']],
            [cc.KEY.t, [220.00, 'a','t']],
            [cc.KEY.y, [246.94, 'b','y']],
            [cc.KEY.u, [261.62, 'c1','u']],     //小字一组
            [cc.KEY.i, [293.66, 'd1','i']],
            [cc.KEY.o, [329.62, 'e1','o']],
            [cc.KEY.p, [349.22, 'f1','p']],

            [cc.KEY.z, [391.99, 'g1','z']],
            [cc.KEY.x, [440.00, 'a1','x']],
            [cc.KEY.c, [493.88, 'b1','c']],
            [cc.KEY.v, [523.25, 'c2','v']],      //小字二组
            [cc.KEY.b, [587.33, 'd2','b']],
            [cc.KEY.n, [659.25, 'e2','n']],
            [cc.KEY.m, [698.45, 'f2','m']],
            [cc.KEY[','], [783.99, 'g2',',']],
            [cc.KEY['.'], [880.00, 'a2','.']],
            [cc.KEY.forwardslash, [987.76, 'b2','/']],
        ]);

        //定义黑键频率 空键用10000以上表示
        this.blackKeyMap = new Map([
            ['default', [0, '0','0']],

            [cc.KEY[1], [138.59, 'c#','1']],       //29号键
            [cc.KEY[2], [155.56, 'd#','2']],
            [10000, undefined],
            [cc.KEY[4], [184.99, 'f#','4']],
            [cc.KEY[5], [207.65, 'g#','5']],
            [cc.KEY[6], [233.08, 'a#','6']],
            [10001, undefined],
            [cc.KEY[8], [277.18, 'c1#','8']],
            [cc.KEY[9], [311.12, 'd1#','9']],
            [10002, undefined],
            [cc.KEY.dash, [369.99, 'f1#','-']],
            [cc.KEY.s, [415.30, 'g1#','s']],
            [cc.KEY.d, [466.16, 'a1#','d']],
            [10003, undefined],
            [cc.KEY.g, [554.36, 'c2#','g']],
            [cc.KEY.h, [622.25, 'd2#','h']],
            [10004, undefined],
            [cc.KEY.k, [739.98, 'f2#','k']],
            [cc.KEY.l, [830.60, 'g2#','l']],
            [cc.KEY[';'], [932.32, 'a2#',';']], 
        ]);
    },

    onLoad () {
        this.init();
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    onDestroy(){
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    //界面初始化 生成黑白键
    init(){
        for(let item of this.keyMap.entries()){
            if(item[0] == 'default') continue;
            let val = item[1];

            let key = cc.instantiate(this.keyPre);
            this.white.addChild(key);
            //键盘码与视图键位绑定
            val[3] = key;
            //给音名赋值
            key.getChildByName('name').getComponent(cc.Label).string = val[1];
            //给键位赋值
            key.getChildByName('key').getComponent(cc.Label).string = val[2];

            let data = {freq : val[0]};
            key.attr(data);
            key.on('mouseenter', this.onMouseEvent, this);
        }

        for(let item of this.blackKeyMap.entries()){
            if(item[0] == 'default') continue;
            let val = item[1];

            let key = cc.instantiate(this.blackKeyPre);
            this.black.addChild(key);
            //如果是占位的空键 key消失并且无法点击
            if(item[0] >= 10000){
                key.opacity = 0;
                key.removeComponent(cc.Button);
                continue;
            }

            //键盘码与视图键位绑定
            val[3] = key;
            //给音名赋值
            // key.getChildByName('name').getComponent(cc.Label).string = val[1];
            key.getChildByName('name').getComponent(cc.Label).string = '';
            //给键位赋值
            key.getChildByName('key').getComponent(cc.Label).string = val[2];

            let data = {freq : val[0]};
            key.attr(data);
            key.on('mouseenter', this.onMouseEvent, this);
        }
    },

    //鼠标事件
    onMouseEvent(e){
        let freq = e.target.freq;
        this.play(freq);
    },

    //播放声音
    play(freq){
        let oscillator = audioCTX.createOscillator();
        let gainNode = audioCTX.createGain();
        let destination = audioCTX.destination;

        oscillator.type = 'sine';
        oscillator.frequency.value = freq;
        oscillator.connect(gainNode);
        gainNode.connect(destination);

        let currentTime = audioCTX.currentTime;
        gainNode.gain.setValueAtTime(0, currentTime);
        gainNode.gain.linearRampToValueAtTime(1, currentTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.01, currentTime + 0.5);


        oscillator.start(currentTime);
        oscillator.stop(currentTime + 0.5);
    },

    //键盘事件
    onKeyDown (event) {
        //持续按下同一个键不会一直播放
        if(this.lastKeyCode !== undefined && this.lastKeyCode === event.keyCode) return;
        this.lastKeyCode = event.keyCode;
        let val = this.keyMap.get(event.keyCode) || this.blackKeyMap.get(event.keyCode) || this.keyMap.get('default');
        //如果有对应按钮 按钮状态要变化
        let key = val[3];
        if(key){
            key.color = key.getComponent(cc.Button).pressedColor;
        }
        this.play(val[0]);
    },

    onKeyUp(event){
        this.lastKeyCode = undefined;
        let val = this.keyMap.get(event.keyCode) || this.blackKeyMap.get(event.keyCode) || this.keyMap.get('default');
        //如果有对应按钮 按钮状态要变化
        let key = val[3];
        if(key){
            key.color = key.getComponent(cc.Button).normalColor;
        }
    },
});
