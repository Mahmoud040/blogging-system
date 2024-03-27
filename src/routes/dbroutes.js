const express = require("express");
const {
  getAllUsers,
  createNewUser,
  getUser,
  updateUser,
  deleteUser,
  createNewPost,
  getAllPosts,
  getPost,
  updatePost,
  deletePost,
  createPostCategory,
  createCategory,
  getPostCategories,
  createPostComment,
  getPostComments,
} = require("../controllers/dbcontrollers");

const router = express.Router();

router.route("/user").get(getAllUsers);
router.route("/user").post(createNewUser);
router.route("/user/:id").get(getUser);
router.route("/user/:id").put(updateUser);
router.route("/user/:id").delete(deleteUser);

router.route("/posts").post(createNewPost);
router.route("/posts").get(getAllPosts);
router.route("/posts/:id").get(getPost);
router.route("/posts/:id").put(updatePost);
router.route("/posts/:id").delete(deletePost);
router.route("/categories").post(createCategory);
router.route("/posts/:id/categories").post(createPostCategory);
router.route("/posts/:id/categories").get(getPostCategories);
router.route("/posts/:id/comments").post(createPostComment);
router.route("/posts/:id/comments").get(getPostComments);

module.exports = router;
