import User from "../models/user.model.js";

export const addFriend = async (call, callback) => {
  try {
    const data = call.request;
    console.log(data);
    const { userid, tofriendid } = call.request;

    const userToFriend = await User.findById(tofriendid);
    userToFriend.requests.push({
      user: userid,
      note: note,
    });
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
