import { createSlice } from "@reduxjs/toolkit";
import {

  deleteUser,
  getUser,
} from "../services/Apis";

const initialState = {
  data: {
    _id:"", 
    name:"",
    email:""
  },
  status: null,
  createStatus: null,
};

const UserSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
  },
  extraReducers: {
    //get
    [getUser.pending]: (state, action) => {
      state.status = "pending";
    },
    [getUser.fulfilled]: (state, action) => {
     state.data = action.payload;
     state.status="success"
   
    },

    [getUser.rejected]: (state, action) => {
      state.status = "rejected";
    },

    //delete user
    [deleteUser.pending]: (state, action) => {
      state.status = "pending";
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.data = state.data.filter((item) => item._id !== action.payload);
      state.status = "success";
   
    },

    [getUser.rejected]: (state, action) => {
      state.status = "rejected";
    },

   
  },
});

export default UserSlice.reducer;
