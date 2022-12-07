import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import axios from "axios"

const initialState = {
    order: "",
    shippingDetails: { name: "" },
    paymentDetails: {},
    totalOrderAmount: "",
    cartTotal: "",
    allOrders: [],
    createOrderResponse: ""
}

export const fetchOrders = createAsyncThunk(
    'fetchOrders',

)

export const createOrder = createAsyncThunk(
    'createOrder',

)

export const orderSlice = createSlice({
    name: 'orderSlice',
    initialState,
    reducers: {
        setShippingDetails: (state, action) => {
            // console.log(action.payload)
            state.shippingDetails = action.payload
        },
        setPaymentDetails: (state, action) => {
            // console.log(action.payload)
            state.paymentDetails = action.payload
        },
        setBillAmount: (state, action) => {
            // console.log(action.payload)
            state.totalOrderAmount = action.payload
        },
        setCartTotal: (state, action) => {
            // console.log(action.payload)
            state.cartTotal = action.payload
        },
        deleteOrderState: (state) => {
            state.shippingDetails = {}
            state.paymentDetails = {}
            state.order = ""
            state.billAmount = ""
            state.cartTotal = ""
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
export const { setShippingDetails, setPaymentDetails,
    setBillAmount, deleteOrderState, setCartTotal } = orderSlice.actions

export default orderSlice.reducer
