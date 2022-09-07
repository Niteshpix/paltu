import { createSlice } from "@reduxjs/toolkit";
import {
  createCategory,
  deleteCategory,
  getCategories,
} from "../services/Apis";

const initialState = {
  data: {
    _id: "",
    title: "",
  },
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
      state.data = action.payload;
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
      state.data.push(action.payload);
      state.status = "success";
    },
    [createCategory.rejected]: (state, action) => {
      state.status = "rejected";
    },

    //delete category
    [deleteCategory.pending]: (state, action) => {
      state.status = "pending";
    },
    [deleteCategory.fulfilled]: (state, action) => {
      let index = state.data.findIndex((dataId) => dataId.id === action.payload.id);
      console.log(action.payload.id)
      state.data.splice(index, 1);
      state.status = "success";
    },
    [deleteCategory.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default CategorySlice.reducer;
