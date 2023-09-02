const express = require("express");
const router = express.Router();

// Get
router.get("/", (req, res) => {
  res.status(200).json({
    message: "Get wishlist item",
  });
});

// Post
router.post("/", (req, res) => {
  res.status(200).json({
    message: "Add wishlist item",
  });
});

// Put
router.put("/:id", (req, res) => {
  res.status(200).json({
    message: `Edit wishlist item ${req.params.id}`,
  });
});

// delete
router.delete("/:id", (req, res) => {
  res.status(200).json({
    message: `Delete wishlist item ${req.params.id}`,
  });
});

module.exports = router;
