const mongoose = require("mongoose");
var bcrypt = require("bcryptjs");

var doctorSchema = mongoose.Schema({
  name: String,
  email: String,
  contact: String,
  education: { type: String, default: "education" },
  specialization: { type: String, default: "specialization" },
  days: [String],
  startTime: { type: String, default: "startTime" },
  endTime: { type: String, default: "endTime" },
  imglink: { type: String, default: "imglink" },
  fees: { type: String, default: "fees" },
  password: String,
  role: { type: String, default: "doctor" },
});
doctorSchema.methods.generateHashPassword = async function () {
  let salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
};
const Doctor = mongoose.model("Doctor", doctorSchema);
module.exports.Doctor = Doctor;
