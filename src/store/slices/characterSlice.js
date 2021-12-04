import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCharacterDetail = createAsyncThunk(
    'character/fetchCharacterDetail',
    async (characterId, { dispatch }) => {
        const { data } = await axios.get(`/characters/${characterId}`)
        dispatch(fetchRandomQuote(data[0].name))
        return data[0]
    }
)

export const fetchRandomQuote = createAsyncThunk(
    'character/fetchRandomQuote',
    async (characterName) => {
        const { data } = await axios.get('quote/random', { params: { author: characterName } })
        return data.length > 0 ? data[0].quote : ''
    }
)

const characterSlice = createSlice({
    name: 'character',
    initialState: {
        isLoadingDetails: false,
        isLoadingQuote: false
    },
    reducers: {
        clearCharacterDetail: (state) => {
            state.detail = null
            state.quote = ''
        }
    },
    extraReducers: {
        [fetchCharacterDetail.pending]: (state) => {
            state.isLoadingDetails = true
        },
        [fetchCharacterDetail.fulfilled]: (state, { payload: characterDetail }) => {
            state.detail = characterDetail
            state.isLoadingDetails = false
        },
        [fetchCharacterDetail.rejected]: (state) => {
            state.error = 'apiErrors.fetchCharacterDetail'
            state.isLoadingDetails = false
        },

        [fetchRandomQuote.pending]: (state) => {
            state.isLoadingQuote = true
        },
        [fetchRandomQuote.fulfilled]: (state, { payload: quote }) => {
            state.quote = quote
            state.isLoadingQuote = false
        },
        [fetchRandomQuote.rejected]: (state) => {
            state.error = 'apiErrors.quote'
            state.isLoadingQuote = false
        }
    }
})

export const { clearCharacterDetail } = characterSlice.actions

export const characterReducer = characterSlice.reducer
