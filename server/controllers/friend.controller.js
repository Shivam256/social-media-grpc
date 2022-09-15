import User from "../models/user.model.js";

import middlewares from "../middlewares/index.js";

export const addFriend = async (call, callback) => {
  try {
    const data = call.request;
    console.log(data);
    const { userid, tofriendid, note } = call.request;

    const userToFriend = await User.findById(tofriendid);
    const rq = {
      user: userid,
      note: note,
    };
    const urqs = userToFriend.requests;
    const nurqs = [...urqs, rq];
    userToFriend.requests = nurqs;
    await userToFriend.save();

    callback(null, {
      error: 0,
      message: "Friend request successfull",
    });
  } catch (err) {
    callback(null, {
      error: 1,
      message: "Something went wrong",
    });
  }
};

export const approveFriendRequest = async (call, callback) => {
  try {
    let data = { user: null };
    await middlewares.isLoggedIn(call, callback, data);

    const { requestid, userid } = call.request;

    const user = await User.findById(data.user._id);

    const newRqs = user.requests.filter((f) => f._id.toString() != requestid);
    user.requests = newRqs;
    const userFriends = user.friends;
    const newFriends = [...userFriends, userid];
    user.friends = newFriends;

    await user.save();

    const user2 = await User.findById(userid);
    const user2Friends = user2.friends;
    const user2NewFriends = [...user2Friends, user._id];
    user2.friends = user2NewFriends;

    await user2.save();

    callback(null, {
      error: 0,
      message: "Friend request accepted!",
    });
  } catch (err) {
    console.log(err);
    callback(null, {
      error: 1,
      message: "Something went wrong",
    });
  }
};

export const rejectFriendRequest = async (call, callback) => {
  try {
    let data = { user: null };
    await middlewares.isLoggedIn(call, callback, data);

    const { requestid } = call.request;
    const user = await User.findById(data.user._id);

    const newRqs = user.requests.filter((f) => f._id.toString() != requestid);
    user.requests = newRqs;

    await user.save();

    callback(null, {
      error: 0,
      message: "Friend request rejected!",
    });
  } catch (err) {
    console.log(err);
    callback(null, {
      error: 1,
      message: "Something went wrong",
    });
  }
};
