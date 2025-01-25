const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const GoodSchema = new Schema(
  {
    title: {
      type: String,
      maxLen: 255,
      minLen: 5,
      required: [true, "Заавал бөглөнө үү"],
    },
    image: {
      type: String,
      required: [true, "Заавал бөглөнө үү"],
    },
    category: {
      type: String,
    },
    price: {
      type: Number,
      required: [true, "Заавал бөглөнө үү"],
    },
    tag: {
      type: String,
    },
  },
  { timestamps: true }
);

const Good = model("Goods", GoodSchema);

module.exports = Good;
