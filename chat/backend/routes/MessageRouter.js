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
    console.log(req.body);
    const { from, to, message } = req.body;
    const data = await Messages.create({
      message,
      users: [from, to],
      sender: from,
      author: "636a0f094687a1681c8d8db4",
    });
    console.log(data);
    if (data) return res.json({ message: "Message added successfully." });
    else return res.json({ message: "Failed to add message to the database" });
  } catch (err) {
    console.log("this is an error");
    res.send({
      err: err,
    });
  }
});

module.exports = messageRouter;
