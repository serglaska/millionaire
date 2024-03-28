import { createSlice } from '@reduxjs/toolkit'

import { ButtonOrder } from '../types'

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
  },
})

export const { takeAnswer, clearRoundState } = roundSlice.actions

export default roundSlice.reducer
