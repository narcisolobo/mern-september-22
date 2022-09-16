const mongoose = require("mongoose");

const recordSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required."],
    },
    artist: {
      type: String,
      required: [true, "artist is required."],
    },
    description: {
      type: String,
      required: [true, "description is required."],
    },
    isOwned: Boolean,
    genre1: String,
    genre2: String,
    genre3: String,
  },
  { timestamps: true }
);

const Record = mongoose.model("Record", recordSchema);
module.exports = Record;
