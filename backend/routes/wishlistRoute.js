const express = require("express");
const router = express.Router();
const {
  getWishlist,
  addWishlistItem,
  editWishlistItem,
  deleteWishlistItem,
} = require("../controllers/wishlistController");

// Using route chaining
router.route("/").get(getWishlist).post(addWishlistItem);
router.route("/:id").put(editWishlistItem).delete(deleteWishlistItem);

module.exports = router;
