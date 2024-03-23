import express, { Router } from "express";
import {
  getAllUsers,
  creatNewUser,
  getUser,
  updateUser,
  deleteUser,
  createNewPost,
  getAllPosts,
  getPost,
  updatePost,
  deletePost,
  createPostCategory,
  getPostCategories,
  createPostComment,
  getPostComments,
} from "../controllers/dbcontrollers";

const router: Router = express.Router();

router.route("/user").get(getAllUsers);
router.route("/user").post(creatNewUser);
router.route("user/:userid").get(getUser);
router.route("user/:userid").put(updateUser);
router.route("user/userid").delete(deleteUser);

router.route("/posts").post(createNewPost);
router.route("/posts").get(getAllPosts);
router.route("/posts/:postid").get(getPost);
router.route("/posts/:postid").put(updatePost);
router.route("/posts/:postid").delete(deletePost);
router.route("/posts/:postid/categories").post(createPostCategory);
router.route("/posts/:postid/categories").get(getPostCategories);
router.route("/posts/:postid/comments").post(createPostComment);
router.route("/posts/:postid/comments").get(getPostComments);

export default router;
