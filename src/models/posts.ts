import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database";
import { User } from "./users";

interface PostAttributes {
  id: number;
  title: string;
  content: string;
}

interface PostInstance extends Model<PostAttributes>, PostAttributes {}

const Post = sequelize.define<PostInstance>("Post", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

Post.sync()
  .then(() => {
    Post.belongsTo(User);
    console.log("Models synchronized with database.");
  })
  .catch((error) => {
    console.error("Error synchronizing models with database:", error);
  });

export { Post };
