const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 4444;
const postRouter = require('./routes/PostRouter');

app.use(express.json());
app.use(postRouter);

const connection = mongoose.connection;

mongoose.connect('mongodb://localhost:27017/asterNews', {
  autoIndex: true,
});

connection.once('open', () => {
  console.log('mongoDB connection');
});

app.listen(port, () => {
  console.log(`Server listening on port${port}`);
});
