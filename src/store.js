import { configureStore } from "@reduxjs/toolkit";
import generalSlice from "./Helpers/storeSlice";

export const store = configureStore({
  reducer: {
    general: generalSlice,
  },
});
