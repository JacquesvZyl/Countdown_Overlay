import { useEffect, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";

import SettingsHeader from "./components/settingsHeader/SettingsHeader.component";
import SettingsWindow from "./components/settingsWindow/SettingsWindow.component";
import Stopwatch from "./components/stopwatch/Stopwatch.component";
import { store } from "./state/store";

function App() {
  const [isSettingsOpen, setSettings] = useState(false);
  const stateColor = useSelector((state) => state.color.color);

  return (
    <div
      className="App"
      style={{
        color: stateColor,
        border: `2px solid ${stateColor}`,
        height: "100vh",
        width: "100vw",
      }}
    >
      <SettingsHeader setSettings={setSettings} />

      {!isSettingsOpen ? <Stopwatch /> : <SettingsWindow />}
    </div>
  );
}

export default App;
