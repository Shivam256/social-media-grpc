import { addFriend,approveFriendRequest,rejectFriendRequest } from "../controllers/friend.controller.js";

const friendService = {
  addFriend,
  approveFriendRequest,
  rejectFriendRequest
};

export default friendService;
