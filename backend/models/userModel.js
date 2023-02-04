const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is missing"],
    maxLength: [20, "Username can't exceed 20 characters"],
    minLenght: [4, "Username should contain atleast 4 characters"],
    unique: true,
  },

  name: {
    type: String,
    required: [true, "Name is missing"],
    maxLength: [30, "Name can't exceed 30 characters"],
    minLength: [4, "Name should contain atleast 4 characters"],
  },

  email: {
    type: String,
    requried: [true, "Email is missing"],
    unique: true,
    validate: [validator.isEmail, "Please enter a valid Email"],
  },

  password: {
    type: String,
    requried: [true, "Password missing"],
    maxLength: [10, "Password can't exceed 10 characters"],
    minLength: [6, "Password should contain atleast 6 characters"],
    select: false,
  },

  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

//hash password before save
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = bcrypt.hashSync(this.password, 10);
});

//jwt token
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_KEY, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

//compare password
userSchema.methods.comparePassword = function (enteredPassword) {
  return bcrypt.compareSync(enteredPassword, this.password);
};

//generate password reset token
userSchema.methods.getResetPasswordToken = function () {
  //generate token
  const resetToken = crypto.randomBytes(20).toString("hex");

  //hash reset password token and add to user schema
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

  return resetToken;
};

module.exports = mongoose.model("User", userSchema);
