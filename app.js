const express = require("express");
const dbroutes = require("./src/routes/dbroutes");
const path = require("path");
const { sequelize } = require("./database");
require("reflect-metadata");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use("/api", dbroutes);

app.use(express.static(path.join(__dirname, "public")));
const port = 8000;
app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});

module.exports = app;
