import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import wishlistItemsReducer from "../features/wishlistItems/wishlistItemsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    wishlistItems: wishlistItemsReducer,
  },
});
