import React from "react";
import { useSelector } from "react-redux";
import { hexToRgbA } from "../../helperFunctions/general";
import styles from "./Button.module.scss";

function Button({ children, ...otherprops }) {
  const stateColor = useSelector((state) => state.color.color);
  const hexColor = hexToRgbA(stateColor);
  return (
    <button
      className={styles.button}
      {...otherprops}
      style={{
        border: `2px solid ${stateColor}`,
        color: stateColor,
        backgroundColor: hexColor,
      }}
    >
      {children}
    </button>
  );
}

export default Button;
