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

export const createCategory = createAsyncThunk(
  "category/categoryGet",
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

      console.log(response.data);
      return response.data;
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

export const editCategory = createAsyncThunk(
  "category/editCategory",
  async (cat, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${url}/categories/${cat._id}`, {
        title: cat.title,
        photo: cat.photo,
      });
      return response.data;
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
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response);
    }
  }
);
//get user

export const getUser = createAsyncThunk("user/userFetch", async () => {
  try {
    const response = await axios.get(`${url}/user`, setHeaders());

    return response.data;
  } catch (error) {
    console.log(error.response);
  }
});
// editUser
export const EditUser = createAsyncThunk("user/userFetch", async (id) => {
  try {
    // const response = await axios.get(`${url}/profile`, setHeaders());
    const response = await axios.put(`${url}/user/${id}`, setHeaders());
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response);
  }
});

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (cId, { rejectWithValue }) => {
    try {
      await axios.delete(`${url}/user/${cId}`, setHeaders());
      return cId;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getProfile = createAsyncThunk("profile/profileFetch", async () => {
  try {
    const response = await axios.get(`${url}/profile`, setHeaders());
    return response.data.data;
  } catch (error) {
    console.log(error.response);
  }
});

export const UpdateProfilePhoto = createAsyncThunk(
  "user/profilephoto",
  async (values) => {
    try {
      const response = await axios.post(
        `${url}/user/profilePhotoChange`, 
        {
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
