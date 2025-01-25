const { Success, Processing, Canceled } = require("../models/OrderModel");

exports.getOrder = async (req, res, next) => {
  const Successes = await Success.find({}).lean();
  const Processings = await Processing.find({}).lean();
  const Canceleds = await Canceled.find({}).lean();
  res.send({ Successes, Processings, Canceleds });
};

exports.getOrderByUser = async (req, res, next) => {
  const Orders = await Order.find({}).lean();
  res.send({ order: Orders });
};

exports.getProcessing = async (req, res, next) => {
  const Processings = await Processing.find({}).lean();
  res.send(Processings);
};
exports.getCanceled = async (req, res, next) => {
  const Canceleds = await Canceled.find({}).lean();
  res.send({
    canceled: Canceleds,
  });
};
exports.getSuccess = async (req, res, next) => {
  const Successes = await Success.find({}).lean();
  res.send({
    Successes: Successes,
  });
};

exports.addProcessing = async (req, res, next) => {
  if (req.body) {
    const process = await Processing.create(req.body);
    res
      .send({
        message: "Processing finished",
        processId: process._id,
      })
      .status(200);
  } else {
    res
      .send({
        message: "Error creating",
      })
      .status(404);
  }
};
exports.addCanceled = async (req, res, next) => {
  if (req.body) {
    await Canceled.create(req.body);
    res
      .send({
        message: "Canceled finished",
      })
      .status(200);
  } else {
    res
      .send({
        message: "Error creating",
      })
      .status(404);
  }
};
exports.addSuccess = async (req, res, next) => {
  if (req.body) {
    const success = await Success.create(req.body);
    res
      .send({
        message: "Success finished",
        succesId: success._id,
      })
      .status(200);
  } else {
    res
      .send({
        message: "Error creating",
      })
      .status(404);
  }
};
