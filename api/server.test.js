const db = require("../data/db-config");
// const QUOTES = require("./quotes/quotes-model");
// const server = require("./server");
//const request = require('supertest')

test("check environment", () => {
  expect(process.env.NODE_ENV).toBe("testing");
});
