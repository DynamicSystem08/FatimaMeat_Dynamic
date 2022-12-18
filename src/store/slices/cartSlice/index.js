import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: []
}


export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addCartItems: (state, action) => {
            state.cart.push(action.payload)
        },
        updateCartItems: (state, action) => {
            state.cart = action.payload
        },
        removeCartItems: (state) => {
            state.cart = []
        }
    }
})

// Action creators are generated for each case reducer function
export const { addCartItems, updateCartItems, removeCartItems } = cartSlice.actions

export default cartSlice.reducer
