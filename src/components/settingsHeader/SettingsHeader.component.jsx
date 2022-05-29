import React from "react";
import { ReactComponent as SettingsSVG } from "../../assets/img/settings-gear.svg";
import { ReactComponent as MinimizeSVG } from "../../assets/img/minimize.svg";
import { ReactComponent as CloseSVG } from "../../assets/img/close.svg";
import { ReactComponent as BackSVG } from "../../assets/img/back.svg";
import { closeApp, minimizeApp } from "../../helperFunctions/electron";

import styles from "./SettingsHeader.module.scss";
import { useSelector } from "react-redux";
import { hexToRgbA } from "../../helperFunctions/general";

function SettingsHeader({ setSettings, isSettingsOpen }) {
  const stateColor = useSelector((state) => state.color.color);
  const rgba = hexToRgbA(stateColor);

  function openSettings() {
    setSettings((prevVal) => !prevVal);
  }

  const settingsBackBtn = !isSettingsOpen ? (
    <SettingsSVG width="18px" height="18px" fill={stateColor} />
  ) : (
    <BackSVG width="18px" height="18px" fill={stateColor} />
  );
  return (
    <header
      style={{
        position: isSettingsOpen ? "fixed" : "relative",
        backgroundColor: rgba ? rgba : "transparent",
        borderBottom: `2px solid ${stateColor}`,
      }}
    >
      <div
        className={`${styles.option} ${styles.settings}`}
        onClick={openSettings}
      >
        {settingsBackBtn}
      </div>
      <div
        className={`${styles.option} ${styles.minimize}`}
        onClick={minimizeApp}
      >
        <MinimizeSVG fill={stateColor} width="18px" height="18px" />
      </div>
      <div className={`${styles.option} ${styles.close}`} onClick={closeApp}>
        <CloseSVG fill={stateColor} width="18px" height="18px" />
      </div>
    </header>
  );
}

export default SettingsHeader;
