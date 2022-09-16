const express = require("express");
const router = express.Router();
const getAllUsers = require("../Controllers/adminController");
const isAuth = require("../midelwares/isAuth");
const isAdmin = require("../midelwares/isAdmin");
router.get("/admin", isAuth, isAdmin, getAllUsers);
module.exports = router;
