import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    theme: "light",
  },
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    handleTheme: (state, action) => {
      state.value.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleTheme } = themeSlice.actions;

export default themeSlice.reducer;
