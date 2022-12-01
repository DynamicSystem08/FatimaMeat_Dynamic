import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: "",
  allUsers: []
}

export const loginUser = createAsyncThunk(
  'loginUser',
  // async (userData) => {
  //   const response = await axios.post('http://localhost:5000/login-user', userData)
  //   return response.data
  // }
)

export const fetchUsers = createAsyncThunk(
  'fetchUsers',
  // async () => {
  //   const response = await axios.get('http://localhost:5000/get-all-users')
  //   return response.data
  // }
)

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null
    },
  },
  extraReducers: (builder) => {

    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload
    })

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.allUsers = action.payload
    })

  }
})

// Action creators are generated for each case reducer function
export const { logoutUser, getAllUser } = userSlice.actions

export default userSlice.reducer
