const jwt = require("jsonwebtoken");
const User = require("../models/User");
const isAuth = async (req, res, next) => {
  try {
    const token = req.header("token");
    const verifyToken = jwt.verify(token, "shhhhh");
    const user = await User.findById(verifyToken.id);
    if (!verifyToken) {
      res.status(400).json({ msg: "you are not authorized " });
    }
    if (verifyToken) {
      req.user = user;
      next();
    }
  } catch (error) {
    res.status(500).json({ msg: "error server " });
  }
};
module.exports = isAuth;
