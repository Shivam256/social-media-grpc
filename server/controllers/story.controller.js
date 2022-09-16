import mongoose from 'mongoose';
import User from '../models/user.model.js';
import { Story } from '../models/user.model.js';
export const addStory = async (call, callback) => {
  try {
    const { user, date, imageLink } = call.request.story;
    const userSchema = await User.findById(user.id);
    const StorySchema = await Story.create({
      imageLink,
      userId: userSchema?._id,
    });
    StorySchema.save();
    callback(null, {
      message: 'story added successfully!',
    });
  } catch (e) {
    console.log(e);
  }
};

export const getStories = async (call, callback) => {
  try {
    const stories = await Story.find({}).populate('userId');
    console.log(stories);
    const res = stories.map((story) => {
      return {
        storyId: story._id.valueOf(),
        date: story.createdAt,
        user: {
          id: story.userId?._id.valueOf(),
          username: story.userId?.username,
          email: story.userId?.email,
        },
        imageLink: story.imageLink,
      };
    });
    console.log(res);
    callback(null, { allStories: res });
  } catch (e) {
    console.log(e);
  }
};
