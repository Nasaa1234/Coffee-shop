const express = require("express");
const {
  getUsers,
  addUser,
  getUsersByNumber,
  updateOrders,
  deleteProcessing,
} = require("../controller/UserController");
const UserRoute = express.Router();

UserRoute.get("/", getUsers);
UserRoute.get("/:number", getUsersByNumber);
UserRoute.post("/addUser", addUser);
UserRoute.put("/:number", updateOrders);
UserRoute.put("/delete/:number", deleteProcessing);

module.exports = UserRoute;
