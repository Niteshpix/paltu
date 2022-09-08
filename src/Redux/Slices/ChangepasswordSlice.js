import { createSlice } from "@reduxjs/toolkit";
import {  changePassword } from "../services/Apis";

const initialState = {
  change:{
    currentpass:"",
    newpass:"",
    verifypass:""
  },
  status: null,
  createStatus: null,
};

const ServicesSlice = createSlice({
  name: "change",
  initialState,
  reducers: {},
  extraReducers: {
    //post
    [changePassword.pending]: (state, action) => {
      state.status = "pending";
    },
    [changePassword.fulfilled]: (state, action) => {
      state.change.push(action.payload);
      state.status = "success";
    },
    [changePassword.rejected]: (state, action) => {
      state.status = "rejected";
    },

  },
});

export default ServicesSlice.reducer;
