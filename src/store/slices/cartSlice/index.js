import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: []
}

export const fetchOrders = createAsyncThunk(
    'fetchOrders',
    // async () => {
    //     const response = await axios.get('http://localhost:5000/get-all-orders')
    //     return response.data
    // }
)

export const createOrder = createAsyncThunk(
    'createOrder',
    // async (data) => {
    //     const response = await axios.post('http://localhost:5000/create-order', { data })
    //     console.log(response)
    //     return response
    // }
)

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addCartItems: (state, action) => {
            // console.log(action.payload)
            state.cart.push(action.payload)
        },
        updateCartItems: (state, action) => {
            // console.log(action.payload)
            state.cart = action.payload
        },
        removeCartItems: (state) => {
            state.cart = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchOrders.fulfilled, (state, action) => {
            state.allOrders = action.payload
        })
        builder.addCase(createOrder.fulfilled, (state, action) => {
            state.createOrderResponse = action.payload
        })
    },
})

// Action creators are generated for each case reducer function
export const { addCartItems, updateCartItems, removeCartItems } = cartSlice.actions

export default cartSlice.reducer
