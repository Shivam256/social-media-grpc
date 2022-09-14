import grpc from "grpc";
import protoLoader from "@grpc/proto-loader";

import "dotenv/config";

import "./db/conn.js";

//services
import authservice from "./services/auth.service.js";
import postService from "./services/post.service.js";
import userService from "./services/user.service.js";
// import { createPost } from "./controllers/post.controller.js";

const PROTO_PATH = "index.proto";

const packageDefination = protoLoader.loadSync(PROTO_PATH);
const protoDescriptor = grpc.loadPackageDefinition(packageDefination);

const server = new grpc.Server();

//add services
server.addService(protoDescriptor.AuthService.service, authservice);
server.addService(protoDescriptor.PostService.service, postService);
server.addService(protoDescriptor.UserService.service, userService);

server.bind(process.env.SERVER_URI, grpc.ServerCredentials.createInsecure());
server.start();

console.log("server started!!!!!!");
