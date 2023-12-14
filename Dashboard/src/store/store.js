import { configureStore } from "@reduxjs/toolkit";
import controllerSlice from "../../featureres/Slice/controllerSlice/controllerSlice";
import authSlice from "./Slice/authSlice";

export default configureStore({
  reducer: {
    auth: authSlice,
  },
});
