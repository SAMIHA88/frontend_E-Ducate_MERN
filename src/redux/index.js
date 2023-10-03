import { configureStore } from '@reduxjs/toolkit'
import userSliceReducer from './userSlice'
import  coursSliceReducer  from './coursSlice'

export const store = configureStore({
    reducer: {
       user:userSliceReducer,
       cours:coursSliceReducer
    },
  })
