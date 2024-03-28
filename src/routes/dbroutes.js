const express = require("express");
const {
  loginuser,
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
const { authenticateAndAuthorize } = require("../utils");

const router = express.Router();

router.route("/user").get(getAllUsers);
router.route("/user").post(createNewUser);
router.route("/user/login").post(loginuser);
router.route("/user/:id").get(authenticateAndAuthorize, getUser);
router.route("/user/:id").put(authenticateAndAuthorize, updateUser);
router.route("/user/:id").delete(deleteUser);

router.route("/posts").post(authenticateAndAuthorize, createNewPost);
router.route("/posts").get(getAllPosts);
router.route("/posts/:id").get(getPost);
router.route("/posts/:id").put(authenticateAndAuthorize, updatePost);
router.route("/posts/:id").delete(deletePost);
router.route("/categories").post(createCategory);
router
  .route("/posts/:id/categories")
  .post(authenticateAndAuthorize, createPostCategory);
router.route("/posts/:id/categories").get(getPostCategories);
router
  .route("/posts/:id/comments")
  .post(authenticateAndAuthorize, createPostComment);
router.route("/posts/:id/comments").get(getPostComments);

module.exports = router;
