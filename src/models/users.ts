import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database";
import { Post } from "./posts";

interface UserAttributes {
  id: number;
  username: string;
}
interface UserInstance extends Model<UserAttributes>, UserAttributes {}

const User = sequelize.define<UserInstance>("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

User.sync()
  .then(() => {
    User.hasMany(Post);
    console.log("Models synchronized with database.");
  })
  .catch((error) => {
    console.error("Error synchronizing models with database:", error);
  });

export { User };
