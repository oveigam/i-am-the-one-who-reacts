import { createSlice } from "@reduxjs/toolkit";

/**
 * Reducer que se encargara de gestionar el estado de error global.
 * 
 * Con esto consigo tener en la store un error global donde puedo enviar 
 * los errores que no quiero gestionar de manera individual y manejarlos de manera generica.
 * 
 * En el caso de esta aplicacion, si tengo un error global mostrare una pagina generica de error, 
 * indicando el error al usario el error y ofreciendole recargar la pagina.
 */
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