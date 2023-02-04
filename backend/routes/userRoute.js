const express = require("express");
const {
  createUser,
  loginUserName,
  loginEmail,
  logoutUser,
  forgotPassword,
  resetPassword,
  getUserDetails,
  updateUserPassword,
} = require("../controller/userController");
const { isAuthenticateUser } = require("../middlewares/auth");

const router = express.Router();

//create new user
router.route("/create").post(createUser);
//login user -- username
router.route("/login").post(loginUserName);
//login user -- email
router.route("/login/email").post(loginEmail);
//logout user
router.route("/logout").get(logoutUser);
//forgor password
router.route("/password/forgot").post(forgotPassword);
//reset password
router.route("/password/reset/:token").put(resetPassword);
//get user details
router.route("/details").get(isAuthenticateUser, getUserDetails);
//update password
router.route("/password/update").post(isAuthenticateUser, updateUserPassword);

module.exports = router;
