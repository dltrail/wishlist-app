import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteWishlistItem,
  editWishlistItem,
} from "../../features/wishlistItem/wishlistItemSlice";
import styles from "./WishlistItem.module.css";
import dayjs from "dayjs";

function WishListItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.wishlistItem}>
      <p className={styles.title}>{item.text}</p>
      <p className={styles.url}>
        Web Link: <a href={item.url}>{item.url}</a>
      </p>
      <span className={styles.datePost}>
        {/* {new Date(item.createdAt).toLocaleString("en-US")} */}
        {dayjs(item.createdAt?.toString()).format("DD-MM-YYYY | HH:mm A")}
      </span>
      <button
        className={styles.btn}
        onClick={() => dispatch(deleteWishlistItem(item._id))}
      >
        x
      </button>
    </div>
  );
}

export default WishListItem;
