import { combineReducers } from '@reduxjs/toolkit'

import userReducer from './slices/userSlice'
import orderReducer from './slices/orderSlice'
import cartReducer from './slices/cartSlice'

export default combineReducers({
    userReducer,
    // orderReducer,
    cartReducer
})
