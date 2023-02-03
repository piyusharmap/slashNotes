const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Note title missing"],
    maxLength: [80, "Title can't exceed 80 characters"],
  },

  content: {
    type: String,
    required: false,
    maxLength: [250, "Content can't exceed 250 characters"],
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

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Note", noteSchema);
