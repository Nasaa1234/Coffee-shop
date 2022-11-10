const express = require("express");
const Users = require("../models/Users");

const userRouter = express.Router();

userRouter.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await Users.findOne({ username, password }).exec();
    console.log(user);
    if (!user) {
      res.send({
        message: "Incorrect Username or Password",
      });
    } else {
      res.send({
        message: user,
      });
    }
  } catch (err) {
    res.send({
      err,
    });
  }
});

userRouter.post("/register", async (res, req) => {
  try {
    const { username, password, email } = req.body;
    const usernameCheck = await Users.findOne({ username }).exec();
    if (usernameCheck)
      return res.json({
        message: "Username already used",
      });

    const emailCheclk = await Users.findOne({ email });
    if (emailCheclk)
      return res.json({
        message: "Email already used",
      });

    const user = await Users.create({ email, username, password });
    res.send({
      user,
    });
  } catch (err) {
    res.send({
      err,
    });
  }
});

userRouter.get("/allUsers", async (req, res) => {
  try {
    const users = await Users.find().exec();
    res.send({
      users: users,
    });
  } catch (err) {
    res.send({
      err,
    });
  }
});

module.exports = userRouter;
