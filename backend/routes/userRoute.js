const express = require("express");
const router = express.Router();
const {
  getMe,
  getUsers,
  registerUser,
  loginUser,
} = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleware");

router.get("/", getUsers);
router.post("/register", registerUser);
router.get("/me", protect, getMe);
router.post("/login", loginUser);

module.exports = router;
