const express = require("express");
let router = express.Router();
var { Hospital } = require("../../models/hospital");
const auth = require("../../middlewares/auth");
const admin = require("../../middlewares/admin");
const docAuth = require("../../middlewares/docAuth");

//get all hospitals
router.get("/", async function (req, res) {
  console.log(req.user);
  let hospital = await Hospital.find();
  return res.send(hospital);
});
//get single hospital
router.get("/:id", async function (req, res) {
  try {
    let hospital = await Hospital.findById(req.params.id);
    if (!hospital)
      return res.status(400).send("hospital With given Id is not present");
    return res.send(hospital);
  } catch (err) {
    return res.status(400).send("Invalid ID format");
  }
});
//add hodpital
router.post("/", async function (req, res) {
  let hospital = new Hospital();
  hospital.name = req.body.name;
  hospital.contact = req.body.contact;
  hospital.address = req.body.address;
  hospital.location = req.body.location;
  hospital.imglink = req.body.imglink;
  await hospital.save();
  return res.send(hospital);
});
//update
router.put("/:id", async function (req, res) {
  let hospital = await Hospital.findById(req.params.id);
  hospital.name = req.body.name;
  hospital.contact = req.body.contact;
  hospital.address = req.body.address;
  hospital.location = req.body.location;
  hospital.imglink = req.body.imglink;
  await hospital.save();
  return res.send(hospital);
});
//delete a record
router.delete("/:id", async function (req, res) {
  let hospital = await Hospital.findByIdAndDelete(req.params.id);
  return res.send(hospital);
});
module.exports = router;
