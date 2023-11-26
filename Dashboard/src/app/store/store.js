import { configureStore } from "@reduxjs/toolkit";
import controllerSlice from "../../Features/Slice/controllerSlice/controllerSlice";

export default configureStore({
  reducer: {
    controller: controllerSlice,
  },
});
