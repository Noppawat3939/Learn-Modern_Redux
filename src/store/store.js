import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/couterSlice';
import { apiSlice } from "../features/dogs/dog-Slice-Api";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware:(getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiSlice.middleware);
    }
})