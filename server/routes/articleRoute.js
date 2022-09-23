const express = require("express");
const isAuth = require("../midelwares/isAuth");
const upload = require("../midelwares/upload");
const router = express.Router();

const {
  getAllAricles,
  addArticle,
  getMyPosts,
} = require("../Controllers/artcileController");
router.get("/", getAllAricles);
router.post("/", isAuth, upload.single("selectedFile"), addArticle);
router.get("/my-posts", isAuth, getMyPosts);
module.exports = router;
