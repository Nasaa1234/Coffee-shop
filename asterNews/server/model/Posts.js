const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const PostSchema = new Schema(
  {
    title: {
      type: String,
      maxLen: 255,
      minLen: 5,
      required: [true, 'Заавал бөглөнө үү'],
    },
    like: {
      type: Number,
    },
    description: {
      type: String,
    },
    image: {type: Array},
    body: {
      type: String,
      required: [true, 'Заавал бөглөнө үү'],
    },

    published_at: Date,
    comments: [
      {
        posted_on: String,
        text: String,
        user: String,
      },
    ],
  },
  {timestamps: true},
);

const Post = model('Posts', PostSchema);

module.exports = Post;
