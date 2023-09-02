const asyncHandler = require("express-async-handler");
const WishlistItem = require("../models/wishlistItemModel");

// @desc Get wishlist items
// @route /api/wishlist
// @access Private
const getWishlist = async (req, res) => {
  const WishlistItems = await WishlistItem.find();
  res.status(200).json(WishlistItems);
};

// @desc Add wishlist item
// @route /api/wishlist
// @access Private
const addWishlistItem = asyncHandler(async (req, res) => {
  console.log(req.body);
  if (!req.body.text) {
    res.status(400);
    // Express error handler
    throw new Error("Please add in a text field");
  }

  const wishlistItem = await WishlistItem.create({
    text: req.body.text,
  });

  res.status(200).json(wishlistItem);
});

// @desc Edit wishlist item
// @route /api/wishlist/:id
// @access Private
const editWishlistItem = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Edit wishlist item ${req.params.id}`,
  });
});

// @desc Delete wishlist item
// @route /api/wishlist/:id
// @access Private
const deleteWishlistItem = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Delete wishlist item ${req.params.id}`,
  });
});

module.exports = {
  getWishlist,
  addWishlistItem,
  editWishlistItem,
  deleteWishlistItem,
};
