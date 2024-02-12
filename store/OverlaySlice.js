import { CreateSlice, createSlice } from "@reduxjs/toolkit";


const OverlaySlice = createSlice({
   name:"OverlaySlice",
   initialState:{show:false},
   reducers:{

      showOverlay(state,action) {
        state.show = action.payload ?? !state.show
      }
   }
})

export const {reducer : OverlayReducer , actions : OverlayActions} = OverlaySlice