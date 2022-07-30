const express = require("express");
const port = process.env.PORT || 8080;

const app = express();

app.get("/", (req, res) => {
  res.send("Server OK!");
});

app.listen(port, () => {
  console.log(`Live at http://localhost:${port}`);
});
