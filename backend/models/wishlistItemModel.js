// defining all the resources going into  the app
const mongoose = require("mongoose");

const wishlistItemSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User", // associates user with wishlist
    },
    text: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  {
    // cauto create updated at and created at timestamps
    timestamps: true,
  }
);

module.exports = mongoose.model("WishlistItem", wishlistItemSchema);
