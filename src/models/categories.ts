import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database";
import { Post } from "./posts";

interface CategoryAttributes {
  id: number;
  name: string;
}

interface CategoryInstance
  extends Model<CategoryAttributes>,
    CategoryAttributes {}

const Category = sequelize.define<CategoryInstance>("Category", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
Category.belongsToMany(Post, { through: "PostCategory" });
Category.sync()
  .then(() => {
    console.log("Models synchronized with database.");
  })
  .catch((error) => {
    console.error("Error synchronizing models with database:", error);
  });

export { Category };
