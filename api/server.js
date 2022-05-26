const express = require("express");
const quotesRouter = require("./quotes/quotes-router");
const server = express();
server.use(express.json());
server.use("/api/quotes", quotesRouter);

server.use("*", (req, res) => {
  res.json({ api: "is working" });
});

module.exports = server;
