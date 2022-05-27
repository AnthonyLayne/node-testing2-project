const db = require("../data/db-config");
const QUOTES = require("./quotes/quotes-model");
// const server = require("./server");
//const request = require('supertest')

test("check environment", () => {
  expect(process.env.NODE_ENV).toBe("testing");
});

beforeAll(async () => {
  await db.migrate.rollback();
  //await db.migrate.latest();
});

beforeEach(async () => {
  await db("quotes").truncate();
  await db.seed.run();
});

afterAll(async () => {
  await db.destroy();
});

describe("db tests", () => {
  test("getAll", async () => {
    const result = await QUOTES.getAll();
    expect(result).toHaveLength(5);
    expect(result).toMatchObject([
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
    ]);
  });
  test("getById", async () => {
    let result;
    result = await QUOTES.getById(2);
    expect(result).toBeDefined();
  });
  test("insert", async () => {
    let result;
    result = await QUOTES.insert({ quote_id: 7, quote_text: "hey there", quote_author: "Steve" });
    expect(result).toMatchObject({ quote_id: 7, quote_text: "hey there", quote_author: "Steve" });
    result = await QUOTES.getAll();
    expect(result).toHaveLength(6);
    expect(result[3]).toHaveProperty("quote_id", "quote_text", "quote_author");
  });
});
