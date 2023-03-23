const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DBNAME,
  process.env.USERNAME,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    port: process.env.PORTDB,
  }
);

async function checkConnection() {
  try {
    await sequelize.authenticate();
    console.log("CON OK! ^w^");
  } catch (err) {
    throw err;
  }
}

module.exports = { sequelize, checkConnection };
