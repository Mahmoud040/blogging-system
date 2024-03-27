const { sequelize, DataTypes } = require("../../database");
const { Post } = require("./Posts");
const { Comment } = require("./Comments");

console.log("hello");

const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
});
User.hasMany(Post);
Comment.belongsTo(User);

module.exports = { User };
