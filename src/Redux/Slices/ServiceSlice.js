import { createSlice } from "@reduxjs/toolkit";
import {  getServices } from "../services/Apis";

const initialState = {
  items: [],
  status: null,
  createStatus: null,
};

const ServicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
  extraReducers: {
    [getServices.pending]: (state, action) => {
      state.status = "pending";
    },
    [getServices.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [getServices.rejected]: (state, action) => {
      state.status = "rejected";
    },
    
  },
});

export default ServicesSlice.reducer;
