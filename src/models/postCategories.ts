import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database";
import { Post } from "./posts";
import { Category } from "./categories";

interface PostCategoryAttributes {
  postId: number;
  categoryId: number;
}

interface PostCategoryInstance
  extends Model<PostCategoryAttributes>,
    PostCategoryAttributes {}

const PostCategory = sequelize.define<PostCategoryInstance>("PostCategory", {
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
Post.belongsToMany(Category, { through: "PostCategory" });
Category.belongsToMany(Post, { through: "PostCategory" });

export { PostCategory };
