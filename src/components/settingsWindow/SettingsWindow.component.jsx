import React, { useContext } from "react";
import TimeContext from "../../state/TimeContext";
import CounterInput from "./counterInput/CounterInput.component";
import CounterSettings from "./CounterSettings/CounterSettings.component";
import styles from "./SettingsWindow.module.scss";

function SettingsWindow() {
  const { hr, min, sec } = useContext(TimeContext);

  return (
    <div className={styles.settings}>
      <CounterSettings />
      <button>SAVE SETTINGS</button>
    </div>
  );
}

export default SettingsWindow;
