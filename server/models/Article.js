const mongoose = require("mongoose");
const articleSchema = mongoose.Schema({
  nameOfArticle: {
    type: String,
  },
  selectedFile: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});
module.exports = mongoose.model("article", articleSchema);
