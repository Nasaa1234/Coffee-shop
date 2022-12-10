const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const messageRouter = require("./routes/MessageRouter");
const socket = require("socket.io");

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

const server = app.listen(4002, () => {
  console.log("port listening in 4002");
});

const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

global.onlineUsers = new Map();
io.on("connection", (socket) => {
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);

    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.value);
    }
  });
});
