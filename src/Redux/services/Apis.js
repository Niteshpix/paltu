import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setHeaders, url } from "../../Config/axiosConfig";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (values, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${url}/register`, {
        name: values.name,
        email: values.email,
        password: values.password,
      });

      return token.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (values, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${url}/login`, {
        email: values.email,
        password: values.password,
      });

      localStorage.setItem("token", (token.data.token));

      return token.data;
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getCategories = createAsyncThunk(
  "category/categoryFetch",
  async () => {
    try {
      const response = await axios.get(`${url}/categories`);

      return response.data;
    } catch (error) {
      console.log(error.response);
    }
  }
);

//services
export const getServices = createAsyncThunk(
  "services/servicesFetch",
  async () => {
    try {
      const response = await axios.get(`${url}/services`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response);
    }
  }
);

export const getUser = createAsyncThunk("user/userFetch", async () => {
  try {
    const response = await axios.get(`${url}/user`, setHeaders());
    

    return response.data;
  } catch (error) {
    console.log(error.response);
  }
});

export const getProfile = createAsyncThunk("profile/profileFetch", async () => {
  try {
    const response = await axios.get(`${url}/profile`, setHeaders());
   
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.log(error.response);
  }
});
