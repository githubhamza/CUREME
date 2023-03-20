const express = require("express");
const router = express.Router();
let { User } = require("../../models/user");
var bcrypt = require("bcryptjs");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../../middlewares/auth");
router.post("/register", async function (req, res) {
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User with given email already exist");
  user = new User();
  user.role = req.body.role;
  user.name = req.body.name;
  user.email = req.body.email;
  user.contact = req.body.contact;
  user.password = req.body.password;
  await user.generateHashPassword();
  await user.save();
  return res.send(_.pick(user, ["name", "email"]));
});
router.post("/login", async function (req, res) {
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("User with given Email not exist");
  let isValid = await bcrypt.compare(req.body.password, user.password);
  if (!isValid) return res.status(401).send("Invalid Password");
  let token = jwt.sign(
    { _id: user._id, name: user.name, role: user.role },
    config.get("jwtPrivateKey")
  );
  res.send(token);
});
router.put("/:id", async function (req, res) {
  let user = await User.findById(req.params.id);
  user.name = req.body.name;
  user.contact = req.body.contact;
  user.password = req.body.password;
  await user.save();
  return res.send(user);
});
router.delete("/:id", async function (req, res) {
  let user = await User.findByIdAndDelete(req.params.id);
  return res.send(user);
});
module.exports = router;
