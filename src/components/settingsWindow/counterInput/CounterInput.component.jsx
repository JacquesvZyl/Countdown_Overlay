import React, { useContext, useEffect, useState } from "react";
import TimeContext from "../../../state/TimeContext";
import styles from "./CounterInput.module.scss";

function CounterInput({ label }) {
  const { timeInMs, setTime } = useContext(TimeContext);
  const [selectedTime, setSelectedTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  function onHourChangehandler(e) {
    const { value } = e.target;
    setSelectedTime((prevVal) => {
      return { ...prevVal, hours: +value * 3600000 };
    });
  }

  function onMinuteChangehandler(e) {
    const { value } = e.target;

    setSelectedTime((prevVal) => {
      return { ...prevVal, minutes: +value * 60000 };
    });
  }

  function onSecondChangehandler(e) {
    const { value } = e.target;
    setSelectedTime((prevVal) => {
      return { ...prevVal, seconds: +value * 1000 };
    });
  }

  function onSave() {
    const { hours, minutes, seconds } = selectedTime;
    const total = hours + minutes + seconds;
    setTime(total);
  }

  const options = [...Array(60)].map((_, i) => (
    <option key={i} value={i}>
      {i < 10 ? `0${i}` : i}
    </option>
  ));

  return (
    <>
      <div className={styles.allDropdowns}>
        <div className={styles.dropDown}>
          <h4>Hours</h4>
          <select value="hours" onChange={onHourChangehandler}>
            {options}
          </select>
        </div>
        <div className={styles.dropDown}>
          <h4>Minutes</h4>
          <select value="minutes" onChange={onMinuteChangehandler}>
            {options}
          </select>
        </div>
        <div className={styles.dropDown}>
          <h4>Seconds</h4>
          <select value="seconds" onChange={onSecondChangehandler}>
            {options}
          </select>
          <select value="seconds" onChange={onSecondChangehandler}>
            <option>test1</option>
            <option>test3</option>
            <option>test4</option>
            <option>test5</option>
          </select>
        </div>
      </div>
      <button onClick={onSave}>Save</button>
    </>
  );
}

export default CounterInput;
