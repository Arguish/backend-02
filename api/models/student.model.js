const { DataTypes } = require("sequelize");
const { sequelize } = require("../../db/dbIndex");

const Student = sequelize.define("student", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isLongerThan3(value) {
        if (value < 3) {
          throw new Error("El nombre deberia ser mas largo");
        }
      },
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
});

//
module.exports = { Student };
