import { Box } from '@mui/system';
import { useEffect, useState, useCallback } from 'react';
import useStory from '../../hooks/useStory';
import CardMedia from '@mui/material/CardMedia';
import Story from './stories.component';
import Modal from '@mui/material/Modal';
import { useDropzone } from 'react-dropzone';
import { useSelector } from 'react-redux';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Stories = () => {
  const { addStory, viewStories, allStories } = useStory();
  const { user } = useSelector((state) => state.auth);
  const [data, setData] = useState();
  const [open, setOpen] = useState(false);
  const [val, setVal] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [imageLink, setImageLink] = useState('');
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 'auto',
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  };
  const addStoryHandler = () => {
    console.log(user);
    addStory(imageLink, user.id, new Date().toLocaleTimeString);
    setOpen(false);
    setVal(!val);
  };
  useEffect(() => {
    viewStories();
  }, [val]);

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
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ margin: '1rem' }}>
            {' '}
            <TextField
              onChange={(e) => setImageLink(e.target.value)}
              id="filled-basic"
              label="Filled"
              variant="filled"
            />
          </Box>
          <Button onClick={addStoryHandler}>Add Story</Button>
        </Box>
      </Modal>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: 'fit-content',
            margin: '0.4rem',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onClick={() => {
            // console.log('bruhhh');
            // setOpen(!open);
          }}
        >
          <img
            style={{
              width: '6.5rem',
              height: '6.5rem',
              borderRadius: '50%',
              margin: '0.4rem',
              marginTop: '-0.6rem',
            }}
            src="https://lh3.googleusercontent.com/EbXw8rOdYxOGdXEFjgNP8lh-YAuUxwhOAe2jhrz3sgqvPeMac6a6tHvT35V6YMbyNvkZL4R_a2hcYBrtfUhLvhf-N2X3OB9cvH4uMw=w1064-v0"
            alt=""
            onClick={handleOpen}
          />
        </Box>
        <Box>
          <hr
            style={{
              height: '80px',
              width: '0.2rem',
              color: 'black',
              backgroundColor: 'black',
              marginRight: '0.4rem',
            }}
          />
        </Box>
        {data?.map((s) => (
          <Story images={s[1]} username={s[0]} />
        ))}
      </Box>
    </>
  );
};
export default Stories;
