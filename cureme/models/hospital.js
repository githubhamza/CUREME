const mongoose = require("mongoose");
var hospitalSchema = mongoose.Schema({
  name: String,
  contact: String,
  address: String,
  location: String,
  imglink: String,
});
const Hospital = mongoose.model("Hospital", hospitalSchema);
module.exports.Hospital = Hospital;
