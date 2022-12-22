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

exports.login = async (req, res) => {
  res.send('login');
};

exports.deleteUser = async (req, res) => {
  res.send('login');
};

exports.updateUser = async (req, res) => {
  res.send('update');
};
