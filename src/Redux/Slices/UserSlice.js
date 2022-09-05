import { createSlice } from "@reduxjs/toolkit";
import {  getUser } from "../services/Apis";

const initialState = {
  items: [],
  status: null,
  createStatus: null,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [getUser.pending]: (state, action) => {
      state.status = "pending";
    },
    [getUser.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [getUser.rejected]: (state, action) => {
      state.status = "rejected";
    },
    
  },
});

export default UserSlice.reducer;
