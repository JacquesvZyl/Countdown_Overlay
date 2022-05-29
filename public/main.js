// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain } = require("electron");
const isDev = require("electron-is-dev");

const Store = require("electron-store");

const localStore = new Store({
  data: {
    color: "#000000",
    bgColor: null,
    size: null,
    notification: null,
    time: null,
  },
});

const ipc = ipcMain;

const path = require("path");

const unhandled = require("electron-unhandled");

unhandled({
  logger: () => {
    console.error();
  },
  showDialog: true,
  reportButton: (error) => {
    console.log("Report Button Initialized");
  },
});

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    height: 200,
    width: 300,
    maxHeight: 800,
    maxWidth: 800,
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
  mainWindow.setTitle("Timer Overlay");

  // and load the index.html of the app.
  const prodUrl = {
    pathname: path.join(__dirname, "/../build/index.html"),
    protocol: "file:",
    slashes: true,
  };
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  ///CLOSE WINDOW
  ipc.on("close-btn", () => {
    mainWindow.close();
  });

  //MINIMIZE WINDOW
  ipc.on("minimize-btn", () => {
    mainWindow.minimize();
  });

  ipc.on("saveContent", (e, key, value) => {
    value ? localStore.set(key, value) : localStore.set(key, null);
  });
  ipc.on("deleteContent", (e, key) => {
    localStore.delete(key);
  });

  ipcMain.handle("loadContent", (event, key) => {
    const data = localStore.get(key);
    if (!data) return null;
    return data;
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
