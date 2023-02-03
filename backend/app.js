const express = require("express");
const cookieParser = require("cookie-parser");

app = express();
app.use(express.json());
app.use(cookieParser());

const errorMiddleware = require("./middlewares/error");

//routes
const notes = require("./routes/notesRoute");
const user = require("./routes/userRoute");

app.use("/slashNotes", notes);
app.use("/slashNotes/user", user);

//error middleware
app.use(errorMiddleware);

module.exports = app;
