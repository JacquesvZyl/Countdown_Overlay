import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notification: null,
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setNotification: (state, action) => {
      state.notification = action.payload;
    },
  },
});

export const { setNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
