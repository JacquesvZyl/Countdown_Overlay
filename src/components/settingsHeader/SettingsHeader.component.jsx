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
import { useSelector } from "react-redux";

function SettingsHeader({ setSettings }) {
  const stateColor = useSelector((state) => state.color.color);

  function openSettings() {
    setSettings((prevVal) => !prevVal);
  }
  return (
    <header>
      <div className={styles.option} onClick={openSettings}>
        <SettingsSVG width="15px" fill={stateColor} />
      </div>
      <div className={styles.option} onClick={minimizeApp}>
        <MinimizeSVG fill={stateColor} width="15px" />
      </div>
      <div className={styles.option} onClick={closeApp}>
        <CloseSVG fill={stateColor} width="15px" />
      </div>
    </header>
  );
}

export default SettingsHeader;
