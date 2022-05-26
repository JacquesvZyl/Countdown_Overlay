import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  timeInMs: 0,
};

export const timeSlice = createSlice({
  name: "timer",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addToTime: (state, action) => {
      state.timeInMs += action.payload;
    },
    removeFromTime: (state, action) => {
      state.timeInMs -= action.payload;
    },
    setTime: (state, action) => {
      state.timeInMs = action.payload;
    },
  },
});

export const { addToTime, removeFromTime, setTime } = timeSlice.actions;

export default timeSlice.reducer;
