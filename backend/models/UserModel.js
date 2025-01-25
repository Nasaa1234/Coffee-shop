const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema(
  {
    number: {
      type: String,
      maxLen: 8,
      minLen: 8,
      required: [true, "Заавал бөглөнө үү"],
    },
    success: [
      {
        type: Schema.Types.ObjectId,
        ref: "success",
      },
    ],
    cancelled: [
      {
        type: Schema.Types.ObjectId,
        ref: "canceleds",
      },
    ],
    processing: [
      {
        type: Schema.Types.ObjectId,
        ref: "processings",
      },
    ],
  },
  { timestamps: true }
);

const Users = model("Users", UserSchema);

module.exports = Users;
