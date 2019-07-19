const mySql = require("mysql2");

const dbInfo = {
  host: process.env.HOST,
  database: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD
};

const connection = mySql.createConnection(dbInfo);

module.exports = connection;
