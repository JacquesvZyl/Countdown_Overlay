const { ipcRenderer } = window.require("electron");
const ipc = ipcRenderer;

export function closeApp() {
  ipc.send("close-btn", true);
}
export function minimizeApp() {
  ipc.send("minimize-btn", true);
}
export function settings() {
  ipc.send("settings-btn", true);
}
