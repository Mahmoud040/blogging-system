const { sequelize, DataTypes } = require("../../database");
const { Comment } = require("./Comments");

const Post = sequelize.define("Post", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  data: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
});
Post.hasMany(Comment);

module.exports = { Post };
