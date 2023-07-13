const express = require("express");
const {
    createPost,
    updateSpecificUserProfile,
    getSpecificUserProfile,
    deletePostByID,
    getAllUserProfile,
    UpdatePostByID,
    getSinglePostByID,
    retrieveAllBlogPost,
    CreateUsersAccount,
} = require("../controller/blogController")


const { usersLogin } = require("../controller/login")
const verifyToken = require("../middlewares/auth-workflow")

const routes = express.Router();

routes.route("/api/auth/register").post(CreateUsersAccount)
routes.route("/api/auth/login").post(usersLogin)
routes.route("/api/posts").get(verifyToken, retrieveAllBlogPost).post(verifyToken, createPost)
routes.route("/api/posts/:id").get(verifyToken, getSinglePostByID).put(verifyToken, UpdatePostByID).delete(verifyToken, deletePostByID)
routes.route("/api/users").get(verifyToken, getAllUserProfile)
routes.route("/api/users/:id").get(verifyToken, getSpecificUserProfile).put(verifyToken, updateSpecificUserProfile).delete(verifyToken, retrieveAllBlogPost)


module.exports = routes