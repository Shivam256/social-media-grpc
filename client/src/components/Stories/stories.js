import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import useStory from '../../hooks/useStory';
import CardMedia from '@mui/material/CardMedia';
import Story from './stories.component';
const Stories = () => {
  const { addStory, viewStories, allStories } = useStory();
  const [data, setData] = useState();
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
    const val = {};
    allStories?.allstoriesList.map((s) => {
      const p = s.user.username;
      console.log(p);
      if (val[p] === undefined) {
        val[p] = [
          {
            imagelink: s.imagelink,
            id: s.storyid,
            date: s.date,
          },
        ];
      } else {
        val[p].push({
          imagelink: s.imagelink,
          id: s.storyid,
          date: s.date,
        });
      }
    });

    console.log(val, 'hereeeee');
    const test = Object.entries(val);
    console.log(test);
    setData(test);
  }, [allStories]);

  return (
    <Box>
      {data?.map((s) => (
        <Story images={s[1]} username={[0]} />
      ))}
    </Box>
  );
};
export default Stories;
