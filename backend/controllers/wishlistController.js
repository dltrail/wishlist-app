const asyncHandler = require("express-async-handler");
const WishlistItem = require("../models/wishlistItemModel");
const User = require("../models/userModel");

// @desc Get wishlist items
// @route /api/wishlist
// @access Private
const getWishlist = async (req, res) => {
  const WishlistItems = await WishlistItem.find({ user: req.user.id });
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
    user: req.user.id,
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

  // get the user

  const user = await User.findById(req.user.id);
  //check for user
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  // ensure the logged in user matches the wishlist owner
  if (WishlistItem.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorised");
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
  // get the user

  const user = await User.findById(req.user.id);
  //check for user
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  // ensure the logged in user matches the wishlist owner
  if (singleWishlistItem.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorised");
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
