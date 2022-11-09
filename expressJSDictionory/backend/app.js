const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const Word = require("./models/Words");

const port = 8000;

app.use(cors());
app.use(express.json());

const MONGO_URL = "mongodb://localhost:27017/translations";

mongoose.connect(MONGO_URL);

const connection = mongoose.connection;

app.get("/:word", async (req, res) => {
  const words = await Word.find().lean();
  req.params.word = req.params.word.toLowerCase();
  let result;
  words.forEach((word) => {
    if (word.english == req.params.word) {
      result = { [word.english]: word.mongolian };
    }
  });
  result ? res.send(result) : res.send("Word not found");
});
app.post("/add_word", async (req, res) => {
  const { mongolian, english } = req.body;
  const word = await Word.create({
    mongolian: mongolian,
    english: english,
  });
  res.send(word);
});

app.delete("/delete_word", async (req, res) => {
  const { english } = req.body;
  const word = await Word.findOne({ _english: english }).exec();
  let message;
  if (!word) {
    message = "User not found";
  } else {
    word.delete();
    message = "User successfully deleted";
  }
  res.send({
    message: message,
  });
});

app.put("/edit_word", async (req, res) => {
  const { english, mongolian } = req.body;
  const word = await Word.findOne({ english: english }).exec();
  if (!word)
    res.send({
      message: "Word not found",
    });
  else {
    word.mongolian = mongolian;
    word.save();
    res.send({ message: "success" });
  }
});

connection.once("open", () => {
  console.log("Connection open");
});

app.listen(port, () => {
  console.log(`Web server listening on ${port} `);
});
