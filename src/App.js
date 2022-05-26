import { useEffect, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";

import SettingsHeader from "./components/settingsHeader/SettingsHeader.component";
import SettingsWindow from "./components/settingsWindow/SettingsWindow.component";
import Stopwatch from "./components/stopwatch/Stopwatch.component";
import { setCurrentColor } from "./state/colorSlice";

function App() {
  const dispatch = useDispatch();
  const [isSettingsOpen, setSettings] = useState(false);
  const stateColor = useSelector((state) => state.color.color);

  useEffect(() => {}, []);

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
