const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.isAuthenticateUser = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler("Login to access", 401));
  }

  const decodeData = jwt.verify(token, process.env.JWT_KEY);

  req.user = await User.findById(decodeData.id);

  next();
});
