const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    min: 3,
    max: 20,
  },
  image: String,
  password: String,
  email: {
    type: String,
    minLength: [2, "2 тэмдэгтээс багагүй байх"],
    maxLength: [100, "100 тэмдэгтээс хэтрэхгүй"],
  },
});
UserSchema.path("email").validate((email) => {
  return email.toLowerCase().match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
}, "Email хаяг буруу байна");

const Users = model("Users", UserSchema);

module.exports = Users;
