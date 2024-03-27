const { Request, Response } = require("express");
const { User } = require("../models/Users");
const { Post } = require("../models/Posts");
const { Comment } = require("../models/Comments");
const { Category } = require("../models/Categories");

const getAllUsers = (req, res) => {};
const creatNewUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = await User.build({
      username,
      email,
      password,
    });
    newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getUser = (req, res) => {};
const updateUser = (req, res) => {};
const deleteUser = (req, res) => {};
const createNewPost = (req, res) => {};
const getAllPosts = (req, res) => {};
const getPost = (req, res) => {};
const updatePost = (req, res) => {};
const deletePost = (req, res) => {};
const createPostCategory = (req, res) => {};
const getPostCategories = (req, res) => {};
const createPostComment = (req, res) => {};
const getPostComments = (req, res) => {};

module.exports = {
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
};
