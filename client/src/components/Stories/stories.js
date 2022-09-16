import { Box } from '@mui/system';
import { useEffect } from 'react';
import useStory from '../../hooks/useStory';
const Stories = () => {
  const { addStory } = useStory();
  useEffect(() => {
    const userId = '6320935ccfdefe923dd32bd9';
    const date = new Date().toLocaleTimeString();

    addStory(
      'https://www.jagranimages.com/images/newimg/10092022/10_09_2022-mia_khalifa_braless_photos_23058802.jpg',
      userId,
      date
    );
  }, []);

  return <Box></Box>;
};
export default Stories;
