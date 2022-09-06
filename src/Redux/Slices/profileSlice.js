import { createSlice } from "@reduxjs/toolkit";
import {  getProfile } from "../services/Apis";

const initialState = {
  user:{
    _id:"",
    name:"",
  },
  status: null,
  createStatus: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: {
    [getProfile.pending]: (state, action) => {
      state.status = "pending";
    },
    [getProfile.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.status = "success";
    },
    [getProfile.rejected]: (state, action) => {
      state.status = "rejected";
    },
    
  },
});

export default profileSlice.reducer;
