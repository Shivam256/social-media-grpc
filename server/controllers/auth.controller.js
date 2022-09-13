import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// import 'dotenv/config'

const JWT_SECRET = "thisIsNiceSecrettt";

export const login = async (call, callback) => {
  const data = call.request;
  console.log(data);
  const { password, email } = call.request;

  const user = await User.findOne({ email });

  if (user) {
    const isAuth = await bcrypt.compare(password, user.password);
    if (!isAuth) {
      callback(null, { message: "Incorrect Password", error: 1, token: "" });
    }
    const token = jwt.sign(
      {
        _id: user._id,
      },
      JWT_SECRET,
      { expiresIn: "100000m" }
    );
    callback(null, {
      token: token,
      message: "User successfully logged in",
      error: 0,
    });
    return;
  }

  callback(null, {
    token: "",
    message: "User with this email does not exist",
    error: 1,
  });
};

export const signup = async (call, callback) => {
  const data = call.request;
  console.log(data);
  const { username, password, email } = call.request;
  const userExist = await User.findOne({ email });
  if (userExist) {
    callback(null, {
      token: "",
      error: 1,
      message: "User with this email already exists",
    });
  }
  const hash = await bcrypt.hash(password, 10);
  const user = new User({ email, password: hash, username });
  await user.save();

  const token = jwt.sign(
    {
      _id: user._id,
    },
    JWT_SECRET,
    { expiresIn: "10000m" }
  );

  callback(null, {
    token: token,
    message: "User successfully signed in",
    error: 0,
  });
};
