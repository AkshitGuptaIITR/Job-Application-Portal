import { configureStore } from "@reduxjs/toolkit";
import application from "./applicationSlice";

const store = configureStore({
  reducer: {
    application,
  }
})

export default store;
