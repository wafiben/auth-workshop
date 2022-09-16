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
    });
    const artcile = await newArtcile.save();
    res.status(200).json({ artcile });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllAricles, addArticle };
