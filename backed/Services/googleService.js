const axios = require("axios");
const cheerio = require("cheerio");

async function googleSearch(query) {
  try {
    const url =
      "https://www.google.com/search?q=" +
      encodeURIComponent(query) +
      "&num=5";

    const { data } = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        "Accept-Language": "en-US,en;q=0.9"
      }
    });

    const $ = cheerio.load(data);

    const links = [];

    $("a").each((i, el) => {
      const href = $(el).attr("href");
      if (
        href &&
        href.startsWith("/url?q=") &&
        !href.includes("google.com")
      ) {
        const cleanUrl = href.split("/url?q=")[1].split("&")[0];
        if (cleanUrl.startsWith("http")) {
          links.push(cleanUrl);
        }
      }
    });

    return [...new Set(links)].slice(0, 2);
  } catch (err) {
    console.error("Google search failed");
    return [];
  }
}

module.exports = googleSearch;
