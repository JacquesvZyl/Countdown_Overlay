import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  size: "1",
};

export const sizeSlice = createSlice({
  name: "size",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setStateSize: (state, action) => {
      state.size = action.payload;
    },
  },
});

export const { setStateSize } = sizeSlice.actions;

export default sizeSlice.reducer;
