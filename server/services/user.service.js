import {
  getUserInfo,
  getUsers,
  getUserFriendRequests,
} from "../controllers/user.controller.js";

const userService = {
  getUserInfo,
  getUsers,
  getUserFriendRequests,
};

export default userService;
