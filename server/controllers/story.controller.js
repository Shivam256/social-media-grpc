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

export const viewAllStories = async (call, callback) => {
  try {
    const stories = await Story.find({}).populate('userId', [
      'username',
      'email',
    ]);

    const res = stories.map((story) => {
      return {
        user: {
          id: story.userId._id,
          username: story.userId.username,
          email: story.userId.email,
        },
        stories: {
          storyId: story._id,
          date: story.createdAt,
          user: story.userId._id,
          imageLink: story.imageLink,
        },
      };
    });
    callback(null, { allStories: res });
  } catch (e) {
    console.log(e);
  }
};
