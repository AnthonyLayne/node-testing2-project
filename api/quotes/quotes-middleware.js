const QUOTES = require("./quotes-model");

const checkQuoteId = async (req, res, next) => {
  try {
    const quote = await QUOTES.getById(req.params.quote_id);

    if (!quote) {
      next({ status: 404, message: `Quote with ${req.params.quote_id} does not exist` });
    } else {
      req.quote = quote;
      next();
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { checkQuoteId };
