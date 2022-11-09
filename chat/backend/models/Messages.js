const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const MessageSchema = new Schema(
  {
    message: {
      type: String,
      required: true,
    },
    users: Array,
    author: {
      type: Schema.ObjectId,
      ref: "Users",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Message = model("Messages", MessageSchema);

module.exports = Message;
