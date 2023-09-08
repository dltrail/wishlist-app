import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import wishlistItemService from "./wishlistItemService";

const initialState = {
  wishlistItems: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// create wishlist item
export const createWishlistItem = createAsyncThunk(
  "wishlistItem/create",
  async (wishlistItemData, thunkAPI) => {
    try {
      // get the user token from the user srate
      const token = thunkAPI.getState().auth.user.token;
      return await wishlistItemService.createWishlistItem(
        wishlistItemData,
        token
      );
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// get user wishlistItems
export const getItems = createAsyncThunk(
  "wishlistItem/getAll",
  async (_, thunkAPI) => {
    try {
      // get the user token from the user srate
      const token = thunkAPI.getState().auth.user.token;
      return await wishlistItemService.getItems(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// delete wishlist item
export const deleteWishlistItem = createAsyncThunk(
  "wishlistItem/delete",
  async (id, thunkAPI) => {
    try {
      // get the user token from the user srate
      const token = thunkAPI.getState().auth.user.token;
      return await wishlistItemService.deleteWishlistItem(id, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const wishlistItemSlice = createSlice({
  name: "wishlistItem",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createWishlistItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createWishlistItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.wishlistItems.push(action.payload);
        state.message = "";
      })
      .addCase(createWishlistItem.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(deleteWishlistItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteWishlistItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "";
        state.wishlistItems = state.wishlistItems.filter(
          (item) => item._id !== action.payload.id
        );
      })
      .addCase(deleteWishlistItem.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.wishlistItems = action.payload;
      })
      .addCase(getItems.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = wishlistItemSlice.actions;
export default wishlistItemSlice.reducer;
