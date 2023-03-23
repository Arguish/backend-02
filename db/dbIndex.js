const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DBNAME,
  process.env.USERNAME,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    port: process.env.PORTDB,
    logging: false,
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

async function syncModels() {
  try {
    await sequelize.sync({ force: false });
    console.log("MOD OK! ^u^");
  } catch (error) {
    throw error;
  }
}

module.exports = { sequelize, checkConnection, syncModels };
