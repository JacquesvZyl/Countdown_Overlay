// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain } = require("electron");
const ipc = ipcMain;

const path = require("path");

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 200,
    height: 150,
    maxHeight: 150,
    maxWidth: 200,
    transparent: true,
    frame: false,
    autoHideMenuBar: true,
    webPreferences: {
      //preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.setAlwaysOnTop(true, "screen");

  // and load the index.html of the app.
  mainWindow.loadURL("http://localhost:3000/");

  ///CLOSE WINDOW
  ipc.on("close-btn", () => {
    console.log("clicked");
    mainWindow.close();
  });

  //MINIMIZE WINDOW
  ipc.on("minimize-btn", () => {
    mainWindow.minimize();
  });

  //SETTINGS WINDOW
  ipc.on("settings-btn", () => {
    let settingsWindow = new BrowserWindow({
      parent: mainWindow,
      width: 600,
      height: 600,
      transparent: false,
      frame: true,
      autoHideMenuBar: false,
      webPreferences: {
        //preload: path.join(__dirname, "preload.js"),
        nodeIntegration: true,
        contextIsolation: false,
      },
    });

    settingsWindow.loadURL("http://localhost:3000/settings");
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

app.on("close-btn", () => {
  app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
