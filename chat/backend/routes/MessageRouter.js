const express = require("express");
const Messages = require("../models/Messages");

const messageRouter = express.Router();

messageRouter.get("/", async (req, res) => {
  const messages = await Messages.find().exec();
  res.send({
    messages,
  });
});

messageRouter.post("/getMessage", async (req, res) => {
  try {
    const { from, to } = req.body;
    const messages = await Messages.find({
      users: {
        $all: [from, to],
      },
    }).sort({ updatedAt: 1 });
    res.send({
      messages,
    });
  } catch (err) {
    res.send({
      err,
    });
  }
});

messageRouter.post("/addMessage", async (req, res) => {
  try {
    const { from, to, message } = req.body;
    const data = await Messages.create({
      message,
      users: [from._id, to._id],
      sender: from.username,
      author: from._id,
    });
    if (data) res.send({ message: "Message added successfully." });
    else res.send({ message: "Failed to add message to the database" });
  } catch (err) {
    res.send({
      err: err,
    });
  }
});

module.exports = messageRouter;
