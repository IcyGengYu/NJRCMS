import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const postLoginData = createAsyncThunk(
  'login',
  (args, { dispatch, getState }) => {
    console.log(getState())
  }
)

interface LoginState {
  value: number
}

// Define the initial state using that type
const initialState: LoginState = {
  value: 0
}
export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {}
})
export default loginSlice.reducer
