let global = require('global');
let jobConfig = require('jobConfig');
let qiziConfig = require('qiziConfig');


cc.Class({
    extends: cc.Component,

    properties: {
        qiziPre: cc.Prefab,
        qiziBox: cc.Node,
    },


    onLoad () {
        this.unitDistance_x = this.qiziBox.width / global.col;
        this.unitDistance_y = this.qiziBox.height / global.row;

        this.init();
        this.bindEvent();

    },

    init(){
        let config = qiziConfig.qizi;
        let len = config.length;

        for(let j = 0; j < 2; j++){
            let color;
           
            if(global.sideMode == 1){   //红色在下
                color = (j == 0) ? 1 : 2;
            }else if(global.sideMode == 2){  //黑色在下
                color = (j == 0) ? 2 : 1;
            }
            
            for(let i = 0; i < len; i++){
                let qizi = cc.instantiate(this.qiziPre);
                let id_x = config[i].pos[0],
                    id_y = config[i].pos[1];
                if(j == 1){
                    id_x = global.col - id_x;
                    id_y = global.row - id_y;
                }

                let pos_x = this.unitDistance_x * id_x;
                let pos_y = this.unitDistance_y * id_y;
                qizi.setPosition(pos_x, pos_y);
                this.qiziBox.addChild(qizi);

                let id = (j + 1) * (i + 1);
                let posIndexArr = config[i].pos;
                let unitDistanceArr = [this.unitDistance_x, this.unitDistance_y];
                qizi.getComponent('qizi').init(id, color, posIndexArr, unitDistanceArr, config[i].job)
            }
        }
    },

    bindEvent(){
        this.qiziBox.on(cc.Node.EventType.TOUCH_END, this.onPlaceOver,this);
    },

    //落子后
    onPlaceOver(e){
        console.log('落子事件：',e);
        console.log(e.getLocation());
        let pos = this.qiziBox.convertToNodeSpaceAR(e.getLocation());
        console.log(pos);

        
    },


});
