import { configureStore } from "@reduxjs/toolkit";

import timeReducer from "./timerSlice";
import colorReducer from "./colorSlice";
import sizeReducer from "./sizeSlice";

export const store = configureStore({
  reducer: {
    timer: timeReducer,
    color: colorReducer,
    size: sizeReducer,
  },
});
