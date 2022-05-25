import React from "react";
import CounterInput from "../counterInput/CounterInput.component";
import styles from "./CounterSettings.module.scss";
function CounterSettings() {
  function onSave(func) {
    func();
  }

  return (
    <div className={styles.counterSettings}>
      <h3>Timer Settings</h3>
      <div className={styles.Dropdown}>
        <CounterInput />
      </div>
    </div>
  );
}

export default CounterSettings;
