const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: String,
  content: String,
  updatedContent: String,
  references: [String],
}, { timestamps: true });

module.exports = mongoose.model("Article", articleSchema);
