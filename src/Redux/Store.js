import { configureStore } from '@reduxjs/toolkit'

import AuthSlice from './Slices/AuthSlice'
 import passwordReset from "../Redux/Slices/ForgetPassSlice"
export const store = configureStore({
  reducer: {
    auth:AuthSlice,
    passwordReset:passwordReset
   
  },
})