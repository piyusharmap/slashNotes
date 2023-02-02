const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Note title missing"],
    maxLength: [80, "Title Lenght can't exceed 80 characters"],
  },

  content: {
    type: String,
    required: false,
    maxLength: [250, "Title content can't exceed 250 characters"],
  },

  category: {
    type: String,
    required: [true, "Note category missing"],
  },

  status: {
    type: String,
    default: "Active",
    enum: ["Active", "Inactive"],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Note", noteSchema);
