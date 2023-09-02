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

  const singleWishlistItem = await WishlistItem.create({
    text: req.body.text,
  });

  res.status(200).json(singleWishlistItem);
});

// @desc Edit wishlist item
// @route /api/wishlist/:id
// @access Private
const editWishlistItem = asyncHandler(async (req, res) => {
  const singleWishlistItem = await WishlistItem.findById(req.params.id);
  if (!singleWishlistItem) {
    res.status(400);
    throw new Error("Item not found");
  }

  const updatedsingleWishlistItem = await WishlistItem.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedsingleWishlistItem);
});

// @desc Delete wishlist item
// @route /api/wishlist/:id
// @access Private
const deleteWishlistItem = asyncHandler(async (req, res) => {
  const singleWishlistItem = await WishlistItem.findById(req.params.id);

  if (!singleWishlistItem) {
    res.status(400);
    throw new Error("Item not found");
  }
  await WishlistItem.deleteOne();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getWishlist,
  addWishlistItem,
  editWishlistItem,
  deleteWishlistItem,
};
