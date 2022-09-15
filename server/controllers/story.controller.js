import mongoose from 'mongoose';
import User from '../models/user.model';
export const addStory = async (call, callback) => {
  try {
    const { userId, date, imageLink } = call.request.story;
    const user = await User.findById(userId);
    user?.stories?.push({
      imageLink,
      date,
    });
    user.save();
    callback(null, {
      message: 'story added successfully!',
    });
  } catch (e) {
    console.log(e);
  }
};
