import User from "../models/user.model.js";

export const getUserInfo = async (call, callback) => {
  try {
    const data = call.request;
    console.log(data);
    const { userid } = call.request;

    const user = await User.findById(userid).populate("friends");

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
