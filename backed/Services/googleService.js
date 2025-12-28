const axios = require("axios");

async function googleSearch(query) {
  try {
    const { data } = await axios.get(
      "https://serpapi.com/search",
      {
        params: {
          q: query,
          api_key: process.env.SERP_API_KEY,
          num: 5
        }
      }
    );

    return data.organic_results
      .map(r => r.link)
      .slice(0, 2);
  } catch (err) {
    console.error("SERP API failed");
    return [];
  }
}

module.exports = googleSearch;
