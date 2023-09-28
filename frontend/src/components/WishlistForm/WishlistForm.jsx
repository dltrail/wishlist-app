import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createWishlistItem } from "../../features/wishlistItem/wishlistItemSlice";

import "./WishlistForm.css";

function WishlistForm() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    text: "",
    url: "",
  });

  const { text, url } = formData;

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const wishlistItemData = {
      text,
      url,
    };

    dispatch(createWishlistItem(wishlistItemData));
  };

  return (
    <section className="wishlist form_container">
      <p>Add a new item</p>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="form_container__control"
          id="text"
          name="text"
          value={text}
          placeholder="Text"
          onChange={onChange}
        />
        <input
          type="text"
          className="form_container__control"
          id="url"
          name="url"
          value={url}
          placeholder="Url"
          onChange={onChange}
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

export default WishlistForm;
