import CardMedia from '@mui/material/CardMedia';
import { Box } from '@mui/system';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Typography from '@mui/material/Typography';

const ModalStory = ({ images, username, open, setOpen, setTemp }) => {
  console.log(open);
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
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const changeHandler = (currIndex) => {
    if (currIndex === images.length - 1) {
      setTimeout(() => {
        setTemp(false);
        setOpen(false);
      }, 1500);
    }
  };
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Carousel
          style={{ width: '100%' }}
          showThumbs={false}
          autoPlay
          showArrows={true}
          interval={2000}
          onChange={changeHandler}
        >
          {images.map((im, i) => {
            return (
              <div key={i}>
                <img
                  style={{ width: '10rem', height: '200px' }}
                  src={im.imagelink}
                />
              </div>
            );
          })}
        </Carousel>
      </Box>
    </Modal>
  );
};
const Story = ({ images, username }) => {
  const [open, setOpen] = useState(false);
  const [temp, setTemp] = useState(true);

  return (
    <>
      <ModalStory
        images={images}
        username={username}
        open={open}
        setOpen={setOpen}
        temp={temp}
        setTemp={setTemp}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            border: temp ? '4px solid transparent' : '4px solid gray',
            backgroundImage:
              'linear-gradient(white, white),linear-gradient(45deg, #e65853, #edadab)',
            backgroundOrigin: 'borderBox',
            backgroundClip: 'content-box,border-box',
            width: 'fit-content',
            margin: '0.4rem',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onClick={() => {
            console.log('bruhhh');
            setOpen(!open);
          }}
        >
          <img
            style={{
              width: '5rem',
              height: '5rem',
              borderRadius: '50%',
              margin: '0.2rem',
            }}
            src={images[0].imagelink}
            alt=""
          />
        </Box>
        <p>{username}</p>
      </Box>
    </>
  );
};
export default Story;
