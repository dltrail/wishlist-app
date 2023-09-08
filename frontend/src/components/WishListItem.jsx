import React from "react";
import { useDispatch } from "react-redux";
import { deleteWishlistItem } from "../features/wishlistItem/wishlistItemSlice";

function WishListItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div>
      {item.text}
      {item.url}
      {new Date(item.createdAt).toLocaleString("en-US")}
      <button onClick={() => dispatch(deleteWishlistItem(item._id))}>
        Delete
      </button>
    </div>
  );
}

export default WishListItem;
