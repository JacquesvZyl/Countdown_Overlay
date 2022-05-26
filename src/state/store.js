import { configureStore } from "@reduxjs/toolkit";

import timeReducer from "./timerSlice";
import colorReducer from "./colorSlice";
import sizeReducer from "./sizeSlice";
import notificationReducer from "./notificationSlice";

export const store = configureStore({
  reducer: {
    timer: timeReducer,
    color: colorReducer,
    size: sizeReducer,
    notification: notificationReducer,
  },
});
