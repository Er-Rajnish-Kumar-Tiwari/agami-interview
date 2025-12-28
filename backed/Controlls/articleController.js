const Article = require("../Models/Article");


exports.createArticle = async (req, res) => {
  const article = await Article.create(req.body);
  res.json(article);
};

exports.getArticles = async (req, res) => {
  res.json(await Article.find());
};

exports.updateArticle = async (req, res) => {
  res.json(
    await Article.findByIdAndUpdate(req.params.id, req.body, { new: true })
  );
};
