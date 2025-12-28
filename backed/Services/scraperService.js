const axios = require("axios");
const cheerio = require("cheerio");

async function scrapeArticle(url) {
  try {
    const { data } = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      }
    });

    const $ = cheerio.load(data);

    let content = "";

    $("p").each((i, el) => {
      const text = $(el).text();
      if (text.length > 50) {
        content += text + "\n\n";
      }
    });

    return content.trim();
  } catch (err) {
    console.error("Scrape error:", url);
    return "";
  }
}

module.exports = scrapeArticle;
