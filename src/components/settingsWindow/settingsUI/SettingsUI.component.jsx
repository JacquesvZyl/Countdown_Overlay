import React from "react";
import { useSelector } from "react-redux";
import styles from "./SettingsUI.module.scss";

function SettingsUI({ children, title }) {
  const colorState = useSelector((state) => state.color.color);
  return (
    <div
      className={styles.settingsUI}
      style={{ borderBottom: `1px solid ${colorState}` }}
    >
      <h3>{title}</h3>
      {children}
    </div>
  );
}

export default SettingsUI;
