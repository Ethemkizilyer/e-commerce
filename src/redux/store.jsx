import { configureStore } from "@reduxjs/toolkit";
import wordReducer from "./reducer";


export const store = configureStore({
  reducer: {
    speed: wordReducer,
  },
});
