const mongoose = require("mongoose");

const db = mongoose.connect("mongodb://localhost:27017/w3bstoreDB", () => {
  console.log("🔥 DB Connected");
});

module.exports = db;
