import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createOrderFirebase, getAllOrders, getCurrentUserOrders } from '../../../config/firebase'
// import axios from "axios"

const initialState = {
    order: "",
    shippingDetails: { name: "" },
    paymentDetails: {},
    totalOrderAmount: "",
    cartTotal: "",
    allOrders: [],
    currentUserOrders: [],
    createOrderResponse: ""
}

export const fetchOrders = createAsyncThunk(
    'fetchOrders',
    async () => {
        const result = await getAllOrders()

        if (!result.error) {
            return result.data
        }
        else {
            console.log(result.message)
        }
    }
)

export const fetchCurrentUserOrders = createAsyncThunk(
    'fetchCurrentUserOrders',
    async (data) => {
        const result = await getCurrentUserOrders(data)
        if (!result.error) {
            return result.data
        }
        else {
            console.log(result.message)
        }
    }
)

export const createOrder = createAsyncThunk(
    'createOrder',
    async (data) => {
        const res = await createOrderFirebase(data)
        return res
    }
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
        builder.addCase(fetchCurrentUserOrders.fulfilled, (state, action) => {
            state.allOrders = action.payload
        })
    },
})

// Action creators are generated for each case reducer function
export const { setShippingDetails, setPaymentDetails,
    setBillAmount, deleteOrderState, setCartTotal } = orderSlice.actions

export default orderSlice.reducer
