import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { PostServiceClient } from '../../protos/post_grpc_web_pb';
import {
  DeletePostRequest,
  PostSchema,
  AddLikeRequest,
} from '../../protos/post_pb';
import {
  addCommentRequest,
  addCommentResponse,
  commentSchema,
  userDetails,
} from '../../protos/post_pb';

import CommentCard from './commentCard.component';
const client = new PostServiceClient('http://localhost:9090', null, null);

const PostCard = ({ post, setPostAdded, postAdded, userID }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  console.log(post);

  const deletePostHandler = (id) => {
    const delData = new DeletePostRequest();
    console.log(id);
    delData.setPostid(id);
    client.deletePost(delData, {}, (err, res) => {
      console.log(res, err);
      setPostAdded(!postAdded);
    });
  };

  const incrementLikes = (id) => {
    console.log(id);
    const data = new AddLikeRequest();
    data.setPostid(id);

    client.addLike(data, {}, (err, res) => {
      console.log(res);
    });

    setPostAdded(!postAdded);
  };
  const [comment, setComment] = React.useState({
    message: '',
    userId: userID,
    commentId: 1,
    postId: post.postid,
  });
  const handleChange = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };
  const addCommentHandler = () => {
    const comData = new addCommentRequest();
    const userdata = new userDetails();
    const com = new commentSchema();

    userdata.setId(userID);
    userdata.setEmail(user.email);
    userdata.setUsername(user.username);
    com.setUser(userdata);
    com.setCommentid('1');
    com.setMessage(comment.message);
    com.setPostid(post.postid);
    comData.setComment(com);

    if (isLoggedIn) {
      client.addComment(comData, {}, (err, response) => {
        if (err) console.log(err);
        else {
          enqueueSnackbar(response.toObject().message, { variant: 'success' });
          setPostAdded(!postAdded);
        }
      });
    } else {
      navigate('/login');
      enqueueSnackbar('Please Login', { variant: 'warning' });
    }
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Add comment{' '}
            </Typography>
            <TextField
              onChange={(e) => handleChange(e)}
              name="message"
              id="outlined-basic"
              label="Add comment"
              variant="outlined"
              sx={{ marginBottom: '1rem' }}
            />
            <Button
              variant="contained"
              size="small"
              onClick={() => addCommentHandler()}
              // color="success"
            >
              comment
            </Button>
          </Box>
          <Box
            sx={{
              width: '100%',
              height: '30vh',
              overflowY: 'scroll',
              marginTop: '2rem',
            }}
          >
            {post?.commentsList && (
              <Box>
                {post?.commentsList.map((c) => (
                  <CommentCard username={c.user.username} message={c.message} />
                ))}
              </Box>
            )}
          </Box>
        </Box>
      </Modal>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          src={post.imagelink}
          alt="Image Not Found"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {post.content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="small"
            onClick={() => incrementLikes(post.postid)}
            color="success"
          >
            Like ({post.likes})
          </Button>
          <Button
            onClick={handleOpen}
            variant="contained"
            size="small"
            color="info"
          >
            Comment
          </Button>
          {post?.userid == userID ? (
            <>
              <Button
                variant="contained"
                size="small"
                onClick={() => deletePostHandler(post.postid)}
                color="error"
              >
                Delete
              </Button>
              <Button variant="contained" size="small" color="secondary">
                Edit
              </Button>
            </>
          ) : (
            <></>
          )}
        </CardActions>
      </Card>
    </>
  );
};

export default PostCard;
