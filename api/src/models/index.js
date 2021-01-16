const DATABASE = require("../config").DATABASE;
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  DATABASE.DATABASE,
  DATABASE.USERNAME,
  DATABASE.PASSWORD,
  {
    host: DATABASE.HOST,
    dialect: DATABASE.DIALECT,
    port: DATABASE.PORT,
    define: {
      timestamps: true,
    },
    dialectOptions: { decimalNumbers: true },
  }
);

const models = {
  User: require("./user")(sequelize, Sequelize.DataTypes),
}

sequelize.sync();

module.exports = models;
