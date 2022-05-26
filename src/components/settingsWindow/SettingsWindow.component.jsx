import React from "react";
import ColorPicker from "./ColorPicker/ColorPicker.component";
import CounterInput from "./counterInput/CounterInput.component";

import SettingsUI from "./settingsUI/SettingsUI.component";
import styles from "./SettingsWindow.module.scss";

function SettingsWindow() {
  return (
    <div className={styles.settings}>
      <CounterInput />

      <ColorPicker />
    </div>
  );
}

export default SettingsWindow;
