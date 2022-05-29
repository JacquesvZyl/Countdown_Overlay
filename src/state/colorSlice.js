import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: "#000000",
  bgColor: null,
};

export const colorSlice = createSlice({
  name: "color",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setCurrentColor: (state, action) => {
      state.color = action.payload;
    },
    setCurrentBgColor: (state, action) => {
      state.bgColor = action.payload;
    },
  },
});

export const { setCurrentColor, setCurrentBgColor } = colorSlice.actions;

export default colorSlice.reducer;
