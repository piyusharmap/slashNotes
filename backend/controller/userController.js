const User = require("../models/userModel");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");
const sendToken = require("../utils/jwtToken");

//create user
exports.createUser = catchAsyncErrors(async (req, res, next) => {
  const { username, name, email, password } = req.body;

  const user = await User.create({
    username,
    name,
    email,
    password,
  });

  sendToken(user, 200, res);
});

//user login using username
exports.loginUserName = catchAsyncErrors(async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return next(new ErrorHandler("Please enter valid Email and Password", 400));
  }

  const user = await User.findOne({ username }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Wrong Username or Password", 401));
  }

  const isPasswordMatch = user.comparePassword(password);

  if (!isPasswordMatch) {
    return next(new ErrorHandler("Wrong Username or Password", 401));
  }

  sendToken(user, 200, res);
});

//user login using email
exports.loginEmail = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Please enter valid Email and Password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Wrong Username or Password", 401));
  }

  const isPasswordMatch = user.comparePassword(password);

  if (!isPasswordMatch) {
    return next(new ErrorHandler("Wrong Username or Password", 401));
  }

  sendToken(user, 200, res);
});

//user logout
exports.logoutUser = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});
