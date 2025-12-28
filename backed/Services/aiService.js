const openai = require("../Config/openai");


module.exports = async (original, ref1, ref2) => {
  try {
    const res = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "Rewrite the article using the references in simple language"
        },
        {
          role: "user",
          content:
            original.slice(0, 2000) +
            "\n\nREF1:\n" +
            ref1.slice(0, 1500) +
            "\n\nREF2:\n" +
            ref2.slice(0, 1500)
        }
      ],
      timeout: 30000
    });

    return res.choices[0].message.content;
  } catch (err) {
    console.error("❌ AI rewrite failed:", err.message);
    return original; // fallback
  }
};

