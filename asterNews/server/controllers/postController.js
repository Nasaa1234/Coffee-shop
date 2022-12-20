const Post = require('../model/Posts');

exports.getPosts = async (req, res) => {
  const posts = await Post.find().lean();
  res.send({
    message: posts,
  });
};

exports.getPostById = async (req, res) => {
  const {postId} = req.params;
  const posts = await Post.findById(postId).lean();
  res.status(200).send({
    message: posts,
  });
};

exports.writeComment = async (req, res) => {
  const {postId, comments} = req.body;
  const posts = await Post.findById(postId).exec();
  let message;
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
  res.status(200).send({
    message,
  });
};

exports.deleteComment = async (req, res) => {
  const {postId, commentId} = req.body;
  let posts = await Post.findById(postId).exec();
  let message;
  if (!posts) {
    message = 'posts not found';
  } else {
    posts.comments = posts.comments?.filter((_, id) => {
      return id !== commentId;
    });
    posts.save();
    message = 'message delete successfully';
  }
  res.status(200).send({
    message,
  });
};

exports.addPost = async (req, res) => {
  const {title, description, image, body} = req.body;
  try {
    await Post.create({
      title,
      description,
      image: [image, image],
      body,
      author: 'Nasanbat',
      create_at: new Date(),
    });
  } catch (err) {
    res.status(400).send({
      error: err,
    });
  }
  res.status(200).send({
    message: 'Post created successfully',
  });
};

exports.deletePost = async (req, res) => {
  const {postId} = req.params;
  const post = await Post.findOne(postId).exec();
  if (!post) {
    res.status(400).send({
      message: 'No post found',
    });
  } else {
    post.delete();
    res.status(200).send({
      message: 'Post deleted successfully',
    });
  }
};
