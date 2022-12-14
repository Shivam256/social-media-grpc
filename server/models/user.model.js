import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const StorySchema = new Schema({
  imageLink: {
    type: String,
    required: true,
  },
  // createdAt: {
  //   type: Date,
  //   default: new Date(),
  // },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'USER',
  },
});
StorySchema.index({ createdAt: Date.now }, { expireAfterSeconds: 3600 });
export const Story = mongoose.model('STORY', StorySchema);

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
  },
  password: {
    type: String,
    required: true,
  },
  profilePic:{
    type:String
  },
  username: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
  },
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'USER',
    },
  ],
  requests: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'USER',
      },
      note: {
        type: String,
      },
    },
  ],
});

const User = mongoose.model('USER', UserSchema);

export default User;
