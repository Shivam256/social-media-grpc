import CardMedia from '@mui/material/CardMedia';
import { Box } from '@mui/system';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { useEffect } from 'react';
const ModalStory = ({ images, username, openPlease }) => {
  console.log(openPlease);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = useState(openPlease);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(images, 'ooidcosdc');
  return (
    <Modal
      open={openPlease}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h1>{username}</h1>
        <Box>
          {images.map((im) => (
            <img
              style={{ width: '10rem', height: '200px' }}
              src={im.imagelink}
            />
          ))}
        </Box>
      </Box>
    </Modal>
  );
};
const Story = ({ images, username }) => {
  const [openPlease, setOpenPlease] = useState(false);
  return (
    <Box
      sx={{
        border: '4px solid transparent',
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
        setOpenPlease(!openPlease);
      }}
    >
      <ModalStory images={images} username={username} openPlease={openPlease} />
      <img
        style={{
          width: '5rem',
          height: '5rem',
          borderRadius: '50%',
          margin: '0.2rem',
        }}
        src="https://picsum.photos/200/300"
        alt=""
      />
    </Box>
  );
};
export default Story;
