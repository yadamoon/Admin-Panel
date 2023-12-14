import { createSlice } from "@reduxjs/toolkit";

export const controllerSlice = createSlice({
  name: "auth",
  initialState: [],
  reducers: {
    logout: (state, actions) => {
      console.log("logout fila");
    },
  },
});
// this is for dispatch
export const { logout } = controllerSlice.actions;

// this is for configureStore

export default controllerSlice.reducer;
