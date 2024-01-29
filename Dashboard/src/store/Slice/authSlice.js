/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */


import { createSlice } from "@reduxjs/toolkit";
import { tokenService, userService } from "../../services/storageService";
const initialState = {
  signedIn: !!tokenService.getToken(),
  user: userService.getUser(),
  show: {
    signIn: true,
    signUp: true,
    logOut: true,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.signedIn = action.payload.status;
    },

    setUser: (state, { payload }) => {
      state.user = payload.user;
      userService.saveUser(payload.user);
    },
    setShow: (state, { payload }) => {
      state.show = { ...state, [action.payload]: true };
    },
    setHide: (state, { payload }) => {
      state.show = { ...state, [action.payload]: false };
    },
    
  },
});

export const { setStatus, setUser, setShow, setHide } = authSlice.actions;


export default authSlice.reducer;
