import { useState } from 'react';
import { StoryServiceClient } from '../protos/stories_grpc_web_pb';
import {
  AddStoryRequest,
  StorySchema,
  UserDetails2,
  getStoriesRequest,
} from '../protos/stories_pb';
const client = new StoryServiceClient('http://localhost:9090', null, null);

const useStory = () => {
  const [allStories, setAllStories] = useState();
  const addStory = async (imageLink, userId, date) => {
    const storyReq = new AddStoryRequest();
    const storyData = new StorySchema();
    const userDetails = new UserDetails2();
    userDetails.setId(userId);
    storyData.setImagelink(imageLink);
    storyData.setUser(userDetails);
    storyReq.setStory(storyData);
    client.addStory(storyReq, null, (err, response) => {
      if (err) {
        console.log(err);
      } else {
        console.log(response.toObject());
      }
    });
  };

  const viewStories = async () => {
    const storyReq = new getStoriesRequest();
    client.getStories(storyReq, null, (err, response) => {
      if (err) {
        console.log(err);
      } else {
        console.log(response.toObject());
        setAllStories(response.toObject());
      }
    });
  };
  return {
    addStory,
    viewStories,
    setAllStories,
    allStories,
  };
};

export default useStory;
