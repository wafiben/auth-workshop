const Artcile = require("../models/Article");
const getAllAricles = async (req, res) => {
  const artciles = await Artcile.find();
  res.status(200).json({ artciles });
  try {
  } catch (error) {
    console.log(error);
  }
};
const addArticle = async (req, res) => {
  const artcileInfo = req.body;
  try {
    const newArtcile = new Artcile({
      nameOfArticle: artcileInfo.nameOfArticle,
      selectedFile: req.file.filename,
      user: req.user._id,
    });
    const artcile = await newArtcile.save();
    res.status(200).json({ artcile });
  } catch (error) {
    console.log(error);
  }
};
const getMyPosts = async (req, res) => {
  try {
    const artciles = await Artcile.find();
    const myArtciles = artciles.filter(
      (article) =>
        article.user && article.user.toString() === req.user._id.toString()
    );
    if (myArtciles.length > 0) {
      res.status(200).json({ myArtciles });
    } else {
      res.status(400).json({ msg: "you do not have post yet" });
    }
  } catch (error) {
    res.status(500).json({ msg: "failed to get posts" });
  }
};

module.exports = { getAllAricles, addArticle, getMyPosts };
