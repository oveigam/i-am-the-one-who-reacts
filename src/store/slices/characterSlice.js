import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setError } from "./errorSlice";

export const fetchCharacterDetail = createAsyncThunk(
    'character/fetchCharacterDetail',
    async (characterId, { dispatch }) => {
        try {
            const { data } = await axios.get(`/characters/${characterId}`)
            dispatch(fetchRandomQuote(data[0].name))
            return data[0]
        } catch (error) {
            // Si hay un error lo mandamos al reducer de errores ya que no lo vamos a tratar de manera especial
            dispatch(setError('apiErrors.fetchCharacterDetail'))
            throw error
        }
    }
)

export const fetchRandomQuote = createAsyncThunk(
    'character/fetchRandomQuote',
    async (characterName) => {
        const { data } = await axios.get('quote/random', { params: { author: characterName } })
        return data.length > 0 ? data[0].quote : ''
    }
)

/**
 * Se encarga de gestionar la info de la pantalla de detalle de personaje
 */
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
        },
        clearQuoteError: (state) => {
            state.quoteError = null
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
            state.isLoadingDetails = false
        },

        [fetchRandomQuote.pending]: (state) => {
            state.quoteError = null
            state.isLoadingQuote = true
        },
        [fetchRandomQuote.fulfilled]: (state, { payload: quote }) => {
            state.quote = quote
            state.isLoadingQuote = false
        },
        [fetchRandomQuote.rejected]: (state) => {
            // Los errores recuperando la quote los gestionamos de manera especial sin pasar por el reducer de error general
            // ya que si falla simplemente queremos mostrar un aviso y no mostrar la frase en vez de no mostrar nada
            state.quoteError = 'apiErrors.quote'
            state.isLoadingQuote = false
        }
    }
})

export const { clearCharacterDetail, clearQuoteError } = characterSlice.actions

export const characterReducer = characterSlice.reducer
