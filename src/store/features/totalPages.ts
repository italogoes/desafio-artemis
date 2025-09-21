import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export interface TotalPagesState {
    value: number
}

const initialState: TotalPagesState = {
    value: 1
}

export const totalPagesSlice = createSlice({
    name: 'totalPages',
    initialState,
    reducers: {
        setTotalPages: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setTotalPages } = totalPagesSlice.actions
export const totalPages = (state: RootState) => state.totalPages.value
export default totalPagesSlice.reducer