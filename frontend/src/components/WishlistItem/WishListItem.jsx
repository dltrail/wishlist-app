import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteWishlistItem,
  editWishlistItem,
} from "../../features/wishlistItem/wishlistItemSlice";

import "./WishlistItem.css";
import dayjs from "dayjs";

function WishListItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="wishlist-item">
      <p className="wishlist-item__title">{item.text}</p>
      <p className="wishlist-item__url">
        Web Link: <a href={item.url}>{item.url}</a>
      </p>
      <span className="wishlist-item__datePost">
        {dayjs(item.createdAt?.toString()).format("DD/MM/YYYY")}
      </span>
      <button
        className="btn wishlist-item__delete"
        onClick={() => dispatch(deleteWishlistItem(item._id))}
      >
        x
      </button>
    </div>
  );
}

export default WishListItem;
