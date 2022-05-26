import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  size: "1",
};

export const sizeSlice = createSlice({
  name: "size",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setSize: (state, action) => {
      state.size = action.payload;
    },
  },
});

export const { setSize } = sizeSlice.actions;

export default sizeSlice.reducer;
