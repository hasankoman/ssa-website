import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: false,
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    toggleIsMenuOpen: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { toggleIsMenuOpen, incrementByAmount } = generalSlice.actions;

export default generalSlice.reducer;
