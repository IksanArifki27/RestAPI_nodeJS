require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");

  try {
    const veryfied = jwt.verify(token, process.env.SECRET_KEY);
    res.user = veryfied;
    next();
  } catch (err) {
    res.status(400).json({
      message: "Token Invalid",
    });
  }
};

module.exports = verifyToken;
