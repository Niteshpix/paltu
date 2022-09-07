import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './Slices/AuthSlice'
import CategorySlice from './Slices/CategorySlice'
import passwordReset from "../Redux/Slices/ForgetPassSlice"
import ServiceSlice from './Slices/ServiceSlice'
import profileSlice from './Slices/profileSlice'

export const store = configureStore({
  reducer: {
    auth:AuthSlice,
    category:CategorySlice,
    services:ServiceSlice,
    passwordReset:passwordReset,
    profile:profileSlice,
    
   
  },
})