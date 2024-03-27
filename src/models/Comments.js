const { sequelize, DataTypes } = require("../../database");

const Comment = sequelize.define("Comment", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = { Comment };
