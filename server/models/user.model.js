import mongoose from 'mongoose';

const Schema = mongoose.Schema;

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
  stories: [
    {
      imageLink: {
        type: String,
        required: true,
      },
      date: {
        type: String,
      },
    },
  ],
});

const User = mongoose.model('USER', UserSchema);

export default User;
