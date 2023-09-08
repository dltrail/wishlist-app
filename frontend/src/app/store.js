import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import wishlistItemReducer from "../features/wishlistItem/wishlistItemSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    wishlistItem: wishlistItemReducer,
  },
});
