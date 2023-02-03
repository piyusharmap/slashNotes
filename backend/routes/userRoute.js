const express = require("express");
const {
  createUser,
  loginUserName,
  loginEmail,
  logoutUser,
} = require("../controller/userController");

const router = express.Router();

//create new user
router.route("/create").post(createUser);
//login user -- username
router.route("/login").post(loginUserName);
//login user -- email
router.route("/login/email").post(loginEmail);
//logout user
router.route("/logout").get(logoutUser);

module.exports = router;
