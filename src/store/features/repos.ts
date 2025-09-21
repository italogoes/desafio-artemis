import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import type { Repo } from '../../interfaces/IRepo'

export interface ReposState {
    value: Repo[]
}

const initialState: ReposState = {
    value: []
}

export const reposSlice = createSlice({
    name: 'repos',
    initialState,
    reducers: {
        setRepos: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setRepos } = reposSlice.actions
export const repos = (state: RootState) => state.repos.value
export default reposSlice.reducer