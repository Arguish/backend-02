const { DataTypes } = require("sequelize");
const { sequelize } = require("../../db/dbIndex");

const Classroom = sequelize.define("classroom", {
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
});

//
module.exports = { Classroom };
