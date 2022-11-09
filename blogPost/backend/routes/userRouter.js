const express = require("express");
const middleWare = require("../middleware/auth.js");
const Users = require("../models/Users.js");
const jwt = require("jsonwebtoken");

const userRouter = express.Router();

userRouter.get("/users", middleWare, async (req, res) => {
  const users = await Users.find().lean();
  res.send({
    data: users,
  });
});

userRouter.post("/users", async (req, res) => {
  const { username, password, email, image } = req.body;
  try {
    await Users.create({
      name: username,
      email,
      password,
      image,
    });
    res.send({
      message: {
        username,
        email,
        image,
      },
    });
  } catch (err) {
    res.send({
      err: err,
    });
  }
});

userRouter.put("/users", async (req, res) => {
  const { username, password, id } = req.body;
  const user = await Users.findOne({ _id: id }).exec();
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

userRouter.delete("/users", async (req, res) => {
  const { id } = req.body;
  const user = await Users.findOne({ _id: id }).exec();
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

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await Users.findOne({
    email: email,
    password: password,
  }).lean();
  if (user) {
    token = jwt.sign(
      {
        data: user,
      },
      "secret",
      {
        expiresIn: "24h",
      }
    );
    res.send({
      token: token,
      username: user.name,
    });
  } else
    res.send({
      message: "Invalid credential",
    });
});

module.exports = userRouter;
