import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer"; // Adjust the path to your root reducer

export const store = configureStore({
  reducer: rootReducer,
});
