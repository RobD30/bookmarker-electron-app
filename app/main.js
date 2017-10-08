const { app, BrowserWindow } = require('electron');

let mainWindow = null;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 400,
        height: 600,
        show: false
    });

    mainWindow.once('ready-to-show', () => {
        main.window.show(true);
    });

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});