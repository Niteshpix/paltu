import { createSlice } from "@reduxjs/toolkit";
import {
  deleteUser,
  EditUser,
  getProfile,
  UpdateProfilePhoto,
} from "../services/Apis";

const initialState = {
  user: {
    _id: "",
    name: "",
    email: "",
    photo: "",
    data:[]
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
    
    //edit
    [EditUser.pending]: (state, action) => {
      state.status = "pending";
    },
    [EditUser.fulfilled]: (state, action) => {
      state.status = "success";
      const { id, item } = action.payload
      if (!state.user[id]) {
        state.user[id] = []
      }
      state.user[id].push(item)
  

    },
    [EditUser.rejected]: (state, action) => {
      state.status = "rejected";
    },

    //delete user
    [deleteUser.rejected]: (state, action) => {
      state.status = "rejected";
    },

    [deleteUser.pending]: (state, action) => {
      state.status = "pending";
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.status = "success";
    },
    [deleteUser.rejected]: (state, action) => {
      state.status = "rejected";
    },
    //update photo
    [UpdateProfilePhoto.pending]: (state, action) => {
      state.status = "pending";
    },
    [UpdateProfilePhoto.fulfilled]: (state, action) => {
      state.photo = action.payload;
      state.status = "success";
    },
    [UpdateProfilePhoto.rejected]: (state, action) => {
      state.status = "rejected";
    },
   
    
  },
});

export default profileSlice.reducer;