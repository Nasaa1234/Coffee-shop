const User = require('../model/Users');

exports.SignUp = async (req, res) => {
  res.send('hell');
};

exports.getAllUsers = async (req, res) => {
  const users = await User.find().lean();
  res.send({
    users: users,
  });
};
