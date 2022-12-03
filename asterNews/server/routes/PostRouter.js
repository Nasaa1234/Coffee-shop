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
  const postId = req.params.postId;

  const posts = await Post.findById(postId).lean();
  res.send({
    message: posts,
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
