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
export function saveLocalContent(key, data) {
  ipc.send("saveContent", key, data);
}

export async function loadData(key) {
  const resp = await ipc.invoke("loadContent", key);
  return resp;
}
