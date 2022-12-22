const express = require('express');
const {
  getAllUsers,
  SignUp,
  login,
  deleteUser,
} = require('../controllers/UserController');
const UserRouter = express.Router();

UserRouter.get('/getUsers', getAllUsers);
UserRouter.post('/SignUp', SignUp);
UserRouter.post('/Login', login);
UserRouter.delete('/deleteUser', deleteUser);

module.exports = UserRouter;
