import { createSlice } from "@reduxjs/toolkit";
import {  getProfile } from "../services/Apis";

const initialState = {
  items: [],
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
      state.items = action.payload;
      state.status = "success";
    },
    [getProfile.rejected]: (state, action) => {
      state.status = "rejected";
    },
    
  },
});

export default profileSlice.reducer;
