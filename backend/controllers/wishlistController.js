// @desc Get wishlist items
// @route /api/wishlist
// @access Private
const getWishlist = (req, res) => {
  res.status(200).json({
    message: "Get wishlist item",
  });
};

// @desc Add wishlist item
// @route /api/wishlist
// @access Private
const addWishlistItem = (req, res) => {
  res.status(200).json({
    message: "Add wishlist item",
  });
};

// @desc Edit wishlist item
// @route /api/wishlist/:id
// @access Private
const editWishlistItem = (req, res) => {
  res.status(200).json({
    message: `Edit wishlist item ${req.params.id}`,
  });
};

// @desc Delete wishlist item
// @route /api/wishlist/:id
// @access Private
const deleteWishlistItem = (req, res) => {
  res.status(200).json({
    message: `Delete wishlist item ${req.params.id}`,
  });
};

module.exports = {
  getWishlist,
  addWishlistItem,
  editWishlistItem,
  deleteWishlistItem,
};
