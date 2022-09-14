import mongoose from "mongoose";

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
  username: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
  },
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  requests: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
      note: {
        type: String,
      },
    },
  ],
});

const User = mongoose.model("USER", UserSchema);

export default User;
