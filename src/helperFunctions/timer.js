export function getTimeRemaining(time) {
  const milliSeconds = Math.floor(time % 1000) / 10;
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
  let { hours, minutes, seconds, milliSeconds } = getTimeRemaining(timeLeft);
  if (timeLeft >= 0) {
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
