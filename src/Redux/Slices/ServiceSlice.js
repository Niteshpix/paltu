import { createSlice } from "@reduxjs/toolkit";
import {  createServices, deleteService, getServices } from "../services/Apis";

const initialState = {
  data:{
    _id:"",
    name:"",
  },
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
      state.data = action.payload;
      state.status = "success";
    },
    [getServices.rejected]: (state, action) => {
      state.status = "rejected";
    },

    //create
    [createServices.pending]: (state, action) => {
      state.status = "pending";
    },
    [createServices.fulfilled]: (state, action) => {
      state.data.push(action.payload);
      state.status = "success";
    },
    [createServices.rejected]: (state, action) => {
      state.status = "rejected";
    },

    //delete
    [deleteService.pending]: (state, action) => {
      state.status = "pending";
    },
    [deleteService.fulfilled]: (state, action) => {
      let index = state.data.findIndex((dataId) => dataId._id === action.payload._id);
      state.data.splice(index, 1);
      state.status = "success";
    },
    [deleteService.rejected]: (state, action) => {
      state.status = "rejected";
    },
    
  },
});

export default ServicesSlice.reducer;
