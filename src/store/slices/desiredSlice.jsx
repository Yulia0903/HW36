import { createSlice } from '@reduxjs/toolkit'

const disiredSlice = createSlice({
    name: 'desiredItem',
    initialState: [],
    reducers: {
        addDisiredItem(state, action) {
            state.push(action.payload)
        },
        removeDisiredItem(state, action) {
            return state.filter((item) => item.id !== action.payload.id)
        },
        loadCartDesiredItems(state, action) {
            return action.payload
        },
    },
})

export const { addDisiredItem, removeDisiredItem, loadCartDesiredItems } =
    disiredSlice.actions
export default disiredSlice.reducer
