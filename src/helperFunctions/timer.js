function getTimeRemaining(time) {
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / 1000 / 60) % 60);
  const hours = Math.floor((time / 1000 / 60 / 60) % 24);
  return {
    hours,
    minutes,
    seconds,
  };
}

export function formatTimer(timeLeft) {
  let { hours, minutes, seconds } = getTimeRemaining(timeLeft);
  if (timeLeft >= 0) {
    // update the timer
    // check if less than 10 then we need to
    // add '0' at the begining of the variable
    return (
      (hours > 9 ? hours : "0" + hours) +
      ":" +
      (minutes > 9 ? minutes : "0" + minutes) +
      ":" +
      (seconds > 9 ? seconds : "0" + seconds)
    );
  } else {
    return "00:00:00";
  }
}