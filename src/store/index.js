import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import cardReducer from './slices/binSlice'
import desiredReducer from './slices/desiredSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cardReducer,
        desired: desiredReducer,
    },
})
