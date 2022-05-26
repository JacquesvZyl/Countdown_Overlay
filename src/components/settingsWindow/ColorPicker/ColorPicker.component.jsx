import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentColor } from "../../../state/colorSlice";
import Button from "../../button/Button.component";
import SettingsUI from "../settingsUI/SettingsUI.component";
import styles from "./ColorPicker.module.scss";

function ColorPicker() {
  const dispatch = useDispatch();
  const stateColor = useSelector((state) => state.color.color);
  const [color, setColor] = useState(stateColor);

  function onChange(e) {
    const { value } = e.target;
    console.log(value);

    setColor(value);
  }

  function onSave() {
    dispatch(setCurrentColor(color));
  }

  return (
    <SettingsUI title="color settings">
      <div>
        <input
          type="color"
          id="colorpicker"
          defaultValue={stateColor}
          onChange={onChange}
        ></input>
      </div>
      <Button onClick={onSave}>Save</Button>
    </SettingsUI>
  );
}

export default ColorPicker;
