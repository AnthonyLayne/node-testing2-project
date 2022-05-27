const db = require("../../data/db-config");

function getAll() {
  return db("quotes");
}

function getById(quote_id) {
  return db("quotes").where("quote_id", quote_id).first();
}

async function insert(quote) {
  return db("quotes")
    .insert(quote)
    .then(([quote_id]) => getById(quote_id));
}

module.exports = {
  getAll,
  getById,
  insert,
};
