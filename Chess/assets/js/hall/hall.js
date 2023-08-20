
let global = require('global');
cc.Class({
    extends: cc.Component,

    properties: {
    },

    //人机模式
    clickMachine() {
        global.mode = 2;
        cc.director.loadScene("main");
        
    },

    //人人模式
    clickHuman() {
        global.mode = 1;
        cc.director.loadScene("main");

   },

});
