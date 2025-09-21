import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export interface PageState {
    value: number
}

const initialState: PageState = {
    value: 1
}

export const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setPage } = pageSlice.actions
export const page = (state: RootState) => state.page.value
export default pageSlice.reducer