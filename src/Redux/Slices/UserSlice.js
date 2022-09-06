import { createSlice } from "@reduxjs/toolkit";
import {  getUser } from "../services/Apis";

const initialState = {
  user: {
    _id: "",
    name: "",
    email: "",
    photo: [],
  },
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
      state.user = action.payload;
      state.status = "success";
    },
    [getUser.rejected]: (state, action) => {
      state.status = "rejected";
    },
   
  },
});

export default UserSlice.reducer;
