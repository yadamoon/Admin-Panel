import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slice/authSlice";

export default configureStore({
  reducer: {
    auth: authSlice,
  },
});
