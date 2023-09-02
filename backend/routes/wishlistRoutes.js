const express = require("express");
const router = express.Router();
const {
  getWishlist,
  addWishlistItem,
  editWishlistItem,
  deleteWishlistItem,
} = require("../controllers/wishlistController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getWishlist).post(protect, addWishlistItem);
router
  .route("/:id")
  .put(protect, editWishlistItem)
  .delete(protect, deleteWishlistItem);

module.exports = router;
