import {
  createPost,
  viewAllPosts,
  deletePost,
  addLike,
  addComment,
} from '../controllers/post.controller.js';

const postService = {
  createPost,
  viewAllPosts,
  deletePost,
  addLike,
  addComment,
};
export default postService;
