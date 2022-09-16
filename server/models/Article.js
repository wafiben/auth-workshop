const mongoose = require("mongoose");
const articleSchema = mongoose.Schema({
  nameOfArticle: {
    type: String,
  },
});
module.exports = mongoose.model("article", articleSchema);
