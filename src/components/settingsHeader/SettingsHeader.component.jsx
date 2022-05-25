import React from "react";
import { ReactComponent as SettingsSVG } from "../../assets/img/settings-gear.svg";
import { ReactComponent as MinimizeSVG } from "../../assets/img/minimize.svg";
import { ReactComponent as CloseSVG } from "../../assets/img/close.svg";
import {
  closeApp,
  minimizeApp,
  settings,
} from "../../helperFunctions/electron";

import styles from "./SettingsHeader.module.scss";

function SettingsHeader() {
  return (
    <header>
      <div className={styles.option} onClick={settings}>
        <SettingsSVG width="15px" />
      </div>
      <div className={styles.option} onClick={minimizeApp}>
        <MinimizeSVG fill="black" width="15px" />
      </div>
      <div className={styles.option} onClick={closeApp}>
        <CloseSVG fill="black" width="15px" />
      </div>
    </header>
  );
}

export default SettingsHeader;
