import React from "react";

const TimeContext = React.createContext({
  timeInMs: 0,
  addToTime: () => {},
  removeFromTime: () => {},
  setTime: () => {},
});

export default TimeContext;
