const { app, BrowserWindow } = require('electron');

let mainWindow = null;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    minWidth: 800,
    minHeight: 600,
    show: false
  });

  mainWindow.loadURL('https://frontendmasters.com');

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });
});