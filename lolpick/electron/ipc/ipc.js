// 方向	                发送方	            接收方
// 渲染 → 主（单向）	ipcRenderer.send	ipcMain.on
// 渲染 → 主（双向）	ipcRenderer.invoke	ipcMain.handle
// 主 → 渲染（单向）	webContents.send	ipcRenderer.on
// 主 → 渲染（双向）	webContents.send	ipcRenderer.on 收到后 ipcRenderer.send 回传，主进程 ipcMain.once 收结果

const ipcName = require('./ipcName');
const { ipcMain } = require("electron");
//store模块 在v9.0.0开始 只支持esmodule方式导入 所以这里require要保证当前安装的store版本不能超过v9.0.0
const Store = require('electron-store');

class Ipc {
    constructor() { 
    }
    maps = {
        [ipcName.dataSave]: this.onDataSave.bind(this),
        [ipcName.dataLoad]: this.onDataLoad.bind(this),
    };

    store = null;

    init() {
        this.store = new Store();
        Object.entries(this.maps).forEach(([event, fn]) => {
            ipcMain.handle(event, fn)
        })
    }

    //保存数据
    onDataSave(event, data) {
        this.store.set('data', data);
        return null;
    }

    //加载数据
    onDataLoad() {
        return this.store.get('data', null);
    }
}

module.exports = new Ipc();