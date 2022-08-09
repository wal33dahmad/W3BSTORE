const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const db = require("./db");
const User = require("./Model/User");

const port = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// Routes

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email: email }, (err, user) => {
    if (!err) {
      if (password === user.password) {
        res.status(200).send({ message: "Login Successful", user });
      } else {
        res.status(401).send({ message: "Password doesn't match" });
      }
    } else {
      res.status(404).send({ message: "Email is not registered" });
    }
  });
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "This email is already registered!" });
    } else {
      const user = new User({
        name,
        email,
        password,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successfully Registered" });
        }
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Live at http://localhost:${port}`);
});
