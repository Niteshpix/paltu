import { createSlice } from "@reduxjs/toolkit";
import {   getUserWithSevice } from "../services/Apis";

const initialState = {
  data:[],
  status: null,
  createStatus: null,
};

const UserwithServicesSlice = createSlice({
  name: "userservice",
  initialState,
  reducers: {},
  extraReducers: {
    [getUserWithSevice.pending]: (state, action) => {
      state.status = "pending";
    },
    [getUserWithSevice.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "success";
    },
    [getUserWithSevice.rejected]: (state, action) => {
      state.status = "rejected";
    },

   
   
    
    
  },
});

export default  UserwithServicesSlice.reducer;
