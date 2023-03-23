require("dotenv").config();
const { sequelize, checkConnection, syncModels } = require("./db/dbIndex");
const addRelations = require("./db/relations.js");
const express = require("express");
const morgan = require("morgan");

async function startDB() {
  await checkConnection();
  await addRelations();
  await syncModels();
}

function startExpress() {
  const api = express()
    .use(morgan("dev"))
    .use(express.json())
    .use("/api", require("./api/routes/routIndex"))
    .listen(process.env.PORTAPI, () => {
      console.log(`LIS OK ^-^ :${process.env.PORTAPI}`);
    });
}
async function start() {
  await startDB();
  startExpress();
}

start();
