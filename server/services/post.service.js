import {
  createPost,
  viewAllPosts,
  deletePost,
  addComment,
  addLike,
} from '../controllers/post.controller.js';

const postService = {
  createPost,
  viewAllPosts,
  deletePost,
  addComment,
  addLike,
};
export default postService;
