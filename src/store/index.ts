import { configureStore } from '@reduxjs/toolkit'

import levelReducer from '../features/levelSlice'
import roundReducer from '../features/roundSlice'


export const store = configureStore({
  reducer: {
    level: levelReducer,
    round: roundReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch