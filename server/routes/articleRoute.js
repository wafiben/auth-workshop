const express = require('express');
const isAuth = require("../midelwares/isAuth");
const router = express.Router();

const {
  getAllAricles,
  addArticle,
} = require("../Controllers/artcileController");
router.get("/", getAllAricles);
router.post("/", isAuth, addArticle);
module.exports = router;
