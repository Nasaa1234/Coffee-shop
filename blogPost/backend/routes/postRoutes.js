const express = require("express");
const middleWare = require("../middleware/auth.js");
const Post = require("../models/Posts.js");

const postRouter = express.Router();

postRouter.get("/posts", async (req, res) => {
  const page = req.query.page || 1;
  const perPage = req.query.per_page || 5;
  const offset = (page - 1) * perPage;

  const posts = await Post.find()
    .populate("author")
    .lean()
    .limit(perPage)
    .skip(offset);
  res.send({
    message: posts,
    page,
    perPage,
  });
});

postRouter.get("/allPosts", async (req, res) => {
  const posts = await Post.find().populate("author");
  res.send({
    message: posts,
  });
});

postRouter.get("/posts/postDetail/:postId", async (req, res) => {
  const postId = req.params.postId;
  const post = await Post.findById(postId).populate("author");
  res.send({
    data: post,
  });
});
postRouter.post("/posts", middleWare, async (req, res) => {
  const { title, description, image, body } = req.body;
  try {
    await Post.create({
      title,
      description,
      image,
      body,
      author: res.locals.userId,
    });
  } catch (err) {
    res.send({
      error: err,
    });
  }
  res.send({
    message: "Post created successfully",
  });
});

postRouter.put("/posts/comments", async (req, res) => {
  const { comments, id, author } = req.body;
  const post = await Post.findById(id).exec();
  let message;
  if (!post) {
    message = "post not found";
  } else {
    post.comments.push({
      written_by: author.name,
      image: author.image,
      text: comments,
    });
    post.save();
    message = "message saved successfully";
  }
  res.send({
    message: message,
  });
});

postRouter.put("/posts", middleWare, async (req, res) => {
  const { title, description, image, body, comments, id } = req.body;
  const post = await Post.findOne({ _id: id }).exec();
  let message;
  if (!post) {
    message = "post not found";
  } else {
    post.title = title;
    post.description = description;
    post.image = image;
    post.body = body;
    post.comments = comments;
    post.save();
    message = "Post saved successfully";
  }
  res.send({
    message: message,
  });
});
postRouter.delete("/posts", async (req, res) => {
  const { id } = req.body;
  const post = await Post.findOne({ _id: id }).exec();
  let message;
  if (!post) {
    message = "Post not found";
  } else {
    post.delete();
    message = "Post successfully deleted";
  }
  res.send({
    message: message,
  });
});

module.exports = postRouter;
