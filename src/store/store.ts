import { configureStore } from '@reduxjs/toolkit'
import reposReducer from './features/repos'
import loadingReducer from './features/loading'
import pageReducer from './features/page'
import totalPagesReducer from './features/totalPages'
import filtersReducer from './features/filters'

export const store = configureStore({
  reducer: {
    repos: reposReducer,
    loading: loadingReducer,
    page: pageReducer,
    totalPages: totalPagesReducer,
    filters: filtersReducer
  }
})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store