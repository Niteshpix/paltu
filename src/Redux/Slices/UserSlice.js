import { createSlice } from "@reduxjs/toolkit";
import {  EditUser, getUser } from "../services/Apis";

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
    [EditUser.pending]: (state, action) => {
        state.status = "pending";
      },
      [EditUser.fulfilled]: (state, action) => {
        state.items = action.payload;
        state.status = "success";
      },
      [EditUser.rejected]: (state, action) => {
        state.status = "rejected";
      },
    
  },
});

export default UserSlice.reducer;
