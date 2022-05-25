import React, { useReducer } from "react";
import TimeContext from "./TimeContext";

function timeReducer(state, action) {
  switch (action.type) {
    case "ADD_TIME": {
      const totalTime = state.timeInMs + action.payload;

      return {
        timeInMs: totalTime,
      };
    }
    case "SET_TIME": {
      return {
        timeInMs: action.payload,
      };
    }

    case "REMOVE_TIME": {
      let totalTime = state.timeInMs - action.payload;
      if (totalTime < 0) {
        totalTime = 0;
      }
      return {
        timeInMs: totalTime,
      };
    }
    default:
      return initialState;
  }
}

const initialState = {
  timeInMs: 60000,
};

function TimeProvider(props) {
  const [state, dispatch] = useReducer(timeReducer, initialState);

  function addToTime(amount) {
    dispatch({ type: "ADD_TIME", payload: amount });
  }
  function removeFromTime(amount) {
    dispatch({ type: "REMOVE_TIME", payload: amount });
  }
  function setTime(amount) {
    dispatch({ type: "SET_TIME", payload: amount });
  }

  const timeData = {
    timeInMs: state.timeInMs,
    addToTime,
    removeFromTime,
    setTime,
  };
  return (
    <TimeContext.Provider value={timeData}>
      {props.children}
    </TimeContext.Provider>
  );
}

export default TimeProvider;
