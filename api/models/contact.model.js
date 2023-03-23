const { DataTypes } = require("sequelize");
const { sequelize } = require("../../db/dbIndex");

const Contact = sequelize.define("contact", {
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  number: {
    type: DataTypes.INTEGER,
  },
  phone: {
    type: DataTypes.INTEGER,
  },
});

//
module.exports = { Contact };
