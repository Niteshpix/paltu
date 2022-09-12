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
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (values, { rejectWithValue }) => {
    try {
      const token = await axios.post("login", {
        email: values.email,
        password: values.password,
      });

      localStorage.setItem("token", token.data.token);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//category
export const getCategories = createAsyncThunk(
  "category/categoryFetch",
  async () => {
    try {
      const response = await axios.get("categories");
      return response.data.data;
    } catch (error) {
      console.log(error.response);
    }
  }
);

export const createCategory = createAsyncThunk(
  "category/categoryPost",
  async (values) => {
    let payload = toFormData({
      title: values.title,
      photo: values.photo,
    });
    try {
      const response = await axios.post("categories", payload, setHeaders());
      console.log(response.data.data);
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
      await axios.delete(`categories/${cId}`, setHeaders());
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
      const response = await axios.get("services");
      return response.data.data;
    } catch (error) {
      console.log(error.response);
    }
  }
);

export const createServices = createAsyncThunk(
  "services/servicesPost",
  async (values) => {
    let payload = toFormData({
      title: values.title,
      photo: values.photo,
      description: values.description,
      titleColor: values.titleColor,
    });
    try {
      const response = await axios.post("services", payload, setHeaders());
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
      await axios.delete(`services/${sId}`, setHeaders());
      return sId;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

//get user
export const getUsers = createAsyncThunk("user/UserFetch", async () => {
  try {
    const response = await axios.get("user", setHeaders());
    return response.data.data;
  } catch (error) {
    console.log(error.response);
  }
});

export const getProfile = createAsyncThunk("profile/profileFetch", async () => {
  try {
    const response = await axios.get("profile", setHeaders());

    return response.data.data;
  } catch (error) {
    return console.log(error.message);
  }
});

// editUser
export const EditUser = createAsyncThunk(
  "profile/editProfile",
  async (values, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `user/${values._id} `,
        {
          name: values.name,
          email: values.email,
          phone: values.phone,
        },
        setHeaders()
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const changePassword = createAsyncThunk(
  "change/changePassword",
  async (values, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `change-password `,
        {
          currentPassword: values.currentPassword,
          newPassword: values.newPassword,
          verifyPassword: values.verifyPassword,
        },
        setHeaders()
      );
      console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (uId, { rejectWithValue }) => {
    try {
      await axios.delete(`user/${uId}`, setHeaders());
      return uId;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const UpdateProfilePhoto = createAsyncThunk(
  "profile/profilephoto",
  async (values) => {
    let payload = toFormData({
      photo: values.photo,
    });
    try {
      const response = await axios.post(
        "user/profilePhotoChange",

        payload,
        setHeaders()
      );
      //console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      return error.response.data.message;
    }
  }
);
function toFormData(payload) {
  const formData = new FormData();
  for (let key in payload) {
    formData.append(key, payload[key]);
  }
  return formData;
}

///verified-account
export const VerifiedAccount = createAsyncThunk(
  "verified/verified-account",
  async (values, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `verified-account `,
        {
          email: values.email,
          code: values.code,
        },
        setHeaders()
      );

      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// get User-With-services
export const getUserWithSevice = createAsyncThunk(
  "userservice/UserWithService",
  async (id, { rejectWithValue }) => {
 
    try {
      await axios.get(`user-with-service/${id}`, setHeaders());
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);