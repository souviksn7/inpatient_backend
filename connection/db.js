const { Client } = require("pg");
require("dotenv").config();
const config = require("../config/dbConfig");

const client = new Client(config.database);

client.connect((err) => {
  if (err) console.log(err);
  else console.log("Database connected");
});
module.exports = client;