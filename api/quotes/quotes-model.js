const db = require("../../data/db-config");

function getAll() {
  return db("quotes");
}

module.exports = {
  getAll,
};
