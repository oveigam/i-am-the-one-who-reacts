import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import characterSearch from './../../util/characterSearch';
import { setError } from "./errorSlice";

export const fetchAllCharacters = createAsyncThunk(
    'characterList/fetchAllCharacters',
    async (payload, { dispatch }) => {
        try {
            const { data } = await axios.get('characters', { params: { category: 'Breaking Bad' } })
            return data
        } catch (error) {
            dispatch(setError('apiErrors.fetchAllCharacters'))
            throw error
        }
    }
)

const characterListSlice = createSlice({
    name: 'characterList',
    initialState: {
        isLoadingCharacters: false,
        characters: [],
        search: '',
        filteredCharacters: []
    },
    reducers: {
        searchCharacters: (state, { payload: search }) => {
            state.search = search
            state.filteredCharacters = characterSearch(search, state.characters)
        },
        clearCharacterSearch: (state) => {
            state.search = ''
            state.filteredCharacters = characterSearch('', state.characters)
        }
    },
    extraReducers: {
        [fetchAllCharacters.pending]: (state) => {
            state.isLoadingCharacters = true
        },
        [fetchAllCharacters.fulfilled]: (state, { payload: characters }) => {
            state.characters = characters
            state.filteredCharacters = characterSearch(state.search, state.characters)
            state.isLoadingCharacters = false
        },
        [fetchAllCharacters.rejected]: (state) => {
            state.isLoadingCharacters = false
        },
    }
})

export const { searchCharacters, clearCharacterSearch } = characterListSlice.actions

export const characterListReducer = characterListSlice.reducer