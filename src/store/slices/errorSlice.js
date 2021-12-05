import { createSlice } from "@reduxjs/toolkit";


const errorSlice = createSlice({
    name: 'error',
    initialState: {
        error: null
    },
    reducers: {
        setError: (state, { payload: error }) => {
            state.error = error
        },
        clearError: (state) => {
            state.error = null
        }
    }
})

export const { setError, clearError } = errorSlice.actions

export const errorReducer = errorSlice.reducer