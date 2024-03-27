const { sequelize, DataTypes } = require("../../database");
const { Comment } = require("./Comments");

const Post = sequelize.define("Post", {
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
