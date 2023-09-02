const express = require("express");
const router = express.Router();
const {
  getUser,
  getUsers,
  registerUser,
  loginUser,
} = require("../controllers/userController");

router.get("/", getUsers);
router.post("/register", registerUser);
router.get("/me/:id", getUser);
router.post("/login", loginUser);

module.exports = router;
