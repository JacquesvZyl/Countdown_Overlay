import React from "react";
import ColorPicker from "./ColorPicker/ColorPicker.component";
import CounterInput from "./counterInput/CounterInput.component";
import NotificationPicker from "./NotificationPicker/NotificationPicker.component";

import SettingsUI from "./settingsUI/SettingsUI.component";
import styles from "./SettingsWindow.module.scss";
import SizeSetting from "./SizeSetting/SizeSetting.component";

function SettingsWindow() {
  return (
    <div className={styles.settings}>
      <CounterInput />

      <ColorPicker />
      <SizeSetting />
      <NotificationPicker />
    </div>
  );
}

export default SettingsWindow;
