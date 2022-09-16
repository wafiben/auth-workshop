const { body, validationResult } = require("express-validator");
const registerValidation = [
  body("userName", "you must type your name").notEmpty(),
  body("email", "format of email is invalid ").isEmail(),
  body("password", "your password must be at least 6 caracter ").isLength({
    min: 6,
  }),
];
const loginValidation = [registerValidation[1], registerValidation[2]];
const validation = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
module.exports = { registerValidation, loginValidation, validation };
