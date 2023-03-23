require("dotenv").config();
const { sequelize, checkConnection } = require("./db/dbIndex");

async function startDB() {
  await checkConnection();
}

startDB();
