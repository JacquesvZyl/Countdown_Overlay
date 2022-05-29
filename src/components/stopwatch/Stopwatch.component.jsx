import React, { useEffect, useState } from "react";

import useCountDown from "react-countdown-hook";
import styles from "./Stopwatch.module.scss";
import { formatTimer } from "../../helperFunctions/timer";
import { ReactComponent as AddSVG } from "../../assets/img/add.svg";
import { ReactComponent as RemoveSVG } from "../../assets/img/remove.svg";
import { useDispatch, useSelector } from "react-redux";
import { addToTime, removeFromTime } from "../../state/timerSlice";

const Stopwatch = () => {
  const dispatch = useDispatch();
  const stateColor = useSelector((state) => state.color.color);
  const stateSize = useSelector((state) => state.size.size);
  const stateNotification = useSelector(
    (state) => state.notification.notification
  );

  const timeInMs = useSelector((state) => state.timer.timeInMs);
  const [countdownStarted, setCountdownStarted] = useState(false);
  const [isTimerPaused, setTimerPaused] = useState(false);

  //const totalTimeInMilliSec = min * 60000 + sec * 1000;
  const [timeLeft, actions] = useCountDown(timeInMs, 100);
  const notification = new Audio(stateNotification);

  useEffect(() => {
    if (timeLeft === 0 && countdownStarted) {
      notification.play();
    }
  }, [timeLeft, countdownStarted]);

  function startTimer() {
    setCountdownStarted(true);
    actions.start(timeInMs);
  }

  function resetTimer() {
    setCountdownStarted(false);
    setTimerPaused(false);
  }

  function pauseTimer() {
    setTimerPaused(true);
    actions.pause();
  }
  function resumeTimer() {
    setTimerPaused(false);
    actions.resume();
  }
  const formattedTotalTime = formatTimer(timeInMs);
  const formattedTimeLeft = formatTimer(timeLeft);

  const pauseResumeButtons = !isTimerPaused ? (
    <button onClick={pauseTimer} style={{ color: stateColor }}>
      Pause
    </button>
  ) : (
    <button onClick={resumeTimer} style={{ color: stateColor }}>
      Resume
    </button>
  );

  const startResetButtons = !countdownStarted ? (
    <button onClick={startTimer} style={{ color: stateColor }}>
      Start
    </button>
  ) : (
    <button onClick={resetTimer} style={{ color: stateColor }}>
      Reset
    </button>
  );

  const counterToggleBtns = !countdownStarted ? (
    <div className={styles.counterToggle}>
      <button onClick={removeFromTimeHandler}>
        <RemoveSVG width="16px" color={stateColor} />
      </button>
      <button onClick={addToTimeHandler}>
        <AddSVG width="15px" fill={stateColor} />
      </button>
    </div>
  ) : null;

  function addToTimeHandler() {
    dispatch(addToTime(60000));
  }
  function removeFromTimeHandler() {
    dispatch(removeFromTime(60000));
  }

  return (
    <div className={styles.stopwatch}>
      <div
        className={styles.stopwatchCountainer}
        style={{ transform: `scale(${stateSize ? stateSize : 1})` }}
      >
        <h1>{!countdownStarted ? formattedTotalTime : formattedTimeLeft}</h1>
        <div className={styles.buttons}>
          {startResetButtons}
          {counterToggleBtns}
          {countdownStarted && pauseResumeButtons}
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
