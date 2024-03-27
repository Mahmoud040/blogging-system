const { sequelize, DataTypes } = require("../../database");
const { Comment } = require("./Comments");

const Post = sequelize.define("Post", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  data: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});
Comment.belongsTo(Post);

module.exports = { Post };
