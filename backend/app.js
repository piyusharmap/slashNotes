const express = require("express");

app = express();
app.use(express.json());

const errorMiddleware = require("./middlewares/error");

//routes
const notes = require("./routes/notesRoute");

app.use("/slashNotes", notes);

//error middleware
app.use(errorMiddleware);

module.exports = app;
