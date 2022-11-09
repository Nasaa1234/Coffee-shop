const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const WordSchema = new Schema({
  english: String,
  mongolian: String,
});

const Word = model("Word", WordSchema);

module.exports = Word;
