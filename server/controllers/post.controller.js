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
  const resp = await Post.find({}).populate('comments.userId');
  // console.log(resp)
  const postArray = resp.map((post) => {
    return {
      userID: post.userID,
      content: post.content,
      likes: post.likes,
      imageLink: post.imageLink,
      postID: post._id.valueOf(),
      comments: post.comments.map((c) => {
        console.log(c, 'huuuiuiu');
        return {
          commentId: c._id.valueOf(),
          message: c.message,
          postId: post._id.valueOf(),
          user: {
            id: c.userId?._id?.valueOf(),
            username: c.userId?.username,
            email: c.userId?.email,
          },
        };
      }),
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
  const { message, postId, user } = call.request.comment;
  console.log(call.request, 'dfvdfvdfv');
  //   console.log(postId);
  try {
    const post = await Post.findById(postId);
    post?.comments.push({
      message,
      userId: user.id,
    });
    const updatedPost = post.save();
    callback(null, {
      message: 'comment added successfully!',
    });
  } catch (e) {
    console.log(e);
  }
};

export const addLike = async (call, callback) => {
  const id = call.request.postID;
  const resp = await Post.findById(id);
  const prevLikes = resp.likes + 1;
  const incLike = await Post.findByIdAndUpdate(id, { likes: prevLikes });
  callback(null, {});
};

export const getPostByMe = async(call,cb) =>{
  const id = call.request.userID;
  const posts = await Post.find({})
  const arr = posts.filter((post)=>{
    // console.log(post)
    // if(post.userID.valueOf()===id) console.log("FSFGFHHHHHHHHHHH")
    return post.userID.valueOf()===id
  })
  cb(null,{postArray:arr})
}
