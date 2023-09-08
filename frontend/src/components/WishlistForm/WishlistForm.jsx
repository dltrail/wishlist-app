import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createWishlistItem } from "../../features/wishlistItem/wishlistItemSlice";

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
    <section className="form">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="form-control"
          id="text"
          name="text"
          value={text}
          placeholder="Enter your text"
          onChange={onChange}
        />
        <input
          type="text"
          className="form-control"
          id="url"
          name="url"
          value={url}
          placeholder="Enter your url"
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
