const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("blogging-system", "root", "toor", {
  host: "localhost",
  dialect: "mysql",
  logging: console.log,
});

sequelize
  .authenticate()
  .then(() => {
    console.log(
      "Connection to the database has been established successfully."
    );
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Models synchronized with database.");
  })
  .catch((error) => {
    console.error("Error synchronizing models with database:", error);
  });

module.exports = { sequelize, DataTypes };
