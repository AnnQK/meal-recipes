import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRandomRecipe } from "../api/api";

export const fetchRandomRecipe = createAsyncThunk(
  "meals/fetchRandom",

  async function (_, { rejectWithValue }) {
    try {
      const { status, data } = await getRandomRecipe();
      if (status < 200 || status > 300) {
        throw new Error("Can't load random recipe");
      }
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);

const initialState = {
  meals: [],
  randomMeal: {},
  status: null,
  error: null,
};

const mealsSlice = createSlice({
  name: "meals",
  initialState,
  extraReducers: {
    [fetchRandomRecipe.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchRandomRecipe.fulfilled]: (state, action) => {
      state.randomMeal = action.payload.meals[0];
      state.status = "success";
    },
    [fetchRandomRecipe.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.payload;
    },
  },
});

export default mealsSlice.reducer;
