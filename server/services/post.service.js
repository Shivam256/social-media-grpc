import { createPost,viewAllPosts,deletePost,addLike } from "../controllers/post.controller.js";

const postService = {
    createPost,
    viewAllPosts,
    deletePost,
    addLike
};

export default postService;