const openai = require("../Config/openai");


module.exports = async (original, ref1, ref2) => {
  const res = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "Rewrite article using references" },
      { role: "user", content: original + ref1 + ref2 }
    ]
  });
  return res.choices[0].message.content;
};
