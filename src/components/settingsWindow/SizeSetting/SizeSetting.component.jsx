import React from "react";
import { useSelector } from "react-redux";
import SettingsUI from "../settingsUI/SettingsUI.component";
import styles from "./SizeSetting.module.scss";

function SizeSetting() {
  const stateSize = useSelector((state) => state.size.size);
  return (
    <SettingsUI title="size Settings">
      <div className={styles.sizeSetting}>
        <input
          type="range"
          min="0.5"
          max="2"
          defaultValue={stateSize}
          class="slider"
          id="myRange"
        ></input>
      </div>
    </SettingsUI>
  );
}

export default SizeSetting;
