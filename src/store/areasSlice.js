import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAreas, getMealsByArea } from "../api/api";

export const fetchAreas = createAsyncThunk(
  "areas/fetchAreas",

  async function (_, { rejectWithValue }) {
    try {
      const { status, data } = await getAreas();
      if (status < 200 || status > 300) {
        throw new Error("Can't load areas");
      }
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);

const initialState = {
  areas: [],
  status: null,
  error: null,
};

const areasSlice = createSlice({
  name: "areas",
  initialState,
  extraReducers: {
    [fetchAreas.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchAreas.fulfilled]: (state, action) => {
      state.areas = action.payload;
      state.status = "success";
    },
    [fetchAreas.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.payload;
    },
  },
});

export default areasSlice.reducer;
