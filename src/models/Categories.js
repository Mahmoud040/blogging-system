const { sequelize, DataTypes } = require("../../database");
const { Post } = require("./Posts");

const Category = sequelize.define("Category", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Category.belongsToMany(Post, { through: "PostCategory" });
Post.belongsToMany(Category, { through: "PostCategory" });

module.exports = { Category };
