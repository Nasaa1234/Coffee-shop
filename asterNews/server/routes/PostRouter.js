const express = require('express');
const Post = require('../model/Posts.js');

const postRouter = express.Router();

postRouter.get('/post', async (req, res) => {
  const posts = await Post.find().lean();
  res.send({
    message: posts,
  });
});

postRouter.get('/post/:postId', async (req, res) => {
  const {postId} = req.params;

  const posts = await Post.findById(postId).lean();
  res.send({
    message: posts,
  });
});

postRouter.put('/post/writeComment', async (req, res) => {
  const {postId, comments} = req.body;
  const posts = await Post.findById(postId).exec();
  let message;
  console.log(posts);
  if (!posts) {
    message = 'posts not found';
  } else {
    posts.comments.push({
      posted_on: 'Jul 5, 2021 | 6:22 AM',
      text: comments,
      user: 'Nasaa',
    });
    posts.save();
    message = 'message saved successfully';
  }
  res.send({
    message,
  });
});

postRouter.delete('/post/deleteComment', async (req, res) => {
  const {postId, commentId} = req.body;
  const posts = await Post.findById(postId).exec();
  let message;
  if (!posts) {
    message = 'posts not found';
  } else {
    posts.comments?.filter((_, id) => {
      console.log(id, commentId);
      id !== commentId;
    });
    posts.save();
    message = 'message delete successfully';
  }
  res.send({
    message,
  });
});

postRouter.post('/post', (req, res) => {
  res.send('hello');
});

postRouter.put('/post', (req, res) => {
  res.send('hello');
});

postRouter.delete('/post', (req, res) => {
  res.send('hello');
});
module.exports = postRouter;
