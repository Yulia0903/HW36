import { createSlice } from '@reduxjs/toolkit'

const cardSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItem(state, action) {
            state.push(action.payload)
        },
        removeItem(state, action) {
            return state.filter((item) => item.id !== action.payload.id)
        },
        loadCartItems(state, action) {
            return action.payload
        },
    },
})

export const { addItem, removeItem, loadCartItems } = cardSlice.actions
export default cardSlice.reducer
