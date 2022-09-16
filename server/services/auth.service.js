// import { signup, login, initialize } from "../controllers/auth.controller.js";
import User from "../models/user.model.js";
// import 'dotenv/config'
import grpcAuth from "grpc-jwt";
const JWT_SECRET = "thisIsNiceSecrettt";

const {login,signup,initialize} = grpcAuth.auth(User, JWT_SECRET);


const authservice = {
  signup,
  initialize,
  login,
};

export default authservice;
