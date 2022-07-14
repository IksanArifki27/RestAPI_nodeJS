require("dotenv").config();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

// register
router.post("/register", async (req, res) => {
  // cek email exist
  const { name, email, password } = req.body;
  const emailExist = await User.findOne({ where: { email } });
  if (emailExist) {
    res.status(400).json({
      message: "Email Telah digunakan!",
    });
  }
  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashPwd = await bcrypt.hash(password, salt);
  try {
    const user = await User.create({
      name,
      email,
      password: hashPwd,
    });
    res.json({
      message: "Success Create User",
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      message: "gagal create User",
    });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  // cek email
  if (!user) {
    res.json({ message: "Email atau Password Anda Salah!" });
  }
  // cek password
  const passwordUser = await bcrypt.compare(password, user.password);
  if (!passwordUser) {
    res.status(400).json({
      message: "password anda salah!",
    });
  }
  // create token
  const tokenJwt = jwt.sign(
    { id: user.id, email: user.email },
    process.env.SECRET_KEY
  );
  res.header("Authorization", tokenJwt).status(200).json({
    message: "Selamat Datang!",
    token: tokenJwt,
  });
});

module.exports = router;
