import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import generatedToken from "../utils/generateToken.js";

// @desc    Auth User & get Token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generatedToken(res, user._id);

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email and password");
  }
});

// @desc    Register User
// @route   POST /api/users
// @access  Private
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generatedToken(res, user._id);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      password: user.password,
      isAdmin: user.isAdmin,
    });
  }
});

// @desc    Logout User / clear cookies
// @route   POST /api/users/logout
// @access  Private
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "Logged out successfully" });
});

export { authUser, registerUser, logoutUser };
