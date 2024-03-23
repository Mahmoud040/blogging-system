import { Request, Response } from "express";

const getAllUsers = (req: Request, res: Response) => {};
const creatNewUser = (req: Request, res: Response) => {};
const getUser = (req: Request, res: Response) => {};
const updateUser = (req: Request, res: Response) => {};
const deleteUser = (req: Request, res: Response) => {};
const createNewPost = (req: Request, res: Response) => {};
const getAllPosts = (req: Request, res: Response) => {};
const getPost = (req: Request, res: Response) => {};
const updatePost = (req: Request, res: Response) => {};
const deletePost = (req: Request, res: Response) => {};
const createPostCategory = (req: Request, res: Response) => {};
const getPostCategories = (req: Request, res: Response) => {};
const createPostComment = (req: Request, res: Response) => {};
const getPostComments = (req: Request, res: Response) => {};

export {
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
