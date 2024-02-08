/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createSlice } from '@reduxjs/toolkit'
import { tokenService, userService } from '../../services/storageService'
const user = userService.getUser();
const initialState = {
  signedIn: !!tokenService.getToken(),
  user: user,
  id:user.id,
 
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setStatus: (state, { payload }) => {
      state.signedIn = payload.status
    },

    setUser: (state, { payload }) => {
      state.user = payload.user
      userService.saveUser(payload.user)
    },
    setShow: (state, { payload }) => {
      state.show = { ...state, [action.payload]: true }
    },
    setHide: (state, { payload }) => {
      state.show = { ...state, [action.payload]: false }
    },
    setId: (state, action) => {
      state.id = action.payload;
      console.log("hello " + state.id)
    },
  },
})

export const { setStatus, setUser, setShow, setHide , setId} = authSlice.actions

export default authSlice.reducer
