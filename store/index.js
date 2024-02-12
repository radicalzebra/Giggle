import { configureStore } from '@reduxjs/toolkit'
import { NoteReducer } from './NoteSlice'
import { OverlayReducer } from './OverlaySlice'


export default store = configureStore({
  reducer: {
    note:NoteReducer,
    overlay:OverlayReducer
  },
})

