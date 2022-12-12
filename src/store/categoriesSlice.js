import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCategories } from "../api/api";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",

  async function (_, { rejectWithValue }) {
    try {
      const { status, data } = await getCategories();
      if (status < 200 || status > 300) {
        throw new Error("Can't load categories");
      }
      return data.categories;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

const initialState = {
  categories: [],
  status: null,
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: {
    [fetchCategories.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchCategories.fulfilled]: (state, action) => {
      state.categories = action.payload;
      state.status = "success";
    },
    [fetchCategories.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.payload;
    },
  },
});

export default categoriesSlice.reducer;
