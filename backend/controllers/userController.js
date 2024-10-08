const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

// @desc register (add) a new user
// @route /api/users/register
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  //  check id all fileds have text entered
  if ((!name, !email, !password)) {
    res.status(400);
    throw new Error("Please enter all fields");
  }

  // check if user actually exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("An account with this email adress already exists");
  }

  // hash the password
  // generate a salt 10 is default
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // create the new user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
  //
});

const getMe = asyncHandler(async (req, res) => {
  const { _id, name, email } = await User.findById(req.user.id);
  res.status(200).json({ _id: _id, name, email });
});

// @desc Get individual user data
// @route /api/users/me:id
// @access Private
const getUser = asyncHandler(async (req, res) => {
  const thisUser = await User.findById(req.params.id);
  if (!thisUser) {
    res.status(400);
    throw new Error(
      "Sorry we can't find your account. Are you sure it exists?"
    );
  }

  res.status(200).json(thisUser);
});

// @desc login user
// @route /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  // check for user email
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
  // res.json({ message: "logged in" });
});

// @desc Get users
// @route /api/users
// @access Private
const getUsers = asyncHandler(async (req, res) => {
  const Users = await User.find();
  res.status(200).json(Users);
});

// Generate JWT
// Assigns new token with user id that expires in 30 days
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  getUser,
  getUsers,
  registerUser,
  loginUser,
  getMe,
};
