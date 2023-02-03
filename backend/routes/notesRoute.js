const express = require("express");
const {
  getAllNotes,
  createNote,
  updateNote,
  removeNote,
  getDetails,
} = require("../controller/notesController");
const { isAuthenticateUser } = require("../middlewares/auth");

const router = express.Router();

//get all notes
router.route("/notes").get(isAuthenticateUser, getAllNotes);

//create new note
router.route("/notes/new").post(isAuthenticateUser, createNote);

//update, remove, read particular note
router
  .route("/notes/:id")
  .put(isAuthenticateUser, updateNote)
  .delete(isAuthenticateUser, removeNote)
  .get(isAuthenticateUser, getDetails);

module.exports = router;
