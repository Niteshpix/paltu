import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './Slices/AuthSlice'
import CategorySlice from './Slices/CategorySlice'

export const store = configureStore({
  reducer: {
    auth:AuthSlice,
    category:CategorySlice,
  },
})