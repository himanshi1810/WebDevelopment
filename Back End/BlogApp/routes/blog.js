const express = require("express");
const router = express.Router();


//Import Controller
const { likePost, unlikePost } = require("../Controllers/LikeController");
const {createComment} = require("../Controllers/commentController");
const {createPost, getAllPosts} = require("../Controllers/PostController");



//Mapping Create
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);

//export
module.exports = router;

