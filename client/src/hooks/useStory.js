import { StoryServiceClient } from '../protos/stories_grpc_web_pb';
import { AddStoryRequest, StorySchema } from '../protos/stories_pb';
const useStory = () => {
  const client = new StoryServiceClient('http://localhost:9090', null, null);

  const addStory = async (imageLink, userId, date) => {
    const storyReq = new AddStoryRequest();
    const storyData = new StorySchema();
    storyData.setImagelink(imageLink);

    storyData.setUserid(userId);
    storyData.setDate(date);
    storyReq.setStory(storyData);
    client.addStory(storyReq, null, (err, response) => {
      if (err) {
        console.log(err);
      } else {
        console.log(response.toObject());
      }
    });
  };
  return {
    addStory,
  };
};

export default useStory;
