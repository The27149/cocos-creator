const { contextBridge, ipcRenderer } = require("electron");
//preload的沙箱模式只能require进一些内置模块 无法导入自定义的模块  
//所以这里重新定义一下  需要和主进程监听的名称一致
const ipcName = {
    dataSave: 'data-save',
    dataLoad: 'data-load',
}

//渲染进程发 主进程收
contextBridge.exposeInMainWorld('mainApi', {
    saveData: (data) => ipcRenderer.invoke(ipcName.dataSave, data),
    loadData: () => ipcRenderer.invoke(ipcName.dataLoad)
})