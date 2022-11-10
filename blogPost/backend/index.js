const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const postRouter = require("./routes/postRoutes.js");
const userRouter = require("./routes/userRouter.js");
const fileUpload = require("express-fileupload");
const path = require("path");
const uploadRouter = require("./routes/uploadRouter.js");

require("dotenv").config();

app.use("/uploads/", express.static(path.join(__dirname, "uploads")));
app.use(fileUpload());
app.use(express.json());
app.use(cors());
app.use(postRouter, uploadRouter, userRouter);

const connection = mongoose.connection;

mongoose.connect(process.env.MONGOOS_URL, {
  autoIndex: true,
});

connection.once("open", () => {
  console.log("mongoDB connection");
});

app.listen(8888, () => {
  console.log("web server listening in 8888 port");
});

module.exports = app;
