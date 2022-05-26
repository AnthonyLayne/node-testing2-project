const router = require("express").Router();
const QUOTES = require("./quotes-model");

router.get("/", async (req, res, next) => {
  try {
    const quotes = await QUOTES.getAll();
    res.json(quotes);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
