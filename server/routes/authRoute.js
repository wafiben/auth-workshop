const express = require("express");
const router = express.Router();
const { signUp, login } = require("../Controllers/authController");
const {
  registerValidation,
  loginValidation,
  validation,
} = require("../midelwares/validationFilds");
router.post("/login", loginValidation, validation, login);
router.post("/sing-up", registerValidation, validation, signUp);
module.exports = router;
