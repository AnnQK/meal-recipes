import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMealsByCategory, getRandomRecipe, getsingleMeal } from "../api/api";

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

export const fetchPopularMeals = createAsyncThunk(
  "meals/fetchPopular",

  async function (_, { rejectWithValue }) {
    const popularMeals = [];
    try {
      for (let i = 0; i < 5; i++) {
        const { status, data } = await getRandomRecipe();
        if (status < 200 || status > 300) {
          throw new Error("Can't load popular meals");
        }
        popularMeals.push(data.meals[0]);
      }
    } catch (error) {
      rejectWithValue(error.message);
    }
    return popularMeals;
  },
);

export const fetchMealsByCategory = createAsyncThunk(
  "meals/fetchMealsByCategory",

  async function (category, { rejectWithValue }) {
    try {
      const { status, data } = await getMealsByCategory(category);
      if (status < 200 || status > 300) {
        throw new Error(`Can't load ${category.toLowerCase()} meals`);
      }
      return data.meals;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);

export const fetchSingleMeal = createAsyncThunk(
  "categories/fetchSingleMeal",

  async function (meal, { rejectWithValue }) {
    try {
      const { status, data } = await getsingleMeal(meal);
      if (status < 200 || status > 300) {
        throw new Error(`Can't load ${meal.toLowerCase()} info`);
      }
      return data.meals[0];
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);

const initialState = {
  meals: [],
  popularMeals: [],
  randomMeal: {},
  singleMeal: {},
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
    [fetchPopularMeals.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchPopularMeals.fulfilled]: (state, action) => {
      state.popularMeals = action.payload;
      state.status = "success";
    },
    [fetchPopularMeals.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.payload;
    },
    [fetchMealsByCategory.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchMealsByCategory.fulfilled]: (state, action) => {
      state.meals = action.payload;
      state.status = "success";
    },
    [fetchMealsByCategory.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.payload;
    },
    [fetchSingleMeal.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchSingleMeal.fulfilled]: (state, action) => {
      state.singleMeal = action.payload;
      state.status = "success";
    },
    [fetchSingleMeal.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.payload;
    },
  },
});

export default mealsSlice.reducer;
