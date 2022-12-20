import { configureStore } from "@reduxjs/toolkit";
import categories from "./categoriesSlice";
import areas from "./areasSlice";
import meals from "./mealsSlice";

const store = configureStore({
  reducer: {
    categories,
    areas,
    meals,
  },
});

export default store;
