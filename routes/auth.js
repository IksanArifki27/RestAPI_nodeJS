const express = require("express");
const router = express.Router();
const { User } = require("../models");

// register
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.create(req.body);
    res.json({
      message: "Success Create User",
      data: user,
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
