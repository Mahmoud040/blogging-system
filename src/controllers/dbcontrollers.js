const { Request, Response } = require("express");
const { User } = require("../models/Users");
const { Post } = require("../models/Posts");
const { Comment } = require("../models/Comments");
const { Category } = require("../models/Categories");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
const loginuser = async (req, res) => {
  console.log("enta retard");
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    const token = generateToken(user);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }

    res.status(200).json({ message: "Login successful", user, token });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
const createNewUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      username,
      email,
      password: hash,
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const { username, email, password } = req.body;

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.username = username;
    user.email = email;
    user.password = password;

    await user.save();

    res.status(200).json(user);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    await user.destroy();

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
const createNewPost = async (req, res) => {
  try {
    const { title, data, UserId } = req.body;

    const newPost = await Post.create({
      title,
      data,
      UserId: UserId,
    });

    res.status(201).json(newPost);
  } catch (error) {
    console.error("Error creating new post:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
const getAllPosts = async (req, res) => {
  try {
    const allPosts = await Post.findAll();

    res.status(200).json(allPosts);
  } catch (error) {
    console.error("Error retrieving posts:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
const getPost = async (req, res) => {
  try {
    const postId = req.params.id;

    const post = await Post.findByPk(postId);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.status(200).json(post);
  } catch (error) {
    console.error("Error retrieving post:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
const updatePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const { title, data } = req.body;

    const post = await Post.findByPk(postId);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    await post.update({
      title,
      data,
    });

    res.status(200).json(post);
  } catch (error) {
    console.error("Error updating post:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
const deletePost = async (req, res) => {
  try {
    const postId = req.params.id;

    const post = await Post.findByPk(postId);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    await post.destroy();

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
const createPostCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { CategoryId } = req.body;

    const post = await Post.findByPk(id);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    await post.addCategory(CategoryId);

    res
      .status(201)
      .json({ message: "Post category association created successfully" });
  } catch (error) {
    console.error("Error creating post category association:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const category = await Category.create({ name });

    res.status(201).json(category);
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
const getPostCategories = async (req, res) => {
  try {
    const postId = req.params.id;

    const post = await Post.findByPk(postId, { include: Category });

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    const categories = post.Categories;

    res.status(200).json(categories);
  } catch (error) {
    console.error("Error retrieving post categories:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
const createPostComment = async (req, res) => {
  try {
    const postId = req.params.id;
    const { content, UserId } = req.body;

    const post = await Post.findByPk(postId);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    const comment = await Comment.create({
      content,
      PostId: postId,
      UserId: UserId,
    });

    res.status(201).json({ message: "Comment created successfully", comment });
  } catch (error) {
    console.error("Error creating post comment:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getPostComments = async (req, res) => {
  try {
    const postId = req.params.id;

    const post = await Post.findByPk(postId);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    const comments = await post.getComments();

    res.status(200).json(comments);
  } catch (error) {
    console.error("Error retrieving post comments:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
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
  getPostCategories,
  createCategory,
  createPostComment,
  getPostComments,
};
