import {
  createPost,
  viewAllPosts,
  deletePost,
  addComment,
  addLike,
  getPostByMe,
} from '../controllers/post.controller.js';

const postService = {
  createPost,
  viewAllPosts,
  deletePost,
  addLike,
  addComment,
  getPostByMe,
};
export default postService;
