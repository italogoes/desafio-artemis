import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export interface LoadingState {
    value: boolean
}

const initialState: LoadingState = {
    value: false
}

export const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setLoading } = loadingSlice.actions
export const loading = (state: RootState) => state.loading.value
export default loadingSlice.reducer