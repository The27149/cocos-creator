const { app, BrowserWindow } = require("electron");
const path = require('path');
const ipc  = require("./ipc/ipc");

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1920,
        height: 1080,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            contextIsolation: true,
            nodeIntegration: false,
        }
    })
    mainWindow.loadFile('./web-mobile/index.html');
    mainWindow.removeMenu();
    // mainWindow.webContents.openDevTools();
    ipc.init();
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
    app.quit();
})