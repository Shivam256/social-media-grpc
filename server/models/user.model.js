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
});

const User = mongoose.model("USER", UserSchema);

export default User;
