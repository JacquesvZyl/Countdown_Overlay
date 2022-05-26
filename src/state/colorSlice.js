import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: "#000000",
};

export const colorSlice = createSlice({
  name: "color",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setCurrentColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const { setCurrentColor } = colorSlice.actions;

export default colorSlice.reducer;
