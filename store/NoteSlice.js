import { CreateSlice, createSlice } from "@reduxjs/toolkit";


const NoteSlice = createSlice({
   name:"NoteSlice",
   initialState:{notes:[1]},
   reducers:{

      pushNotes(state) {
        state.notes.push(state.notes[state.notes.length - 1] + 1)
      }
   }
})

export const {reducer : NoteReducer , actions : NoteActions} = NoteSlice