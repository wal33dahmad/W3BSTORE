const { mongoose } = require("mongoose");
const userSchema = require("../Schema/userSchema");

const User = new mongoose.model("User", userSchema);

module.exports = User;
