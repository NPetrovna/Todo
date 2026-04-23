import { createSlice } from '@reduxjs/toolkit'
import type { CounterState } from '../types/User.types'

const initialState: CounterState = {
  name: '',
  mail: '',
  pass: '',
}

export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    changeRegistration: (state, action) => {
      return {...state, ...action.payload}
    },
    clearRegistration: () => {
        return initialState
    }
  },
})

export const { changeRegistration, clearRegistration } = registrationSlice.actions

export default registrationSlice.reducer