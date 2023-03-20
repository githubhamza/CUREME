const express = require("express");
let router = express.Router();
var { Doctor } = require("../../models/doctor");
const docAuth = require("../../middlewares/docAuth");
const admin = require("../../middlewares/admin");
var bcrypt = require("bcryptjs");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const config = require("config");
router.get("/", async function (req, res) {
  console.log(req.doctor);
  let doctor = await Doctor.find();
  return res.send(doctor);
});
router.get("/:id", async function (req, res) {
  console.log(req.doctor);
  let doctor = await Doctor.findById(req.params.id);
  return res.send(doctor);
});
router.post("/register", async function (req, res) {
  let doctor = await Doctor.findOne({ email: req.body.email });
  if (doctor)
    return res.status(400).send("Doctor with given email already exist");
  doctor = new Doctor();
  doctor.name = req.body.name;
  doctor.email = req.body.email;
  doctor.contact = req.body.contact;
  doctor.education = req.body.education;
  doctor.specialization = req.body.specialization;
  doctor.days = req.body.days;
  doctor.startTime = req.body.startTime;
  doctor.endTime = req.body.endTime;
  doctor.imglink = req.body.imglink;
  doctor.fees = req.body.fees;
  doctor.password = req.body.password;
  doctor.role = req.body.role;
  await doctor.generateHashPassword();
  await doctor.save();
  return res.send(_.pick(doctor, ["name", "email"]));
});
router.post("/login", async function (req, res) {
  let doctor = await Doctor.findOne({ email: req.body.email });
  if (!doctor) return res.status(400).send("Doctor with given Email not exist");
  let isValid = await bcrypt.compare(req.body.password, doctor.password);
  if (!isValid) return res.status(401).send("Invalid Password");
  let token = jwt.sign(
    { _id: doctor._id, name: doctor.name },
    config.get("jwtPrivateKey")
  );
  res.send(token);
});
router.put("/:id", async function (req, res) {
  let doctor = await Doctor.findById(req.params.id);
  doctor.name = req.body.name;
  doctor.contact = req.body.contact;
  doctor.education = req.body.education;
  doctor.specialization = req.body.specialization;
  doctor.days = req.body.days;
  doctor.startTime = req.body.startTime;
  doctor.endTime = req.body.endTime;
  doctor.imglink = req.body.imglink;
  doctor.fees = req.body.fees;
  doctor.password = req.body.password;
  await doctor.save();
  return res.send(doctor);
});
router.delete("/:id", async function (req, res) {
  let doctor = await Doctor.findByIdAndDelete(req.params.id);
  return res.send(doctor);
});
module.exports = router;
