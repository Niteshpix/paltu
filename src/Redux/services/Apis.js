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

      localStorage.setItem("token", token.data.token);

      return token.data;
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error.response.data);
    }
  }
);


//category
export const getCategories = createAsyncThunk(
  "category/categoryFetch",
  async () => {
    try {
      const response = await axios.get(`${url}/categories`);
      return response.data.data;
    } catch (error) {
      console.log(error.response);
    }
  }
);

export const createCategory = createAsyncThunk(
  "category/categoryPost",
  async (values) => {
    try {
      const response = await axios.post(
        `${url}/categories`,
        {
          title: values.title,
          photo: values.photo,
        },
        setHeaders()
      );
      //console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      console.log(error.response);
    }
  }
);

export const deleteCategory = createAsyncThunk(
  "category/deleteCategory",
  async (cId, { rejectWithValue }) => {
    try {
      await axios.delete(`${url}/categories/${cId}`, setHeaders());
      return cId;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

//services
export const getServices = createAsyncThunk(
  "services/servicesFetch",
  async () => {
    try {
      const response = await axios.get(`${url}/services`);
      //console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      console.log(error.response);
    }
  }
);

export const createServices = createAsyncThunk(
  "services/servicesPost",
  async (values) => {
    try {
      const response = await axios.post(
        `${url}/services`,
        {
          title: values.title,
          photo: values.photo,
        },
        setHeaders()
      );
      console.log(response.data);
      return response.data.data;
    } catch (error) {
      console.log(error.response);
    }
  }
);

export const deleteService = createAsyncThunk(
  "service/deleteService",
  async (sId, { rejectWithValue }) => {
    try {
      await axios.delete(`${url}/services/${sId}`, setHeaders());
      return sId;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);


//get user
export const getUser = createAsyncThunk("user/userFetch", async () => {
  try {
    const response = await axios.get(`${url}/user`, setHeaders());

    return response.data.data;
  } catch (error) {
    console.log(error.response);
  }
});


// editUser
export const EditUser = createAsyncThunk("user/userFetch", async (id) => {
  try {
    const response = await axios.put(`${url}/user/${id}`, setHeaders());
    return response.data.data;
  } catch (error) {
    console.log(error.response);
  }
});

export const getProfile = createAsyncThunk("profile/profileFetch", async () => {
  try {
    const response = await axios.get(`${url}/profile`, setHeaders());
    return response.data.data;
  } catch (error) {
    console.log(error.response);
  }
});
