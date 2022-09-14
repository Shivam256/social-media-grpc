import { Box } from '@mui/system';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
const CommentCard = ({ username, message }) => {
  return (
    <Box
      sx={{
        padding: '1rem',
        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
        borderRadius: '10px',
        height: 'auto',
        margin: '1rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      <Box>
        <Avatar alt="Remy Sharp" sx={{ marginRight: '0.5rem' }} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          flexDirection: 'column',
        }}
      >
        <Box>{username}</Box>
        <Box>{message}</Box>
      </Box>
    </Box>
  );
};
export default CommentCard;
