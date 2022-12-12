import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { registerUser, signinUser, signOutUser } from '../../../config/firebase'

const initialState = {
  user: "",
  email: "",
  allUsers: []
}

export const createUser = createAsyncThunk(
  'createUser',
  async (data) => {
    const response = await registerUser(data)
    return response
  }
)

export const loginUser = createAsyncThunk(
  'loginUser',
  async (data) => {
    const response = await signinUser(data)
    return response
  }
)

// export const logoutUser = createAsyncThunk(
//   'loginUser',
//   async (data) => {
//     const response = await signinUser(data)
//     return response
//   }
// )

// export const setReduxUser = createAsyncThunk(
//   'setReduxUser',
//   async (data) => {

//     return data
//   }
// )

export const fetchUsers = createAsyncThunk(
  'fetchUsers',
  // async () => {
  //   const response = await axios.get('http://localhost:5000/get-all-users')
  //   return response.data
  // }
)

// export const emailSupportTeam = createAsyncThunk(
//   'emailSupportTeam',
//   async (data) => {
//     const message = await "Successfully recorded"
//     return { error: false, message: message }
//   }
// )

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {

    setReduxUser: (state, action) => {
      state.user = action.payload
    },

    logoutUser: (state) => {
      state.user = null
    },

    emailSupportTeam: (state, action) => {
      state.email = action.payload
      return { error: false, message: "Success" }
    },

  },

  extraReducers: (builder) => {

    builder.addCase(createUser.fulfilled, (state, action) => {
      state.user = action.payload.data
    })

    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload.data
    })

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.allUsers = action.payload
    })

  }
})

// Action creators are generated for each case reducer function
export const { logoutUser, getAllUser, emailSupportTeam, setReduxUser } = userSlice.actions

export default userSlice.reducer
