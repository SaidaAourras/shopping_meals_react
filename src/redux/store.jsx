import MealReducer from "./MealReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    meals: MealReducer,
  },
});
