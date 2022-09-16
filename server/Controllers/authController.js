const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const login = async (req, res) => {
  const userInfo = req.body;
  try {
    const user = await User.findOne({ email: userInfo.email });
    if (!user) {
      return res.status(201).json({ msg: "you need to register before" });
    } else {
      const result = await bcrypt.compare(user.password, userInfo.password);
      if (!result) {
        res.status(401).json({ msg: "wrong password" });
      } else {
        const token = await jwt.sign({ id: user._id }, "shhhhh");
        res.status(200).json({ user, token });
      }
    }
  } catch (error) {
    res.status(500).json({ msg: "server is failed" });
  }
};
const signUp = async (req, res) => {
  const userInfo = req.body;
  try {
    const searchedUser = await User.findOne({ email: userInfo.email });
    if (searchedUser) {
      res.status(201).json({ msg: `${searchedUser.userName} already exist` });
    }
    if (!searchedUser) {
      const hashedPaswword = await bcrypt.hash(userInfo.password, 10);
      const user = new User({
        userName: userInfo.userName,
        email: userInfo.email,
        password: hashedPaswword,
      });
      await user.save();
      const token = jwt.sign({ id: user._id }, "shhhhh");
      res.status(200).json({ user, token });
    }
  } catch (error) {
    res.status(500).json({ msg: "server is failed" });
  }
};
module.exports = { login, signUp };
