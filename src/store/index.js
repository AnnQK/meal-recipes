import { configureStore } from "@reduxjs/toolkit";
import categories from "./categoriesSlice";
import areas from "./areasSlice";

const store = configureStore({
  reducer: {
    categories,
    areas,
  },
});

export default store;
