const { sequelize, DataTypes } = require("../../database");
const { Post } = require("./Posts");

const Category = sequelize.define("Category", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Category.belongsToMany(Post, { through: "PostCategory" });
Post.belongsToMany(Category, { through: "PostCategory" });

module.exports = { Category };
