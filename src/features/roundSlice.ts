import { createSlice } from '@reduxjs/toolkit'
import { ButtonOrder } from '../types'
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface roundState {
  answer: ButtonOrder | string
}

const initialState: roundState = {
  answer: '',
}

export const roundSlice = createSlice({
  name: 'round',
  initialState,
  reducers: {
    takeAnswer: (state, action) => {
      console.log('action', action)
      console.log('state', state)
      state.answer = action.payload
    },
    // answer state.answer
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { takeAnswer } = roundSlice.actions

export default roundSlice.reducer