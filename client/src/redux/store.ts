import { configureStore } from '@reduxjs/toolkit'
import registrationReduce from './reg.slice'

export const store = configureStore({
  reducer: {
    registration: registrationReduce,
  },
})
