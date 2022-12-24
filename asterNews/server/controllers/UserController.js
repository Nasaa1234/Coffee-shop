const User = require('../model/Users');

exports.SignUp = async (req, res) => {
  const {username, password} = req.body;
  try {
    await User.create({
      username,
      password,
    });
    res.send({
      message: username,
    });
  } catch (err) {
    res.send({
      err: err,
    });
  }
};

exports.getAllUsers = async (req, res) => {
  const users = await User.find().lean();
  res.send({
    users: users,
  });
};

exports.login = async (req, res) => {
  const {username, password} = req.body;
  const user = await User.findOne({username, password}).exec();
  if (user) {
    res.send({
      message: user,
    });
  } else {
    res.send({message: 'Invalid username or password'});
  }
};

exports.deleteUser = async (req, res) => {
  res.send('login');
};

exports.updateUser = async (req, res) => {
  const {username, password, image, Bio, _id} = req.body;
  await User.findByIdAndUpdate(_id, {
    username,
    password,
    Bio,
    image,
  });
  res.send('update');
};
