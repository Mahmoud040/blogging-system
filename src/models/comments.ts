import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database";
import { User } from "./users";
import { Post } from "./posts";

interface CommentAttributes {
  id: number;
  content: string;
  postId: number; // Assuming each comment belongs to a post
  userId: number; // Assuming each comment is associated with a user
}

interface CommentInstance extends Model<CommentAttributes>, CommentAttributes {}

const Comment = sequelize.define<CommentInstance>("Comment", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Comment.belongsTo(User);
Comment.belongsTo(Post);

export { Comment };
