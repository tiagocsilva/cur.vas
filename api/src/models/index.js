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
  Question: require("./question")(sequelize, Sequelize.DataTypes),
  QuestionAnswer: require("./questionAnswer")(sequelize, Sequelize.DataTypes),
}

Promise.all([models.Question.sync(), models.QuestionAnswer.sync()]).then(() => {
  models.Question.associate(models);
  models.QuestionAnswer.associate(models);
  sequelize.sync();
});

module.exports = models;
