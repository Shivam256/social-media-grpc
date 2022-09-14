import Post from '../models/post.model.js';
import mongoose from 'mongoose';
export const createPost = async (call, callback) => {
  const { userID, content, imageLink, likes } = call.request.post;
  const newPost = new Post({ userID, content, likes, imageLink });
  const res = await newPost.save();
  callback(null, {
    postID: res._id,
    msg: 'POST CREATED',
  });
};

export const viewAllPosts = async (call, callback) => {
  const resp = await Post.find({});
  // console.log(resp)
  const postArray = resp.map((post) => {
    return {
      userID: post.userID,
      content: post.content,
      like: post.likes,
      imageLink: post.imageLink,
      postID: post._id.valueOf(),
    };
  });
  callback(null, { postArray });
};

export const deletePost = async (call, callback) => {
  const id = call.request.postID;
  const resp = await Post.findByIdAndDelete(id);
  callback(null, { msg: 'POST DELETED' });
};

export const addComment = async (call, callback) => {
  const { message, userId, postId } = call.request;
  const comm = await Post.findById(postId);
  comm.comments.push({
    message,
    userId,
  });
  const updatedPost = comm.save();
  callback(null, {
    message: 'comment added successfully!',
  });
};

export const addLike = async (call, callback) => {
  const id = call.request.postID;
  const resp = await Post.findById(id);
  const prevLikes = resp.likes + 1;
  const incLike = await Post.findByIdAndUpdate(id, { likes: prevLikes });
  callback(null, {});
};
