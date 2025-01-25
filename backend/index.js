const express = require("express")
const GoodRoute = require("./router/GoodRouter")
const mongoose = require("mongoose")
const cors = require("cors")
const UserRoute = require("./router/UserRouter")
const OrderRoute = require("./router/OrderRouter")

const app = express()
app.use(express.json())
app.use(cors())
app.use("/goods", GoodRoute)
app.use("/order", OrderRoute)
app.use("/user", UserRoute)

const connection = mongoose.connection

mongoose.connect("mongodb://localhost:27017/CoffeeShop", {
  autoIndex: true,
})

connection.once("open", () => {
  console.log("mongoDB connection")
})

app.listen(4943, () => {
  console.log("server listen")
})
