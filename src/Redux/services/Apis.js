import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios";
import {  setHeaders, url } from "../../Config/axiosConfig";

export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async (values, { rejectWithValue }) => {
      try {
        const token = await axios.post(`${url}/register`, {
          name: values.name,
          email: values.email,
          password: values.password,
        });
  
        localStorage.setItem("token", token.data);
  
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
  
        localStorage.setItem("token", JSON.stringify(token.data));

        return token.data;
      } catch (error) {
        console.log(error.response);
        return rejectWithValue(error.response.data);
      }
    }
  );

  export const reqPasswordOtp = createAsyncThunk(
    "auth/send-email-for-forgot-password",
    async ( values ,{ rejectWithValue }) => {
      try {
        const token = await axios.post("http://localhost:4000/api/send-email-for-forgot-password",{
         
          email: values.email,
          
        });
        console.log(token)    
         localStorage.setItem("token", JSON.stringify(token.data));
  

        return token.data;
      } catch (error) {
        console.log(error.response);
        return rejectWithValue(error.response.data);
      }
    }
  );