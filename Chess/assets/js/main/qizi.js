let jobConfig = require('jobConfig');

cc.Class({
    extends: cc.Component,

    properties: {
        r_c: cc.SpriteFrame,
        r_m: cc.SpriteFrame,
        r_x: cc.SpriteFrame,
        r_s: cc.SpriteFrame,
        r_j: cc.SpriteFrame,
        r_p: cc.SpriteFrame,
        r_z: cc.SpriteFrame,
        b_c: cc.SpriteFrame,
        b_m: cc.SpriteFrame,
        b_x: cc.SpriteFrame,
        b_s: cc.SpriteFrame,
        b_j: cc.SpriteFrame,
        b_p: cc.SpriteFrame,
        b_z: cc.SpriteFrame,
    },



    onLoad(){
        this.id = 0;
        this.color = 0;         //棋子颜色 红1  黑2
        this.posIndexArr = [0, 0];    //位置序号
        this.unitDistanceArr = [0, 0];           //格子间距
        this.job = 0;       //兵种 

    },


    init(id, color, posIndexArr, unitDistanceArr, job){
        this.id = id;
        this.color = color;
        this.posIndexArr = posIndexArr;
        this.unitDistanceArr = unitDistanceArr;
        this.job = job;

        let img;
        if(color == 1){
            switch(job){
                case jobConfig.che: img = this.r_c; break;
                case jobConfig.ma: img = this.r_m; break;
                case jobConfig.xiang: img = this.r_x; break;
                case jobConfig.shi: img = this.r_s; break;
                case jobConfig.shuai: img = this.r_j; break;
                case jobConfig.pao: img = this.r_p; break;
                case jobConfig.zu: img = this.r_z; break;
            }
        }else{
            switch(job){
                case jobConfig.che: img = this.b_c; break;
                case jobConfig.ma: img = this.b_m; break;
                case jobConfig.xiang: img = this.b_x; break;
                case jobConfig.shi: img = this.b_s; break;
                case jobConfig.shuai: img = this.b_j; break;
                case jobConfig.pao: img = this.b_p; break;
                case jobConfig.zu: img = this.b_z; break;
            }
        }
        this.node.getComponent(cc.Sprite).spriteFrame = img;
    },

});
