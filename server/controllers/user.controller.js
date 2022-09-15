import User from "../models/user.model.js";

export const getUserInfo = async (call, callback) => {
  try {
    const data = call.request;
    console.log(data);
    const { userid } = call.request;

    const user = await User.findById(userid).populate("friends");
    console.log(user, "hehehe");

    if (!user) throw new Error("The user does not exist!");

    callback(null, {
      error: 0,
      message: "user info fetched successfully",
      user: user,
    });
  } catch (err) {
    console.log(err, "user error");
    callback(null, {
      error: 1,
      message: "Something went wrong",
    });
  }
};

export const getUsers = async (call, callback) => {
  try {
    const users = await User.find({});
    console.log(users,"here i am");

    console.log(users);

    callback(null, {
      error: 0,
      message: "users fetched successfully!",
      users: users,
    });
  } catch (err) {
    console.log(err, "user error");
    callback(null, {
      error: 1,
      message: "Something went wrong",
    });
  }
};

export const getUserFriendRequests = async (call, callback) => {
  try {
    const { userid } = call.request;

    const user = await User.findById(userid).populate("requests.user");
    if (!user) throw new Error("The user does not exist!");

    const req = user.requests;

    callback(null, {
      error: 0,
      message: "friend requests fetched successfully!",
      requests: req,
    });
  } catch (err) {
    console.log(err);
    callback(null, {
      error: 1,
      message: "Something went wrong",
    });
  }
};
