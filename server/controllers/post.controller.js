import Post from "../models/post.model.js"
export const createPost = async(call,callback)=>{
    const {userID,content,imageLink,likes} = call.request.post
    const newPost = new Post({userID,content,likes,imageLink})
    const res = await newPost.save();
    callback(null,{
        postID:res._id,
        msg:"POST CREATED"
    })
}

export const viewAllPosts = async(call,callback)=>{
    const resp = await Post.find({});
    console.log(resp)
}