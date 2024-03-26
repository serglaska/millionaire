import { createSlice } from '@reduxjs/toolkit'
import { ButtonOrder } from '../types'
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface RoundState {
  answer: ButtonOrder | string
}

const initialState: RoundState = {
  answer: '',
}

export const roundSlice = createSlice({
  name: 'round',
  initialState,
  reducers: {
    takeAnswer: (state, action) => {
      state.answer = action.payload
    },
    clearRoundState: () => initialState,
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
export const { takeAnswer, clearRoundState } = roundSlice.actions

export default roundSlice.reducer
