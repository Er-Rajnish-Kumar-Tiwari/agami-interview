const router = require("express").Router();
const c = require("../Controlls/articleController.js");

router.post("/", c.createArticle);
router.get("/", c.getArticles);
router.put("/:id", c.updateArticle);

module.exports = router;
