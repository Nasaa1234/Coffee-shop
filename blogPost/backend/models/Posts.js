const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const PostSchema = new Schema(
  {
    title: {
      type: String,
      maxLen: 255,
      minLen: 5,
      required: [true, "Заавал бөглөнө үү"],
    },
    description: {
      type: String,
    },
    image: { type: String },
    body: {
      type: String,
      required: [true, "Заавал бөглөнө үү"],
    },
    author: {
      type: Schema.ObjectId,
      ref: "Users",
      required: true,
    },
    create_at: Date,
    published_at: Date,
    comments: [
      {
        written_by: String,
        image: String,
        text: String,
      },
    ],
  },
  { timestamps: true }
);

const Post = model("Posts", PostSchema);

module.exports = Post;
