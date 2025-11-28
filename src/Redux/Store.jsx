import { configureStore } from "@reduxjs/toolkit";
import catSlice from "./Slices/catSlice";
import userSlice from "./Slices/userSlice";
const store = configureStore({
  reducer: {
    mahintha: catSlice,
    User: userSlice,
  },
});

export default store;
