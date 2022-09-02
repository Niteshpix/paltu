import { createSlice } from "@reduxjs/toolkit";
import { getCategories, loginUser, registerUser } from "../services/Apis";

const initialState = {
  token: localStorage.getItem("token"),
  name: "",
  email: "",
  _id: "",
  registerStatus: "",
  registerError: "",
  loginStatus: "",
  loginError: "",
  userLoaded: "",
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadUser(state, action) {
        const token = state.token;
  
        if (token) {
          const user = token;
          return {
            ...state,
            token,
            name: user.name,
            email: user.email,
            _id: user._id,
            userLoaded: true,
          };
        } else return { ...state, userLoaded: true };
      },
      logoutUser(state, action) {
        localStorage.removeItem("token");
  
        return {
          ...state,
          token: "",
          name: "",
          email: "",
          _id: "",
          registerStatus: "",
          registerError: "",
          loginStatus: "",
          loginError: "",
          isAuthUser: "", 

        };
      },
  },

  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      return { ...state, registerStatus: "pending" };
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = action.payload;
        return {
          ...state,
          token: action.payload,
          name: user.name,
          email: user.email,
          _id: user._id,
          registerStatus: "success",

        };
      } else return state;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      return {
        ...state,
        registerStatus: "rejected",
        registerError: action.payload,
      };
    })

    //login
    builder.addCase(loginUser.pending, (state, action) => {
        return { ...state, loginStatus: "pending" };
      });
      builder.addCase(loginUser.fulfilled, (state, action) => {
        if (action.payload) {
          const user = action.payload;
          return {
            ...state,
            token: action.payload,
            name: user.name,
            email: user.email,
            _id: user._id,
            isAdmin: user.isAdmin,
            loginStatus: "success",
            isAuthUser: true, 
          };
        } else return state;
      });
      builder.addCase(loginUser.rejected, (state, action) => {
        return {
          ...state,
          loginStatus: "rejected",
          loginError: action.payload,
        };
      });

      //getCategories
      builder.addCase(getCategories.pending, (state, action) => {
        return {
          ...state,
          getCategoriesStatus: "pending",
        };
      });
      builder.addCase(getCategories.fulfilled, (state, action) => {
        if (action.payload) {
          const user = action.payload;
          return {
            ...state,
            token: action.payload,
            name: user.name,
            email: user.email,
            _id: user._id,
            isAdmin: user.isAdmin,
            getCategoriesStatus: "success",
          };
        } else return state;
      });
      builder.addCase(getCategories.rejected, (state, action) => {
        return {
          ...state,
          getCategoriesStatus: "rejected",
          getCategoriesError: action.payload,
        };
      });
      
}
});



// Action creators are generated for each case reducer function
export const { loadUser, logoutUser } = AuthSlice.actions;

export default AuthSlice.reducer;
