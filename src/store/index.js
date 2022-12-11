import { configureStore } from "@reduxjs/toolkit";
import categories from "./categoriesSlice"

const store = configureStore({
    reducer: {
        categories
    }
})

export default store;
