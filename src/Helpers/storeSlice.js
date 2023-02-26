import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: false,
  show: false,
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    toggleIsMenuOpen: (state, action) => {
      state.isMenuOpen = action.payload;
    },
    toggleShow: (state, action) => {
      console.log(action.payload);
      state.show = action.payload;
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { toggleIsMenuOpen, toggleShow, incrementByAmount } =
  generalSlice.actions;

export default generalSlice.reducer;
