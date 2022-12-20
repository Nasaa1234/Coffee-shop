const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    minLen: 3,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    required: true,
    type: String,
  },
  Bio: {
    type: String,
  },
});

const User = model('Users', UserSchema);

module.exports = User;
