const Users = require("../models/UserModel");

exports.getUsers = async (req, res, next) => {
  const User = await Users.find({})
    .populate("success")
    .populate("cancelled")
    .populate("processing")
    .lean();
  res.send(User);
};

exports.getUsersByNumber = async (req, res, next) => {
  const { number } = req.params;
  const User = await Users.findOne({ number })
    .populate("success")
    .populate("cancelled")
    .populate("processing")
    .lean();
  if (User) {
    res.send(User);
  } else {
    res.send({ message: "User not found" });
  }
};

exports.updateOrders = async (req, res, next) => {
  const { number } = req.params;
  const { process, canceled, success } = req.body;
  const User = await Users.findOne({ number }).exec();
  if (User) {
    if (process) {
      User.processing.push(process);
    }
    if (canceled) {
      User.cancelled.push(canceled);
    }
    if (success) {
      User.success.push(success);
    }
    res.send({
      user: User,
      process: process,
      canceled: canceled,
      success: success,
    });
    User.save();
  } else {
    res.send({ message: "User not found" });
  }
};

exports.addUser = async (req, res, next) => {
  const { number } = req.body;
  try {
    await Users.create({ number });
    res.send({
      message: "user created successfully",
      number: number,
    });
  } catch (err) {
    res.send({ message: err, asd: "Asdf" });
  }
};

exports.deleteProcessing = async (req, res, next) => {
  const { number } = req.params;
  const { type } = req.body;
  const user = await Users.findOne({ number }).exec();
  if (type === "all") {
    user.processing = [];
    user.save();
    res.send({
      message: "Success",
    });
  } else {
  }
};
