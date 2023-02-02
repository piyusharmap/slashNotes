const express = require("express");
const {
  getAllNotes,
  createNote,
  updateNote,
  removeNote,
  getDetails,
} = require("../controller/notesController");

const router = express.Router();

//get all notes
router.route("/notes").get(getAllNotes);

//create new note
router.route("/notes/new").post(createNote);

//update, remove, read particular note
router.route("/notes/:id").put(updateNote).delete(removeNote).get(getDetails);

module.exports = router;
