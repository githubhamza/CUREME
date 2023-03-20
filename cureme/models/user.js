const mongoose = require("mongoose");
const Joi = require("@hapi/joi");
var bcrypt = require("bcryptjs");

var userSchema = mongoose.Schema({
  name: String,
  email: String,
  contact: String,
  password: String,
  role: { type: String, default: "user" },
});
userSchema.methods.generateHashPassword = async function () {
  let salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
};
const User = mongoose.model("User", userSchema);
function validateUser(data) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(25).required(),
    email: Joi.string().min(5).required(),
    contact: Joi.string().min(7).required(),
    password: Joi.string().min(8).required(),
  });
  return schema.validate(data, { abortEarly: false });
}
function validateUserLogin(data) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(25).required(),
    email: Joi.string().min(5).required(),
  });
  return schema.validate(data, { abortEarly: false });
}
module.exports.User = User;
module.exports.validate = validateUser;
module.exports.validateUserLogin = validateUserLogin;
