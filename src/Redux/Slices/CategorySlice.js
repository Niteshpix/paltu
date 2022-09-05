import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "../services/Apis";

const initialState = {
  items: [],
  status: null,
  createStatus: null,
};

const CategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: {
    [getCategories.pending]: (state, action) => {
      state.status = "pending";
    },
    [getCategories.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [getCategories.rejected]: (state, action) => {
      state.status = "rejected";
    },
    
  },
});

export default CategorySlice.reducer;
