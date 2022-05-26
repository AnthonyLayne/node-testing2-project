// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const sheredConfig = {
  client: "sqlite3",
  useNullAsDefault: true,
  migrations: {
    directory: "./data/migrations",
  },
  seeds: {
    directory: "./data/seeds",
  },
};

module.exports = {
  development: {
    ...sheredConfig,

    connection: {
      filename: "./data/quotes.db3",
    },
  },
};
