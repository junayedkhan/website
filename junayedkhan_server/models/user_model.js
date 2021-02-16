const mongoose = require("mongoose");

const user_schema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  status: { type: Boolean, default: true },
});

const user_model = mongoose.model("user", user_schema);

module.exports = user_model;