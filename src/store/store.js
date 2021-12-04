import { configureStore } from "@reduxjs/toolkit";
import { characterListReducer } from "./slices/characterListSlice";
import { characterReducer } from "./slices/characterSlice";

const store = configureStore({
    reducer: {
        characterList: characterListReducer,
        character: characterReducer
    }
})

export default store