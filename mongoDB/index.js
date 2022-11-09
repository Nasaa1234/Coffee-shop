const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const MONGOOS_URL = "mongodb://localhost:27017/express_db";
const User = require("./models/Users");

app.use(express.json());
app.use(cors());

mongoose.connect(MONGOOS_URL);
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("mongoDB connection");
});

app.get("/", async (req, res) => {
  const users = await User.find().lean();
  res.send({
    data: users,
  });
});

app.post("/users", async (req, res) => {
  const { username, password, email } = req.body;
  await User.create({
    username,
    email,
    password,
  });
  res.send({
    message: "user created successfully",
  });
});
app.put("/users", async (req, res) => {
  const { username, password, email, id } = req.body;
  const user = await User.findOne({ _id: id }).exec();
  let message;
  if (!user) {
    message = "user not found";
  } else {
    user.username = username;
    user.password = password;
    user.save();
    message = "user saved successfully";
  }
  res.send({
    message: message,
  });
});

app.delete("/users", async (req, res) => {
  const { username, password, email, id } = req.body;
  const user = await User.findOne({ _id: id }).exec();
  let message;
  if (!user) {
    message = "user not found";
  } else {
    user.delete();
    message = "user successfully deleted";
  }
  res.send({
    message: message,
  });
});

app.listen(4000, () => {
  console.log("web server listening in 3000 port");
});
