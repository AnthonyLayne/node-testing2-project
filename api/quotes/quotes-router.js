const router = require("express").Router();
const QUOTES = require("./quotes-model");

const { checkQuoteId } = require("./quotes-middleware");

router.get("/", async (req, res, next) => {
  try {
    const quotes = await QUOTES.getAll();
    res.json(quotes);
  } catch (err) {
    next(err);
  }
});

router.get("/:quote_id", checkQuoteId, async (req, res) => {
  res.json(req.quote);
});

router.post("/", async (req, res, next) => {
  try {
    const newQuote = await QUOTES.insert(req.body);
    res.json(newQuote);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
