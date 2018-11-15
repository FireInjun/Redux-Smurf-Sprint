const path = require("path");
const Sequelize = require("sequelize");
const uuid = require("uuid/v4");

const sequelize = new Sequelize(null, null, null, {
  dialect: "sqlite",
  storage: path.join("tmp", "db.sqlite")
});

const Smurf = sequelize.define("smurf", {
  name: {
    allowNull: false,
    type: Sequelize.STRING
  },
  age: {
    allowNull: false,
    type: Sequelize.INTEGER
  },
  height: {
    allowNull: false,
    type: Sequelize.INTEGER
  },
  id: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: uuid()
  }
});

Smurf.sync({ force: true });

module.exports = {
  Smurf
};
