import React, { useContext, useEffect, useState } from "react";

import useCountDown from "react-countdown-hook";
import styles from "./Stopwatch.module.scss";
import TimeContext from "../../state/TimeContext";
import { formatTimer } from "../../helperFunctions/timer";
import SettingsHeader from "../settingsHeader/SettingsHeader.component";
import { ReactComponent as AddSVG } from "../../assets/img/add.svg";
import { ReactComponent as RemoveSVG } from "../../assets/img/remove.svg";

const Stopwatch = () => {
  const { timeInMs, addToTime, removeFromTime } = useContext(TimeContext);
  const [countdownStarted, setCountdownStarted] = useState(false);
  const [isTimerPaused, setTimerPaused] = useState(false);

  //const totalTimeInMilliSec = min * 60000 + sec * 1000;
  const [timeLeft, actions] = useCountDown(timeInMs, 100);

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
    <button onClick={pauseTimer}>Pause</button>
  ) : (
    <button onClick={resumeTimer}>Resume</button>
  );

  const startResetButtons = !countdownStarted ? (
    <button onClick={startTimer}>Start</button>
  ) : (
    <button onClick={resetTimer}>Reset</button>
  );

  const counterToggleBtns = !countdownStarted ? (
    <div className={styles.counterToggle}>
      <button onClick={removeFromTimeHandler}>
        <RemoveSVG width="16px" />
      </button>
      <button onClick={addToTimeHandler}>
        <AddSVG width="15px" />
      </button>
    </div>
  ) : null;

  function addToTimeHandler() {
    addToTime(60000);
  }
  function removeFromTimeHandler() {
    removeFromTime(60000);
  }

  return (
    <div className={styles.stopwatch}>
      <SettingsHeader />
      <h1>{!countdownStarted ? formattedTotalTime : formattedTimeLeft}</h1>
      <div className={styles.buttons}>
        {startResetButtons}
        {counterToggleBtns}
        {countdownStarted && pauseResumeButtons}
      </div>
    </div>
  );
};

export default Stopwatch;

/* 

import React from 'react';
import useCountDown from 'react-countdown-hook';

const initialTime = 60 * 1000; // initial time in milliseconds, defaults to 60000
const interval = 1000; // interval to change remaining time amount, defaults to 1000

const render = () => {
  const [timeLeft, { start, pause, resume, reset }] = useCountDown(initialTime, interval);
  
  // start the timer during the first render
  React.useEffect(() => {
    start();
  }, []);
  
  const restart = React.useCallback(() => {
    // you can start existing timer with an arbitrary value
    // if new value is not passed timer will start with initial value
    const newTime = 42 * 1000;
    start(newTime);
  }, []);
 
  return (
    <>
      <p>Time left: {timeLeft}</p>
 
      <button onClick={restart}>
        Restart counter with 42 seconds
      </button>
    </>
  );
}

*/
