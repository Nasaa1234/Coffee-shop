const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const SuccessSchema = new Schema(
  {
    order: [
      {
        orderId: {
          type: Schema.Types.ObjectId,
          ref: "Goods",
        },
        quantity: Number,
      },
    ],
  },
  { timestamps: true }
);

const CanceledSchema = new Schema(
  {
    order: [
      {
        orderId: {
          type: Schema.Types.ObjectId,
          ref: "Goods",
        },
        quantity: Number,
      },
    ],
  },
  { timestamps: true }
);

const ProcessingSchema = new Schema(
  {
    order: [
      {
        orderId: {
          type: Schema.Types.ObjectId,
          ref: "Goods",
        },
        quantity: Number,
      },
    ],
  },
  { timestamps: true }
);

const Success = model("success", SuccessSchema);
const Canceled = model("canceleds", CanceledSchema);
const Processing = model("processings", ProcessingSchema);

module.exports = { Success, Canceled, Processing };
