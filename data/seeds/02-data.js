const quotes = [
  {
    quote_id: 1,
    quote_text:
      "Meditation in the midst of activity is a thousand times superior to meditation in stillness.",
    quote_author: "Hakuin Ekaku",
  },
  {
    quote_id: 2,
    quote_text: "Not knowing how near the truth is, we seek it far away.",
    quote_author: "Hakuin Ekaku",
  },
  {
    quote_id: 3,
    quote_text: "Prefer to be defeated in the presence of the wise than to excel among fools.",
    quote_author: "Dogan Zenji",
  },
  {
    quote_id: 4,
    quote_text: "Not knowing how near the truth is, we seek it far away.",
    quote_author: "Hakuin Ekaku",
  },
  {
    quote_id: 5,
    quote_text:
      "An empty vessel makes the loudest sound, so they that have the least wit are the greatest babblers.",
    quote_author: "Plato",
  },
];

exports.seed = async function (knex) {
  await knex("quotes").insert(quotes);
};
