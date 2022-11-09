const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const messageRouter = require("./routes/MessageRouter");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(messageRouter);

mongoose.connect(process.env.MONGOOS_URL, {
  autoIndex: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("mongoDB connection");
});

app.listen(4001, () => {
  console.log("port listening in 4001");
});
