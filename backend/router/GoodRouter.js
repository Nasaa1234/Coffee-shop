const express = require("express")
const { getGoods, getGoodDetail } = require("../controller/GoodController")
const GoodRoute = express.Router()

GoodRoute.get("/", getGoods)
GoodRoute.get("/:id", getGoodDetail)

module.exports = GoodRoute
