import { Box } from '@mui/system';
import { useEffect } from 'react';
import useStory from '../../hooks/useStory';
const Stories = () => {
  const { addStory, viewStories } = useStory();
  useEffect(() => {
    // const userId = '6321dc4e5ae3818a6ec5e269';
    // const date = new Date().toLocaleTimeString();

    // addStory(
    //   'https://www.jagranimages.com/images/newimg/10092022/10_09_2022-mia_khalifa_braless_photos_23058802.jpg',
    //   userId,
    //   date
    // );
    viewStories();
  }, []);

  return <Box></Box>;
};
export default Stories;
