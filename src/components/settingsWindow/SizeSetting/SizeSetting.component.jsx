import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveLocalContent } from "../../../helperFunctions/electron";
import { setStateSize } from "../../../state/sizeSlice";
import Button from "../../button/Button.component";
import SettingsUI from "../settingsUI/SettingsUI.component";
import styles from "./SizeSetting.module.scss";

function SizeSetting() {
  const stateSize = useSelector((state) => state.size.size);
  const [size, setSize] = useState(stateSize);
  const dispatch = useDispatch();

  const sizePercentage = `${(size * 100).toFixed(0)}%`;
  function onChangeHandler(e) {
    const { value } = e.target;
    setSize(value);
  }

  function onSave() {
    dispatch(setStateSize(size));
    saveLocalContent("data.size", size);
  }

  return (
    <SettingsUI title="size Settings">
      <div className={styles.sizeSetting}>
        <input
          className={styles.slider}
          onChange={onChangeHandler}
          type="range"
          min="0.5"
          max="3"
          defaultValue={stateSize}
          step="0.1"
          id="myRange"
        ></input>
        <p>Current: {sizePercentage}</p>
      </div>
      <Button onClick={onSave}>Save</Button>
    </SettingsUI>
  );
}

export default SizeSetting;
