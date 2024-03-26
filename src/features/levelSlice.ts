import { createSlice } from '@reduxjs/toolkit'

export interface LevelState {
  question: number
  totalScore: string
}

const initialState: LevelState = {
  question: 0,
  totalScore: '$0',
}

export const levelSlice = createSlice({
  name: 'level',
  initialState,
  reducers: {
    incrementLevel: (state) => {
      state.question += 1
    },
    updateTotalScore: (state, action) => {
      state.totalScore = action.payload
    },
    clearLevelState: () => initialState,
  },
})

export const { incrementLevel, updateTotalScore, clearLevelState } = levelSlice.actions

export default levelSlice.reducer
