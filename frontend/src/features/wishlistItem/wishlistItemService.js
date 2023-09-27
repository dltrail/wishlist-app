import axios from "axios";
const API_URL = "https://wishlist-app-backend.vercel.app/api/wishlist/";

const createWishlistItem = async (wishlistItemData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.post(API_URL, wishlistItemData, config);

  return res.data;
};

const deleteWishlistItem = async (wishlistItemId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.delete(API_URL + wishlistItemId, config);

  return res.data;
};

// get user items
const getItems = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.get(API_URL, config);

  return res.data;
};

const wishlistItemService = {
  createWishlistItem,
  getItems,
  deleteWishlistItem,
};

export default wishlistItemService;
