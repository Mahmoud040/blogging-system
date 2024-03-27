const { sequelize, DataTypes } = require("../../database");

const Comment = sequelize.define("Comment", {
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = { Comment };
