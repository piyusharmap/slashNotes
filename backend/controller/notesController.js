const Note = require("../models/noteModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const ApiFeatures = require("../utils/apiFeatures");

//get all notes
exports.getAllNotes = catchAsyncErrors(async (req, res) => {
  const apiFeature = new ApiFeatures(
    Note.find({ user: req.user.id }),
    req.query
  ).filter();
  const notes = await apiFeature.query;

  res.status(200).json({
    success: "true",
    notes,
  });
});

//get note details
exports.getDetails = catchAsyncErrors(async (req, res, next) => {
  const note = await Note.findById(req.params.id);

  if (!note) {
    return next(new ErrorHandler("Note not available", 500));
  }

  res.status(200).json({
    success: true,
    note,
  });
});

//create note
exports.createNote = catchAsyncErrors(async (req, res, next) => {
  req.body.user = req.user.id;

  const note = await Note.create(req.body);

  res.status(201).json({
    success: true,
    note,
  });
});

//update note
exports.updateNote = catchAsyncErrors(async (req, res, next) => {
  let note = await Note.findById(req.params.id);

  if (!note) {
    return next(new ErrorHandler("Note not available", 500));
  }

  note = await Note.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    note,
  });
});

//remove note
exports.removeNote = catchAsyncErrors(async (req, res, next) => {
  const note = await Note.findById(req.params.id);

  if (!note) {
    return next(new ErrorHandler("Note not available", 500));
  }

  await note.remove();

  res.status(200).json({
    success: true,
    message: "Note removed successfully",
  });
});
