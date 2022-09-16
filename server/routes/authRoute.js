const express = require("express");
const router = express.Router();
const { signUp, login } = require("../Controllers/authController");
router.post("/login", login);
router.post("/sing-up", signUp);
module.exports = router;
