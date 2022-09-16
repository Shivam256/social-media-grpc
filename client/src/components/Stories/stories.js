import { Box } from '@mui/system';
import { useEffect } from 'react';
import useStory from '../../hooks/useStory';
import CardMedia from '@mui/material/CardMedia';

const Stories = () => {
  const { addStory, viewStories, allStories } = useStory();
  useEffect(() => {
    // const userId = '6321dc4e5ae3818a6ec5e269';
    // const date = new Date().toLocaleTimeString();

    // addStory(
    //   'https://www.jagranimages.com/images/newimg/10092022/10_09_2022-mia_khalifa_braless_photos_23058802.jpg',
    //   userId,
    //   date
    // );
    viewStories();
    console.log(allStories);
  }, []);

  useEffect(() => {
    console.log('changed');
    console.log(allStories);
  }, [allStories]);

  return (
    <Box>
      {allStories?.allstoriesList?.map((s) => (
        // <CardMedia sx={{ height: '4rem', width: '4rem' }} src={s.imagelink} />
        <img src={s.imagelink} alt="" />
      ))}
    </Box>
  );
};
export default Stories;
