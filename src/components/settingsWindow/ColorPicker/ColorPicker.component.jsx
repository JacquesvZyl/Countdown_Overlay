import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteLocalContent,
  saveLocalContent,
} from "../../../helperFunctions/electron";

import { setCurrentBgColor, setCurrentColor } from "../../../state/colorSlice";

import Button from "../../button/Button.component";
import SettingsUI from "../settingsUI/SettingsUI.component";
import styles from "./ColorPicker.module.scss";

function ColorPicker() {
  const dispatch = useDispatch();
  const stateColor = useSelector((state) => state.color.color);
  const stateBgColor = useSelector((state) => state.color.bgColor);

  const [isBgTransparent, setBgTransparent] = useState(
    !stateBgColor ? true : false
  );
  const [color, setColor] = useState(stateColor);
  const [bgColor, setBgColor] = useState(
    stateBgColor ? stateBgColor : "#ffffff"
  );

  function onColorChange(e) {
    const { value } = e.target;

    setColor(value);
  }
  function onBgColorChange(e) {
    const { value } = e.target;
    setBgColor(value);
  }

  function colorSave() {
    if (!color) return;
    dispatch(setCurrentColor(color));
    saveLocalContent("data.color", color);
  }

  function bgSave() {
    const valueToSend = isBgTransparent ? null : bgColor;
    dispatch(setCurrentBgColor(valueToSend));
    saveLocalContent("data.bgColor", valueToSend);
  }

  function onSaveHandler() {
    colorSave();
    bgSave();
  }

  return (
    <SettingsUI title="color settings">
      <div className={styles.colors}>
        <div className={styles.colorContainer}>
          <h5>Text & Window color:</h5>
          <input
            type="color"
            id="colorpicker"
            defaultValue={stateColor}
            onChange={onColorChange}
          />
        </div>
        {!isBgTransparent && (
          <div className={styles.colorContainer}>
            <h5>Background Color:</h5>
            <input
              type="color"
              id="colorpicker"
              defaultValue={bgColor}
              onChange={onBgColorChange}
            />
          </div>
        )}
      </div>

      <label> Transparent background</label>
      <input
        type="checkbox"
        checked={isBgTransparent}
        onChange={() => setBgTransparent((val) => !val)}
      />

      <Button onClick={onSaveHandler}>Save</Button>
    </SettingsUI>
  );
}

export default ColorPicker;
