import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { registerUser, signinUser } from '../../../config/firebase'

const initialState = {
  user: "",
  allUsers: []
}

export const createUser = createAsyncThunk(
  'createUser',
  async (data) => {
    const response = await signinUser(data)
    return response
  }
)

export const loginUser = createAsyncThunk(
  'loginUser',
  async (data) => {
    const response = await signinUser(data)
    console.log(response)
    return response
  }
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

    builder.addCase(createUser.fulfilled, (state, action) => {
      state.user = action.payload
    })

    builder.addCase(loginUser.fulfilled, (state, action) => {
      console.log(action.payload)
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
