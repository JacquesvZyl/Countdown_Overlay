import React from "react";
import { useSelector } from "react-redux";
import styles from "./Button.module.scss";

function Button({ children, ...otherprops }) {
  const stateColor = useSelector((state) => state.color.color);
  return (
    <button
      className={styles.button}
      {...otherprops}
      style={{ border: `2px solid ${stateColor}`, color: stateColor }}
    >
      {children}
    </button>
  );
}

export default Button;
