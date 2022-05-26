import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTimeRemaining } from "../../../helperFunctions/timer";
import { setTime } from "../../../state/timerSlice";
import Button from "../../button/Button.component";
import SettingsUI from "../settingsUI/SettingsUI.component";
import styles from "./CounterInput.module.scss";

function CounterInput() {
  const timeInMs = useSelector((state) => state.timer.timeInMs);
  const stateColor = useSelector((state) => state.color.color);
  const { hours, minutes, seconds } = getTimeRemaining(timeInMs);
  const dispatch = useDispatch();
  const [selectedTime, setSelectedTime] = useState({
    hours,
    minutes,
    seconds,
  });

  function onHourChangehandler(e) {
    const { value } = e.target;
    setSelectedTime((prevVal) => {
      return { ...prevVal, hours: +value };
    });
  }

  function onMinuteChangehandler(e) {
    const { value } = e.target;

    setSelectedTime((prevVal) => {
      return { ...prevVal, minutes: +value };
    });
  }

  function onSecondChangehandler(e) {
    const { value } = e.target;
    setSelectedTime((prevVal) => {
      return { ...prevVal, seconds: +value };
    });
  }

  function onSave() {
    const { hours, minutes, seconds } = selectedTime;

    const total = hours * 3600000 + minutes * 60000 + seconds * 1000;
    dispatch(setTime(total));
  }

  const hourOption = [...Array(60)].map((_, i) => (
    <option key={i} value={i} {...(i === hours ? { selected: "true" } : {})}>
      {i < 10 ? `0${i}` : i}
    </option>
  ));
  const minuteOption = [...Array(60)].map((_, i) => (
    <option key={i} value={i} {...(i === minutes ? { selected: "true" } : {})}>
      {i < 10 ? `0${i}` : i}
    </option>
  ));
  const secondOption = [...Array(60)].map((_, i) => (
    <option key={i} value={i} {...(i === seconds ? { selected: "true" } : {})}>
      {i < 10 ? `0${i}` : i}
    </option>
  ));

  return (
    <SettingsUI title="timer settings">
      <div className={styles.allDropdowns}>
        <div className={styles.dropDown}>
          <h4>Hours</h4>
          <select
            style={{ border: `1px solid ${stateColor}`, color: stateColor }}
            onChange={onHourChangehandler}
          >
            {hourOption}
          </select>
        </div>
        <div className={styles.dropDown}>
          <h4>Minutes</h4>
          <select
            style={{ border: `1px solid ${stateColor}`, color: stateColor }}
            onChange={onMinuteChangehandler}
          >
            {minuteOption}
          </select>
        </div>
        <div className={styles.dropDown}>
          <h4>Seconds</h4>
          <select
            style={{ border: `1px solid ${stateColor}`, color: stateColor }}
            onChange={onSecondChangehandler}
          >
            {secondOption}
          </select>
        </div>
      </div>
      <Button onClick={onSave}>Save</Button>
    </SettingsUI>
  );
}

export default CounterInput;
