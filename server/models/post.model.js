import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const postSchema = new Schema({
  userID: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  imageLink: {
    type: String,
  },
  likes: {
    type: Number,
    required: true,
  },
  comments: [
    {
      message: {
        type: String,
      },
      userId: {
        type: String,
      },
    },
  ],
});

const Post = mongoose.model('POST', postSchema);

export default Post;
