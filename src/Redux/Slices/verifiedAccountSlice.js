import { createSlice } from "@reduxjs/toolkit";

import {   VerifiedAccount } from "../services/Apis";

const initialState = {
  verified:{
    email:"",
    code:""
  },
  status: null,
  createStatus: null,
};

const ServicesSlice = createSlice({
  name: "verified",
  initialState,
  reducers: {},
  extraReducers: {
    //post
    [VerifiedAccount.pending]: (state, action) => {
      state.status = "pending";
    },
    [VerifiedAccount.fulfilled]: (state, action) => {
      state.verified.push(action.payload);
      state.status = "success";
    },
    [VerifiedAccount.rejected]: (state, action) => {
      state.status = "rejected";
    },

  },
});

export default ServicesSlice.reducer;
