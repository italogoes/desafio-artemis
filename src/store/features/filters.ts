import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export interface FiltersState {
    value: "updated" | "stars" | "forks" | "help-wanted-issues" | undefined
}

const initialState: FiltersState = {
    value: undefined
}

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFilters: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setFilters } = filtersSlice.actions
export const filters = (state: RootState) => state.filters.value
export default filtersSlice.reducer