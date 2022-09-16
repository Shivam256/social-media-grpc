import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// import 'dotenv/config'
import grpcAuth from "grpc-jwt";

const JWT_SECRET = "thisIsNiceSecrettt";

const {login,signup,initialize} = grpcAuth.auth(User, JWT_SECRET);

// export const login = async (call, callback) => {
//   const data = call.request;
//   console.log(data);
//   const { password, email } = call.request;

//   const user = await User.findOne({ email }).populate("friends");

//   if (user) {
//     const isAuth = await bcrypt.compare(password, user.password);
//     if (!isAuth) {
//       callback(null, { message: "Incorrect Password", error: 1, token: "" });
//     }
//     const token = jwt.sign(
//       {
//         _id: user._id,
//       },
//       JWT_SECRET,
//       { expiresIn: "100000m" }
//     );
//     callback(null, {
//       message: "User successfully logged in",
//       error: 0,
//       token: token,
//       user: user,
//     });
//   } else {
//     callback(null, {
//       message: "User with this email does not exist",
//       error: 1,
//       token: "",
//       user: null,
//     });
//   }
// };

// export const signup = async (call, callback) => {
//   const data = call.request;
//   console.log(data);
//   const { username, password, email } = call.request;
//   const userExist = await User.findOne({ email });
//   if (userExist) {
//     callback(null, {
//       token: "",
//       error: 1,
//       message: "User with this email already exists",
//     });
//   }
//   const hash = await bcrypt.hash(password, 10);
//   const user = new User({ email, password: hash, username });
//   await user.save();

//   const token = jwt.sign(
//     {
//       _id: user._id,
//     },
//     JWT_SECRET,
//     { expiresIn: "10000m" }
//   );

//   callback(null, {
//     token: token,
//     message: "User successfully signed in",
//     error: 0,
//     user: user,
//   });
// };

// export const initialize = async (call, callback) => {
//   try {
//     const { token } = call.request;
//     console.log(token, "here i am !!");
//     if (!token) throw new Error("Auth token not valid");

//     const decodeToken = jwt.verify(token, JWT_SECRET);
//     if (decodeToken) {
//       const user = await User.findById(decodeToken._id).populate("friends");

//       if (!user) throw new Error("User not found!");
//       console.log(user, "i=and this is the user");

//       callback(null, { error: 0, message: "User fetched!", user: user });
//     }
//   } catch (err) {
//     callback(null, { error: 1, message: "Something went wrong!" });
//   }
// };
