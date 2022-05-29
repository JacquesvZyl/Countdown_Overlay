import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SettingsHeader from "./components/settingsHeader/SettingsHeader.component";
import SettingsWindow from "./components/settingsWindow/SettingsWindow.component";
import Stopwatch from "./components/stopwatch/Stopwatch.component";
import { loadData } from "./helperFunctions/electron";
import { setCurrentBgColor, setCurrentColor } from "./state/colorSlice";
import { setNotification } from "./state/notificationSlice";
import { setStateSize } from "./state/sizeSlice";
import { setTime } from "./state/timerSlice";

function App() {
  const dispatch = useDispatch();
  const [isSettingsOpen, setSettings] = useState(false);
  const stateColor = useSelector((state) => state.color.color);
  const stateBgColor = useSelector((state) => state.color.bgColor);

  useEffect(() => {
    async function getLocalStorageData() {
      //const color = await loadData("color");
      const data = await loadData("data");

      if (data) {
        dispatch(setCurrentColor(data.color));
        dispatch(setCurrentBgColor(data.bgColor));
        dispatch(setStateSize(data.size));
        dispatch(setTime(data.time));
        dispatch(setNotification(data.notification));
      }
    }

    getLocalStorageData();
  }, [dispatch]);

  return (
    <div
      className="App"
      style={{
        color: stateColor,
        border: `2px solid ${stateColor}`,
        overflowX: "clip",
        overflowY: isSettingsOpen ? "visible" : "hidden",
        height: "100vh",
        width: "100vw",
        position: "fixed",
        backgroundColor: stateBgColor ? stateBgColor : "transparent",
      }}
    >
      <SettingsHeader
        setSettings={setSettings}
        isSettingsOpen={isSettingsOpen}
      />

      {!isSettingsOpen ? <Stopwatch /> : <SettingsWindow />}
    </div>
  );
}

export default App;
