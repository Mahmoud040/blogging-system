import { Sequelize } from "sequelize-typescript";
/*import { User } from "./src/models/users";
import { Comment } from "./src/models/comments";
import { Category } from "./src/models/categories";
import { PostCategory } from "./src/models/postCategories";
import { Post } from "./src/models/posts";*/

const sequelize = new Sequelize("blogging-project", "root", "toor", {
  host: "localhost",
  dialect: "mysql",
  logging: console.log,
});
sequelize
  .authenticate()
  .then(() => {
    console.log(
      "Connection to the database has been established successfully."
    );
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

/*const db = {
  sequelize: sequelize,
  Sequelize: Sequelize,
  User: User,
  Post: Post,
  Category: Category,
  Comment: Comment,
  PostCategory: PostCategory,
};*/

export { sequelize };
