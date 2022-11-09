const express = require("express");
const Users = require("../models/Users");
const jwt = require("jsonwebtoken");

const userRouter = express.Router();
userRouter.get("/users", async (req, res) => {
  const users = await Users.find().exec();
  res.send({
    users: users,
  });
});

userRouter.post("/users", async (req, res) => {
  const { email, password, username, image } = req.body;
  try {
    await Users.create({
      email,
      password,
      username,
      image,
    });
    res.send({
      email,
      username,
      image,
    });
  } catch (e) {
    res.send({
      error: e,
    });
  }
});

userRouter.put("/users", async (req, res) => {
  const { password, username, image, id } = req.body;
  const user = await Users.findById(id).exec();
  let message;
  if (user) {
    user.password = password;
    user.username = username;
    user.image = image;
    message = "user updated successfully";
  } else {
    message = "user not found";
  }
  res.send({
    message,
  });
});

userRouter.delete("/users", async (req, res) => {
  const { id } = req.body;
  const user = await Users.findById(id).exec();
  if (user) {
    user.delete();
    res.send({
      message: "user deleted successfully",
    });
  } else {
    res.send({
      message: "user not found",
    });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  const user = await Users.findOne({ email: email, password: password }).exec();
  if (user) {
    const token = jwt.sign(
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
      username: user.email,
    });
  } else
    res.send({
      err: "Invalid credential",
    });
});

module.exports = userRouter;
