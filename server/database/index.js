const env = process.env.NODE_ENV || "development";
const config = require("../knexfile")[env];
const database = require("knex")(config);

module.exports = database;
