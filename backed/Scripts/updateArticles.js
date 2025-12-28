require("dotenv").config();
const axios = require("axios");

const googleSearch = require("../Services/googleService");
const scrapeArticle = require("../Services/scraperService");
const aiRewrite = require("../Services/aiService");

(async () => {
  const { data: articles } = await axios.get(
    "http://localhost:5000/api/articles"
  );

  for (let article of articles) {
    console.log("Processing:", article.title);

    const links = await googleSearch(article.title);

    if (links.length < 2) continue;

    const ref1 = await scrapeArticle(links[0]);
    const ref2 = await scrapeArticle(links[1]);

    const updatedContent = await aiRewrite(
      article.content,
      ref1,
      ref2
    );

    await axios.put(
      `http://localhost:5000/api/articles/${article._id}`,
      {
        updatedContent,
        references: links
      }
    );

    console.log("Updated:", article.title);
  }

  process.exit();
})();
