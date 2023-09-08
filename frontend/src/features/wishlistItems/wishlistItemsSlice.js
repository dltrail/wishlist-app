import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import wishlistItemsService from "./wishlistItemsService";

const initialState = {
  wishlistItems: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const wishlistItemsSlice = createSlice({
  name: "wishlistItems",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    //builder;
    // .addCase(register.pending, (state) => {
    //   state.isLoading = true;
    // })
    // .addCase(register.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.isSuccess = true;
    //   state.user = action.payload;
    // })
    // .addCase(register.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.isSuccess = false;
    //   state.isError = true;
    //   state.message = action.payload;
    //   state.user = null;
    // })
    // .addCase(login.pending, (state) => {
    //   state.isLoading = true;
    // });
  },
});

export const { reset } = wishlistItemsSlice.actions;
export default wishlistItemsSlice.reducer;
