const express = require('express');
const {
  addPost,
  getPosts,
  getPostById,
  writeComment,
  deleteComment,
  deletePost,
} = require('../controllers/postController');
const postRouter = express.Router();

postRouter.get('/post', getPosts);
postRouter.get('/post/:postId', getPostById);
postRouter.put('/post/writeComment', writeComment);
postRouter.put('/post/deleteComment', deleteComment);
// postRouter.post('/addPost', addPost);
postRouter.delete('/deletePost/:postId', deletePost);

module.exports = postRouter;
