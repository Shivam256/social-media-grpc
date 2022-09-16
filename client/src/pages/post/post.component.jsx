import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useSnackbar } from 'notistack';
import PostCard from './post.card';
import { PostServiceClient } from '../../protos/post_grpc_web_pb';
import {
  CreatePostRequest,
  DeletePostRequest,
  PostSchema,
  ViewAllPostRequest,
  ViewAllPostResponse,
} from '../../protos/post_pb';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Stories from '../../components/Stories/stories';

const client = new PostServiceClient('http://localhost:9090', null, null);

const PostComponent = () => {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const [pdata, setPdata] = useState();
  const [postArr, setPostArr] = useState();
  const [postAdded, setPostAdded] = useState(true);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const handleChange = (e) => {
    setPdata({ ...pdata, [e.target.name]: e.target.value });
    // console.log(pdata)
  };

  const createNewPost = () => {
    const postData = new PostSchema();
    postData.setContent(pdata.content);
    postData.setImagelink(pdata.imageLink);
    postData.setLikes(1);
    postData.setUserid(user?.id);
    postData.setPostid('1');
    // console.log(postData)
    const sendPostData = new CreatePostRequest();
    sendPostData.setPost(postData);

    // console.log(client)

    if (isLoggedIn) {
      client.createPost(sendPostData, {}, (err, response) => {
        if (err) console.log(err);
        else {
          console.log(response.toObject());
          enqueueSnackbar(response.toObject().msg, { variant: 'success' });
        }
      });

      setPostAdded(!postAdded);

    } else {
      navigate('/login');
      enqueueSnackbar('Please Login', { variant: 'warning' });
    }
  };

  const getAllPosts = () => {
    const viewData = new ViewAllPostRequest();
    client.viewAllPosts(viewData, null, (err, res) => {
      // console.log(res.toObject().postarrayList)
      setPostArr(res.toObject().postarrayList);
      // console.log(client)
    });
  };

  useEffect(() => {
    getAllPosts();
  }, [postAdded]);

  return (
    <>
      {/* <Typography
        sx={{ mt: 5 }}
        variant="h4"
        align="center"
        fontWeight={'bold'}
        gutterBottom
      >
        Welcome To Post Section
      </Typography> */}
      <Box>
        <Stories />
      </Box>

      <Box sx={{ width: 200, p: 1, m: 1 }}>
        <TextField
          sx={{ width: 500, m: 1 }}
          onChange={(e) => handleChange(e)}
          name="content"
          id="outlined-basic"
          label="Enter Content"
          variant="outlined"
        />
        <TextField
          sx={{ width: 500, m: 1 }}
          onChange={(e) => handleChange(e)}
          name="imageLink"
          id="outlined-basic"
          label="Enter Image Link"
          variant="outlined"
        />
        <Button
          sx={{ width: 200, p: 1, m: 1 }}
          onClick={() => createNewPost()}
          variant="contained"
        >
          Create A Post
        </Button>
      </Box>

      <Box
        sx={{ mx: 5, display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
      >
        {postArr?.map((post) => {
          return (
            <>
              <Box sx={{ w: 1, m: 2 }}>
                <PostCard
                  post={post}
                  setPostAdded={setPostAdded}
                  postAdded={postAdded}
                  userID={user?.id}
                />
              </Box>
            </>
          );
        })}
      </Box>
    </>
  );
};

export default PostComponent;
