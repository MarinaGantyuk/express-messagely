/** Common config for message.ly */

// read .env files and make environmental variables

require("dotenv").config();

const DB_URI =
  process.env.NODE_ENV === "test"
    ? "postgresql://postgres:12345@localhost:5432/messagely"
    : "postgresql:///messagely";

const SECRET_KEY = process.env.SECRET_KEY || "secret";

const BCRYPT_WORK_FACTOR = 12;

module.exports = {
  DB_URI,
  SECRET_KEY,
  BCRYPT_WORK_FACTOR,
};
