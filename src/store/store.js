import { configureStore } from "@reduxjs/toolkit";
import { characterListReducer } from "./slices/characterListSlice";
import { characterReducer } from "./slices/characterSlice";
import { errorReducer } from "./slices/errorSlice";

const store = configureStore({
    reducer: {
        error: errorReducer,
        characterList: characterListReducer,
        character: characterReducer
    }
})

export default store