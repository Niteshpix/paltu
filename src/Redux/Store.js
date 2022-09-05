import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './Slices/AuthSlice'
import CategorySlice from './Slices/CategorySlice'
import passwordReset from "../Redux/Slices/ForgetPassSlice"

export const store = configureStore({
  reducer: {
    auth:AuthSlice,
    category:CategorySlice,
    passwordReset:passwordReset
   
  },
})