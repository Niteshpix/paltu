import { createSlice } from "@reduxjs/toolkit";
import {
  createCategory,
  deleteCategory,
  getCategories,
} from "../services/Apis";

const initialState = {
  items: [],
  status: null,
  createStatus: null,
};

const CategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
   
  },
  extraReducers: {
    //get
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
    

    //create category
    [createCategory.pending]: (state, action) => {
      state.status = "pending";
    },
    [createCategory.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [createCategory.rejected]: (state, action) => {
      state.status = "rejected";
    },

    //delete category
    [deleteCategory.rejected]: (state, action) => {
      state.status = "rejected";
    },

    [deleteCategory.pending]: (state, action) => {
      state.status = "pending";
    },
    [deleteCategory.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [deleteCategory.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default CategorySlice.reducer;
