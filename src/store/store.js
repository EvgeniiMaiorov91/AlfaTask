import { configureStore } from '@reduxjs/toolkit'
import personsReducer from './personsSlice'

export const store = configureStore({
  reducer: {
      persons : personsReducer
  },
})