// defining all the resources going into  the app
const mongoose = require("mongoose");

const wishlistItemSchema = mongoose.Schema(
  {
    text: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  {
    // cauto create updated at and created at timestamps
    timeStamps: true,
  }
);

module.exports = mongoose.model("WishlistItem", wishlistItemSchema);
