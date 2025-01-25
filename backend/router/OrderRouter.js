const express = require("express");
const {
  getOrder,
  getProcessing,
  getCanceled,
  getSuccess,
  addProcessing,
  addCanceled,
  addSuccess,
} = require("../controller/OrderController");
const OrderRoute = express.Router();

OrderRoute.get("/", getOrder);
OrderRoute.get("/process", getProcessing);
OrderRoute.get("/cancelled", getCanceled);
OrderRoute.get("/succes", getSuccess);
OrderRoute.post("/process", addProcessing);
OrderRoute.post("/cancelled", addCanceled);
OrderRoute.post("/succes", addSuccess);

module.exports = OrderRoute;
